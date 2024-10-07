import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import style from './style';
import CustomTextInput from "../../components/CustomTextInput/index";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import firestore from '@react-native-firebase/firestore';
import { validateEmail, validatePhoneNumber } from "../../components/common/validations";
import Snackbar from "react-native-snackbar";
import colors from "../../components/common/colors";
import { GoogleSignin } from '@react-native-google-signin/google-signin';



const SignUp = () => {
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [mobile,setMobile] = useState('');
    const [password,setPassword] = useState('');
    const [cpassword,setCpassword] = useState('');
    const [error,setError] = useState(null);
    const navigation = useNavigation();

useEffect(() => {
    GoogleSignin.configure({
        webClientId: '532910248883-u55t6ugoc9ii4lf2tj9fruspv83qtup1.apps.googleusercontent.com',
    });
}, []);

    const handleButtonPress = async () => {
        await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    };

    const handleGoToLogIn = () => {
        navigation.goBack();
    };

    const handleSignUp = async () => {
        if (
            username.trim() !== '' && 
            email.trim() !== '' && 
            mobile.trim()  && 
            password.trim()  && 
            cpassword.trim() 
        ) {
            if (validateEmail(email.trim())){
                if(validatePhoneNumber(mobile.trim())){
                    if(password.trim() === cpassword.trim()){

                        await firestore()
                        .collection('users')
                        .where('username', '==', username.trim())
                        .where('email', '==',email.trim())
                        .get().then(async snapshot => {
                            if(snapshot.empty){
                                if(validateEmail(email.trim())){
                                    if (validatePhoneNumber(mobile.trim())){
                                        const userData = {
                                            username:username.trim(),
                                            email: email.trim(),
                                            mobilenumber: mobile.trim(),
                                            password: password.trim(),
                                            created: String(new Date()),
                                            updated: String(new Date()),
                                        };
                                        await firestore().collection('users').add(userData).then(resp => {
                                            console.warn(resp);
                                            Snackbar.show({
                                                text: 'Signin successful',
                                                duration: Snackbar.LENGTH_LONG,
                                                backgroundColor: colors.green,
                                                textColor: colors.white,
                                            });
                                            navigation.navigate('Home');
                                        }).catch(err => {
                                            console.warn(err);
                                        });
                                    }else {
                                        setError('Given mobile number is not valid.');
                                    }
                            
                                } else {
                                    setError('Given email is not valid.');
                                }
                            } else {
                                Snackbar.show({
                                    text: 'This email is already exist, try using an other or go to login ',
                                    duration: Snackbar.LENGTH_LONG,
                                    backgroundColor: colors.red,
                                    textColor: colors.white,
                                  }); 
                            }
                        });
                  } else {
                    setError('Given passwords are not matching');
                  }
                } else {
                    setError('Given Mobile Number is not valid');
                }
                
            }else {
                setError('Given Email is not valid');
            }
             
        }else {
            setError('Fill up all the fields to continue');
        }
    };

    return(
        <View style={style.container}>
            <Image source={require('../../assets/images/topBg.jpg')} 
            style= {style.TopBg} 
            />
            <ScrollView style={style.ScrollView}>
            <Image source={require('../../assets/images/logo.jpg')} 
            style= {style.logo} 
            />
            <Text style={style.loginText}>Sign Up Account</Text>

            {error !== null ? (
                <View style={style.errorView}>
                    <Text style={style.errorText}>{error}</Text>
                </View>
            ) : null }

            <CustomTextInput
            handleText={text=> setUsername(text)} 
            placeholder="Username" />

            <CustomTextInput type= "email" 
            handleText={text=> setEmail(text)} 
            placeholder="Email Address" />

            <CustomTextInput  type = "phone"
            handleText={text=> setMobile(text)} 
            placeholder="Mobile Number" />

            <CustomTextInput type= "password" 
            handleText={text=> setPassword(text)} 
            placeholder= "Password" />

            <CustomTextInput type= "password" 
            handleText={text=> setCpassword(text)} 
            placeholder= "Confirm Password" />

            <CustomButton 
            type="primary"
            handleButtonPress={handleSignUp} 
            buttonText={'Sign up'} />

            <View style={style.OrLogin}>
                <View style={style.OrLoginLine} />
                    <Text style={style.OrLoginText}>Or Sign up With</Text>
                <View style={style.OrLoginLine} />
            </View>

            <CustomButton 
            type="secondary"
            handleButtonPress={handleButtonPress} 
            buttonText={'Sign up with Google'}
            icon={require('../../assets/images/google.png')} 
            />

            <Text onPress={handleGoToLogIn} style={style.getStarted}>Go To Login</Text>

            </ScrollView>
        </View>
    );
};


export default SignUp;