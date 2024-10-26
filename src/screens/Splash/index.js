import { Image, View } from "react-native"
import colors from "../../components/common/colors";

const Splash = () => {
    return(
        <View style={{
            flex:1, 
            justifyContent: "center", 
            backgroundColor: colors.white_Bg,
            alignItems:"center",
            }}>
            <Image source={require('../../assets/images/logo.jpg')} 
            style={{
                width:200,
                height:200, 
                resizeMode:"contain",
            }}/>
        </View>
    )
};

export default Splash;