import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useDimensionContext} from '../../context';
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
import {useSelector} from 'react-redux';
import RazorpayCheckout from 'react-native-razorpay';
navigator.geolocation = require('@react-native-community/geolocation');

const AddAddress = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  const navigation = useNavigation();
  const {firstName, lastName, email, mobileNumber} = useSelector(
    state => state,
  );
  const route = useRoute();
  const {cartProducts, total} = route.params;
  const [newPosition, setNewPosition] = useState({});
  const [address, setAddress] = useState('');

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

  const onButtonPress = () => {
    var options = {
      description: 'VogueKart Product Purchase',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: '', // Your api key
      amount: String(total),
      name: 'VogueKart Product Purchase',
      prefill: {
        email: email,
        contact: mobileNumber,
        name: `${firstName} ${lastName}`,
      },
      theme: {color: '#F37254'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        console.log('=================================');
        console.log(data.razorpay_payment_id);
        console.log('=================================');
      })
      .catch(error => {
        // handle failure
        console.log('=================================');
        console.log(`Error: ${error.code} | ${error.description}`);
        console.log('=================================');
      });
  };

  return (
    <View style={responsiveStyle.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
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
            backgroundColor: colors.black,
            
            textInput: responsiveStyle.textInput,
            predefinedPlacesDescription: responsiveStyle.description,
          }}
          onPress={(data, details) => {
            console.warn(data, details);
            // const location =
            //   data?.geometry?.location ?? details.geometry.location;
            // const positionData = {
            //   latitude: location?.lat ?? 0,
            //   longitude: location?.lng ?? 0,
            //   latitudeDelta: 0.001,
            //   longitudeDelta: 0.001,
            // };
            // setNewPosition(positionData);
            // setAddress(data?.name ?? data?.description);
          }}
        />
        </View>
        {/* <MapView
          style={responsiveStyle.mapView}
          initialRegion={newPosition}
          region={newPosition}
          showsUserLocation={true}
          followsUserLocation={true}
          zoomEnabled={true}
          pitchEnabled={true}
          rotateEnabled={true}
          scrollEnabled={true}
          showsMyLocationButton={true}>
          <Marker
            title={address}
            description="This is your marker"
            coordinate={newPosition}
          />
        </MapView> */}
        <View>
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
            {newPosition.latitude && newPosition.longitude && (
              <Marker
                title="You are here"
                description="This is your marker"
                coordinate={newPosition}
                draggable={true}
              />
            )}
          </MapView>
        </View>
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
