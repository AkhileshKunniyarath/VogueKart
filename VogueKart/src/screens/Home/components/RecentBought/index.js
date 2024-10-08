import { FlatList, Image, Text, View } from 'react-native';
import { useDimensionContext } from '../../../../context';
import style from './style';

const RecentBought = () => {
    const dimensions = useDimensionContext();
    const responsiveStyle = style(
        dimensions.windowWidth,
        dimensions.windowHeight,
    );
    const recentItem = [
        { id: 0, image : require('../../../../assets/images/iphone13.png')},
        { id: 1, image : require('../../../../assets/images/tshirt.png')},
        { id: 2, image : require('../../../../assets/images/headphone.png')},
        { id: 3, image : require('../../../../assets/images/jacket.png')},
        { id: 4, image : require('../../../../assets/images/cosmetics.png')},
        { id: 5, image : require('../../../../assets/images/titan_watch.png')},
    ]
    return(
        <View style={responsiveStyle.Container} >
            <Text style={responsiveStyle.head}>Buy from Recently Bought</Text>
            <FlatList 
            data = {recentItem} 
            horizontal
            showsHorizontalScrollIndicator ={false}
            renderItem={({item, index}) => {
                return(
                    <View style={responsiveStyle.contentView}>
                        <Image source={item.image} style={responsiveStyle.image}/>
                    </View>
                )
            }} />
        </View>
    );
};

export default RecentBought;