import {Text, View} from 'react-native';
import colors from '../../../components/common/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDimensionContext} from '../../../context';
import Accordion from 'react-native-collapsible/Accordion';
import style from './style';
import {useState} from 'react';

const ExtraInfo = props => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );

  const [curActiveSections, setActiveSections] = useState([0]);
  const DetailsArray = [
    {
      title: 'Manufacture Details',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      title: 'Product Disclimer',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      title: 'Features & Details',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
  ];

  const _renderHeader = sections => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: 10,
        }}>
        <Text style={responsiveStyle.descriptionHead}>{sections.title}</Text>
        <AntDesign name="down" size={20} color={colors.gray} />
      </View>
    );
  };
  const _renderContent = sections => {
    return (
      <View>
        <Text style={responsiveStyle.descriptionDetail}>
          {sections.content}
        </Text>
      </View>
    );
  };
  const _updateSections = activeSections => {
    setActiveSections(activeSections);
  };
  return (
    <>
      <Accordion
        activeSections={curActiveSections}
        sections={DetailsArray}
        renderHeader={_renderHeader}
        renderContent={_renderContent}
        onChange={_updateSections}
        underlayColor={'transparent'}
        sectionContainerStyle={{
          paddingVertical: 10,
          borderBottomColor: colors.gray,
          borderBottomWidth: 1,
        }}
      />
    </>
  );
};

export default ExtraInfo;
