import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import style from './style';
import CustomTextInput from "../../components/CustomTextInput/index";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import Snackbar from "react-native-snackbar";
import colors from "../../components/common/colors";
import { validateOtp, validatePhone } from "./controller";
import { useDimensionContext } from "../../context";



const LoginPhone = () => {
    const [phone,setPhone] = useState('');
    const [confirm,setConfirm] = useState(null);
    const [otp,setOtp] = useState('');
    const [error,setError] = useState(null);
    const [showOtp,setShowOtpField] = useState(false);
    const navigation = useNavigation();
    const dimensions = useDimensionContext();

    const responsiveStyle = style (dimensions.windowWidth, dimensions.windowHeight);

    const handleButtonPress = async() => {
        try {
            setError(null);
            if(validatePhone(phone.trim())) {
                const confirmation = await auth().signInWithPhoneNumber(phone);
                if(confirmation){
                Snackbar.show({
                    text: 'Verification code is send to your registered mobile number',
                    duration: Snackbar.LENGTH_LONG,
                    backgroundColor: colors.green,
                    textColor: colors.black ,
                  });
                setConfirm(confirmation);
                setShowOtpField(true);
            }
            } else {
                setError('Given phone number is incorrect');
            }
            
        } catch (error) {
          setError('Given phone number is incorrect');
        }
      };

    const handleGoToLogIn = () => {
        navigation.goBack();
    };

    const handleVerifyOtp = async () => {
        if (otp.trim() !== '' && validateOtp(otp.trim())) {
            const res = await confirm.confirm(otp.trim());
            if (res) {
                Snackbar.show({
                    text: 'Your phone number is verified, Login Successful.',
                    duration: Snackbar.LENGTH_LONG,
                    backgroundColor: colors.green,
                    textColor: colors.black ,
                  });
                  navigation.navigate('Home');
            } 
        } else {
            setError('Entered OTP is not valid');
        }
    };

    return(
        <View style={responsiveStyle.container}>
            <Image source={require('../../assets/images/topBg.jpg')} 
            style= {responsiveStyle.TopBg} 
            />
            <ScrollView style={responsiveStyle.ScrollView} showsVerticalScrollIndicator={false}>
            <Image source={require('../../assets/images/logo.jpg')} 
            style= {responsiveStyle.logo} 
            />
            <Text style={responsiveStyle.loginText}>Login With phone</Text>

            {error !== null ? <Text style= {responsiveStyle.errorText}>{error}</Text> : null}
            <CustomTextInput 
            handleText={text=> setPhone(text)} 
            placeholder="phone Number" 
            type="phone"
            />

            {showOtp ? (
                <CustomTextInput 
                handleText={text=> setOtp(text)} 
                placeholder="Enter OTP" 
                type="phone"
                />
            ) : null}

            <CustomButton 
            type="primary"
            handleButtonPress={showOtp ? handleVerifyOtp : handleButtonPress} 
            buttonText={showOtp ? 'Verify OTP' : 'Sign In with phone'} />

            <Text onPress={handleGoToLogIn} style={responsiveStyle.getStarted}>Go To Login</Text>
            
            </ScrollView>
        </View>
    );
};


export default LoginPhone;