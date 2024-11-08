import React from 'react';
import style from './style';
import {Image, Text, TextInput, View} from 'react-native';
import {useDimensionContext} from '../../context';
import colors from '../common/colors';

const CustomSearch = props => {
  const {filter} = {...props};
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
  );
  return (
    <View
      style={[
        filter ? responsiveStyle.newContainer : responsiveStyle.container,
      ]}>
      <View
        style={[filter ? responsiveStyle.newStyle : responsiveStyle.search]}>
        <View style={responsiveStyle.innerView}>
          <Image
            source={require('../../assets/images/search_header.png')}
            style={responsiveStyle.searchIcon}
          />
          <TextInput
            placeholder="Find your needs here . . ."
            placeholderTextColor={colors.gray}
            style={responsiveStyle.textInput}
            selectionColor={colors.anchor}
          />
        </View>
        <Image
          source={require('../../assets/images/voice.png')}
          style={responsiveStyle.micIcon}
        />
      </View>
      {filter ? <Text style={responsiveStyle.filter}>Filter</Text> : null}
    </View>
  );
};

export default CustomSearch;
