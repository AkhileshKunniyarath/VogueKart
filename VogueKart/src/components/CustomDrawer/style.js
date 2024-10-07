import { Dimensions, StyleSheet } from "react-native";
import colors from "../../components/common/colors";


const style = (width,height) => 
    StyleSheet.create({
    mainCon: {
        flex: 1,
        marginVertical: 5, 
        padding:15, 
        overflow: "hidden",
        backgroundColor: colors.white,
    },
    drawerView: {
        flexDirection:"row",
        alignItems: 'center', 
        paddingVertical: 5,
        justifyContent: 'space-between',
    },
    drawerInnerView: {
        flexDirection:"row",
        alignItems: 'center', 
        paddingVertical: 5,
    },
    icon: {
        width: 30, 
        height: 30 , 
        resizeMode: 'contain',
        marginRight: 14,
    },
    drawerText: {
        fontFamily:'Lato-Regular',
        fontSize: 22,
        color: colors.black,
    },
    iconSecond: {
        width: 25, 
        height: 25 , 
        resizeMode: 'contain',
        backgroundColor:colors.lightblue,
        overflow:'hidden',
        borderRadius: 25/2,
    },
    logoutView: {
        borderColor: colors.black_lvl_3, 
        borderWidth: 1, 
        paddingHorizontal: 15,
        paddingVertical: 12,
        backgroundColor:colors.orange_2,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 20,
        width:'55%',
        flexDirection: 'row'
    },
    logoutText: {
        fontFamily:'Lato-Regular',
        fontSize: 20,
        paddingBottom: 5,
        color: 'black',
    },
    supportView: {
        borderRadius: 20,
        backgroundColor: colors.lightblue,
        padding: 15,
        marginVertical: 15,
    },
    supportHead : {
        fontFamily:'Lato-Black',
        fontSize: 20,
        lineHeight: 30,
        color: colors.iron,
    },
    supportContent: {
        fontFamily:'Lato-Regular',
        fontSize: 16,
        lineHeight: 20,
        color: colors.iron,
    },
    supportTouch: {
        borderRadius: 20,
        backgroundColor: colors.emerald,
        padding: 10,
        marginVertical: 15,
        width: '60%',
        justifyContent:'center',
        alignItems: 'center',
        paddingBottom: 15,
    },
    supportText: {
        color: colors.white,
        fontFamily:'Lato-Bold',
        fontSize: 18,

    }
});

export default style;