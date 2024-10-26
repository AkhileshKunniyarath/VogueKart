import React from 'react';
import style from './style';
import {FlatList, Image, Text, View} from 'react-native';
import {useDimensionContext} from '../../context';
import CommonSectionHeader from '../CommonSectionHeader';

const OfferProducts = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
  );
  const products = [
    {
      id: 0,
      name: 'Dress',
      content: 'Round Neck Short Sleeve Jumpsuit with Pockets',
      Price: 1399,
      image: require('../../assets/images/new-product-dress.jpg'),
      off: '20% Off',
    },
    {
      id: 1,
      name: 'Shrugs',
      content: 'Madame Fleece Collar Grey Longline Shrug',
      Price: 1574,
      image: require('../../assets/images/new-product-dress-two.jpg'),
      off: '20% Off',
    },
    {
      id: 2,
      name: 'HandBag',
      content: 'Miraggio Simone Saddle Women Shoulder Handbag',
      Price: 1992,
      image: require('../../assets/images/new-product-bag.jpg'),
      off: '20% Off',
    },
    {
      id: 3,
      name: ' Earring',
      content: 'Skagen Women Kariana Rose Gold Earring ',
      Price: 4495,
      image: require('../../assets/images/new-product-earring.jpg'),
      off: '20% Off',
    },
    {
      id: 4,
      name: 'Fancy Flats',
      content: 'Tao Paris Leather Flats Sandal Pink Stylish Wear ',
      Price: 3990,
      image: require('../../assets/images/new-product-footwear.jpg'),
      off: '20% Off',
    },
    {
      id: 5,
      name: 'SkinCare',
      content: ' Vitamin C  Serum For Glowing Skin For Dark Spots',
      Price: 196,
      image: require('../../assets/images/new-product-skincare.jpg'),
      off: '20% Off',
    },
    {
      id: 6,
      name: 'Casual Pants',
      content: 'RIVER by Narendra Kumar Designer Casual Pants',
      Price: 1987,
      image: require('../../assets/images/new-product-pants.jpg'),
      off: '20% Off',
    },
    {
      id: 7,
      name: 'Pendant Set',
      content: 'GIVA 925 Silver Rose Gold Pendant Set ',
      Price: 2879,
      image: require('../../assets/images/new-product-comboset-jewellery.jpg'),
      off: '20% Off',
    },
  ];
  return (
    <View style={responsiveStyle.container}>
      <CommonSectionHeader
        head={'Say Hello To Offers!'}
        content={'Best prices ever of all the time.'}
        rightText={'See All'}
      />

      <View>
        <FlatList
          data={products}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => String(index)}
          renderItem={({item, index}) => {
            return (
              <View style={responsiveStyle.productView}>
                <Image
                  source={item.image}
                  style={responsiveStyle.productImage}
                />
                <View style={responsiveStyle.productNameView}>
                  <Text style={responsiveStyle.name} numberOfLines={1}>
                    {item.name}
                  </Text>
                  <Text style={responsiveStyle.dis} numberOfLines={1}>
                    {item.content}
                  </Text>
                  <View style={responsiveStyle.priceView}>
                    <View style={responsiveStyle.priceView2}>
                      <Text style={responsiveStyle.price}>₹ {item.Price}</Text>
                      <View style={responsiveStyle.offView}>
                        <Text style={responsiveStyle.offText}>{item.off}</Text>
                      </View>
                    </View>
                    <View style={responsiveStyle.quantityView}>
                      <Text style={responsiveStyle.quantityText1}>-</Text>
                      <Text style={responsiveStyle.quantityText2}>0</Text>
                      <Text style={responsiveStyle.quantityText1}>+</Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default OfferProducts;
