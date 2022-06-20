import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import {DropDownData} from './DropdownData';
import {images} from '../../assets/images/map';
import {colors} from '../../globals/colors';
import scale, {verticalScale} from '../../globals/scale';

const DropDown = props => {
  const {heading, title, modalText} = props;
  const [arrow, setArrow] = useState(false);
  return (
    <View style={styles.container} {...props}>
      <Text style={styles.heading}>{heading}</Text>
      <TouchableOpacity
        onPress={() => {
          setArrow(!arrow);
        }}>
        <View style={styles.boxContainer}>
          <Text style={styles.title}>{title}</Text>
          {arrow == true ? (
            <Image
              source={images.arrow_down}
              style={{
                height: 16,
                width: 16,
                marginRight: scale(20),
                marginTop: verticalScale(2),
              }}
            />
          ) : (
            <Image
              source={images.arrow_right}
              style={{height: 22, width: 22, marginRight: scale(20)}}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    color: colors.lightBlack,
    fontSize: global.font_14,
    fontWeight: '600',
    marginHorizontal: scale(20),
  },
  boxContainer: {
    borderWidth: 1,
    borderColor: colors.lightGray,
    backgroundColor: colors.white,
    marginHorizontal: scale(20),
    borderRadius: 10,
    // paddingHorizontal: scale(10),
    paddingVertical: scale(20),
    marginTop: verticalScale(16),
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    color: colors.lightBlack,
    fontSize: global.font_14,
    fontWeight: '600',
    marginHorizontal: scale(20),
  },
});

export default DropDown;
