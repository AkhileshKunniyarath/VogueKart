import {
  ActivityIndicator,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDimensionContext} from '../../context';
import firestore from '@react-native-firebase/firestore';
import style from './style';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import CommonButton from '../../components/CommonButton';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapView, {MapMarker, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../components/common/colors';
import Snackbar from 'react-native-snackbar';
import {useDispatch, useSelector} from 'react-redux';
import RazorpayCheckout from 'react-native-razorpay';
import {updateCartCount} from '../../storage/action';
navigator.geolocation = require('@react-native-community/geolocation');

const AddAddress = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  const navigation = useNavigation();
  const userId = useSelector(state => state.userId);
  const firstName = useSelector(state => state.firstName);
  const lastName = useSelector(state => state.lastName);
  const email = useSelector(state => state.email);
  const mobileNumber = useSelector(state => state.mobileNumber);
  const route = useRoute();
  const {cartProducts, total} = route.params;
  const [newPosition, setNewPosition] = useState({});
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentLocation();
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft type={'back'} />,
    });
  }, []);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(info => {
      setNewPosition({
        latitude: info.coords?.latitude ?? 0,
        longitude: info.coords?.longitude ?? 0,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      });
    });
    Snackbar.show({
      text: 'Current location is fetched',
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: colors.green,
      textColor: colors.white,
    });
  };

  const handleCreateOrder = async paymentID => {
    const smallId = paymentID.slice(4, 12);
    await firestore()
      .collection('Orders')
      .add({
        orderId: String(smallId).toUpperCase(),
        created: Date.now(),
        updated: Date.now(),
        orderStatus: 'Ordered',
        totalAmount: total,
        address: address,
        userId: userId,
        paymentMethod: 'online',
        cartItems: cartProducts,
        userName: firstName + ' ' + lastName,
        userEmail: email,
        userPhone: mobileNumber,
        expDelDate: '',
      })
      .then(async resp => {
        await firestore()
          .collection('Cart')
          .where('userId', '==', userId)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref
                .delete()
                .then(() => {
                  setLoading(false);
                  dispatch(updateCartCount(0));
                  Snackbar.show({
                    text: 'Your Order is  successfully placed ',
                    duration: Snackbar.LENGTH_SHORT,
                    backgroundColor: colors.green,
                    textColor: colors.white,
                  });
                  setTimeout(() => {
                    navigation.goBack();
                  }, 2000);
                })
                .catch(err => {
                  console.warn(err);
                });
            });
          });
      });
  };

  const onButtonPress = () => {
    var options = {
      description: 'VogueKart Product Purchase',
      // image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_PYFPrOXD84fT53', // Your api key
      amount: parseInt(total, 10) * 100,
      name: 'VogueKart',
      prefill: {
        email: email,
        contact: mobileNumber,
        name: `${firstName} ${lastName}`,
      },
      theme: {color: '#008000'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        setLoading(true);
        handleCreateOrder(data.razorpay_payment_id);
      })
      .catch(error => {
        Snackbar.show({
          text: 'Your Order is  Failed',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: colors.red,
          textColor: colors.white,
        });
        navigation.goBack();
      });
  };

  console.log('newPosition', newPosition);
  console.log('address', address);

  return (
    <View style={responsiveStyle.container}>
      <Modal animationType="fade" transparent={true} visible={loading}>
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.7)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size={'large'} color={colors.white} />
        </View>
      </Modal>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
        nestedScrollEnabled={true}>
        <GooglePlacesAutocomplete
          placeholder="Search Location"
          currentLocation={true}
          fetchDetails={true}
          currentLocationLabel="Current Location"
          query={{
            key: 'AIzaSyDnz1JA-uz96661VQhXsNZGl1WlLcTdl1I',
            language: 'en',
          }}
          styles={{
            textInput: responsiveStyle.textInput,
            predefinedPlacesDescription: responsiveStyle.description,
          }}
          onPress={(data, details) => {
            console.warn(data, details);
            const location =
              data?.geometry?.location ?? details?.geometry?.location;
            const positionData = {
              latitude: location?.lat ?? 0,
              longitude: location?.lng ?? 0,
              latitudeDelta: 0.001,
              longitudeDelta: 0.001,
            };
            setNewPosition(positionData);
            setAddress(data?.name ?? data?.description);
          }}
        />

        {/* <MapView
        style={{width: '100%', height: 300, alignSelf:'center',}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          followsUserLocation={true}
          zoomEnabled={true}
          pitchEnabled={true}
          rotateEnabled={true}
          scrollEnabled={true}
          showsMyLocationButton={true}
          onMapReady={res => console.warn(res)}
          provider={'google'}>
          <Marker
            title={address ?? ''}
            description="This is your marker"
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
          </MapView> */}

        {/* {newPosition && (
          <MapView
            style={responsiveStyle.mapView}
            initialRegion={newPosition}
            region={newPosition}
            showsUserLocation={true}
            followsUserLocation={true}
            zoomEnabled={true}
            pitchEnabled={true}
            rotateEnabled={true}
            scrollEnabled={true}
            provider={'google'}
            showsMyLocationButton={true}>
            {address && (
              <Marker
                title={address ?? ''}
                description="This is your marker"
                coordinate={newPosition}
              />
            )}
          </MapView>
        )} */}

        {/* <View> */}
        <MapView
          key={newPosition.latitude}
          style={responsiveStyle.mapView}
          initialRegion={
            newPosition.latitude && newPosition.longitude ? newPosition : null
          }
          region={
            newPosition.latitude && newPosition.longitude ? newPosition : null
          }
          showsUserLocation={true}
          followsUserLocation={true}
          zoomEnabled={true}
          pitchEnabled={true}
          rotateEnabled={true}
          scrollEnabled={true}
          showsMyLocationButton={true}>
          {newPosition.latitude && newPosition.longitude && address && (
            <Marker
              title={address ?? ''}
              description="This is your marker"
              coordinate={newPosition}
              draggable={true}
            />
          )}
        </MapView>

        {address && (
          <View style={{paddingHorizontal: 15, paddingTop: 15}}>
            <Text
              style={{
                fontFamily: 'Lato-Regular',
                fontSize: 18,
                color: colors.black_lvl_3,
              }}>
              {address}
            </Text>
          </View>
        )}

        {/* </View> */}
        <TouchableOpacity
          style={responsiveStyle.TouchView}
          onPress={getCurrentLocation}>
          <View style={responsiveStyle.iconView}>
            <FontAwesome name="location-arrow" size={20} color={colors.white} />
          </View>
          <Text style={responsiveStyle.TouchText}>Your Current Location</Text>
        </TouchableOpacity>

        <CommonButton
          buttonText={'Confirm location & Proceed'}
          onButtonPress={onButtonPress}
        />
      </ScrollView>
    </View>
  );
};

export default AddAddress;
