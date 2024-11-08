import React, {useEffect, useState} from 'react';
import style from './style';
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import {useNavigation} from '@react-navigation/native';
import {useDimensionContext} from '../../context';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import ImagePicker from 'react-native-image-crop-picker';
import Snackbar from 'react-native-snackbar';
import colors from '../../components/common/colors';
import {
  validateEmail,
  validatePhoneNumber,
} from '../../components/common/validations';
import {useDispatch, useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import {updateProfileImage} from './controller';
import {updateProfile} from '../../storage/action';

const Account = () => {
  const navigation = useNavigation();
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );

  const {userId, firstName, lastName, email, mobileNumber, profileImage} =
    useSelector(state => state);
  const dispatch = useDispatch();

  const [fName, setFName] = useState(firstName);
  const [lName, setLName] = useState(lastName);
  const [stateEmail, setEmail] = useState(email);
  const [Phone, setPhone] = useState(mobileNumber);

  const [userImage, setUserImage] = useState('');

  const [modal, setModal] = useState(false);
  const [modalChoose, setModalChoose] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft />,
    });
  }, []);

  const handleOpenImage = () => {
    setModal(!modal);
  };

  const handleEditImage = () => {
    setModalChoose(true);
  };

  const handlePickFromGallery = () => {
    setModalChoose(false);
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setUserImage(image.path ?? '');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleFromCamera = () => {
    setModalChoose(false);
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log(image);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleUpdateProfile = async () => {
    if (validatePhoneNumber(Phone.trim())) {
      if (validateEmail(stateEmail.trim())) {
        if (fName !== '' && lName !== '') {
          let newUrl = profileImage;
          if (userImage !== '') {
            newUrl = await updateProfileImage(userImage);
          }
          await firestore()
            .collection('users')
            .doc(userId)
            .update({
              firstName: fName,
              lastName: lName,
              email: stateEmail,
              mobilenumber: Phone,
              profileimage: newUrl,
            })
            .then(() => {
              dispatch(
                updateProfile({
                  firstName: fName,
                  lastName: lName,
                  email: stateEmail,
                  mobileNumber: Phone,
                  profileImage: newUrl,
                }),
              );
              setUserImage('');
              Snackbar.show({
                text: 'Profile is updated',
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor: colors.green,
                textColor: colors.white,
              });
            });
        } else {
          Snackbar.show({
            text: 'Fill up the all fields to continue ',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: colors.red,
            textColor: colors.white,
          });
        }
      } else {
        Snackbar.show({
          text: 'Given email address is not valid ',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: colors.red,
          textColor: colors.white,
        });
      }
    } else {
      Snackbar.show({
        text: 'Given Phone Number is not valid ',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: colors.red,
        textColor: colors.white,
      });
    }
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={responsiveStyle.container}>
      <Text style={responsiveStyle.head}>
        {firstName} {lastName}
      </Text>
      <View style={responsiveStyle.userImage}>
        <TouchableOpacity onPress={handleOpenImage}>
          <Image
            source={
              userImage === ''
                ? profileImage === ''
                  ? require('../../assets/images/profile-drawer.jpeg')
                  : {uri: profileImage}
                : {uri: userImage}
            }
            style={responsiveStyle.image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={responsiveStyle.editTouch}
          onPress={handleEditImage}>
          <Image
            source={require('../../assets/images/edit-image.png')}
            style={responsiveStyle.edit}
          />
        </TouchableOpacity>
      </View>

      <CustomTextInput
        handleText={text => setFName(text)}
        value={fName}
        placeholder="First Name"
      />
      <CustomTextInput
        handleText={text => setLName(text)}
        value={lName}
        placeholder="Last Name"
      />
      <CustomTextInput
        type="email"
        handleText={text => setEmail(text)}
        value={stateEmail}
        placeholder="Email Address"
      />
      <CustomTextInput
        handleText={text => setPhone(text)}
        value={Phone}
        placeholder="Mobile Number"
      />
      <CustomButton
        type="primary"
        handleButtonPress={handleUpdateProfile}
        buttonText={'Update Profile'}
      />

      <Modal visible={modal} onRequestClose={() => setModal(false)} transparent>
        <View style={responsiveStyle.modalBg}>
          <TouchableOpacity
            onPress={() => setModal(false)}
            style={responsiveStyle.close}>
            <Image
              source={require('../../assets/images/close.png')}
              style={responsiveStyle.edit}
            />
          </TouchableOpacity>
          <Image
            style={responsiveStyle.bigImage}
            source={
              profileImage === ''
                ? require('../../assets/images/profile-drawer.jpeg')
                : {uri: profileImage}
            }
          />
        </View>
      </Modal>

      <Modal
        visible={modalChoose}
        onRequestClose={() => setModalChoose(false)}
        transparent>
        <View style={responsiveStyle.chooseOptions}>
          <View style={responsiveStyle.chooseView}>
            <TouchableOpacity
              onPress={() => setModalChoose(false)}
              style={responsiveStyle.closeOptions}>
              <Image
                source={require('../../assets/images/close.png')}
                style={responsiveStyle.edit}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleFromCamera}
              style={responsiveStyle.cameraHolder}>
              <Image
                source={require('../../assets/images/dslr-camera.png')}
                style={responsiveStyle.camera}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handlePickFromGallery}
              style={responsiveStyle.galleryHolder}>
              <Image
                source={require('../../assets/images/gallery.png')}
                style={responsiveStyle.gallery}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Account;
