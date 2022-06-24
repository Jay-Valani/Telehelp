import {TouchableOpacity, Text, View, Image} from 'react-native';
import React from 'react';
import {images} from '../../assets/images/map';
import scale, {verticalScale} from '../../globals/scale';
import {styles} from './ConfirmSelection.styles';

const ConfirmSelection = (props: any) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: scale(23),
          justifyContent: 'space-between',
          marginTop: verticalScale(60),
        }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}>
          <Image
            source={images.back_arrow}
            resizeMode="contain"
            style={styles.back_arrow}
          />
        </TouchableOpacity>
        <Image source={images.circle} resizeMode="contain" />
      </View>
      <Text style={styles.heading}>
        Please confirm {'\n'}
        your selection
      </Text>
    </View>
  );
};

export default ConfirmSelection;
