import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { colors } from '../../globals/colors';
import { styles } from './Button.style';

export default function Button(props) {
  let containerViewStyle = [
    styles.containerViewStyle,
    props.customContainerStyle,
  ];
  let btnStyle = [
    styles.defaultBtnStyle,
    {
      backgroundColor: props.disable
        ? colors.disableButtonColor
        : colors.appThemeColor,
    },
    props.customButtonStyle,
  ];
  let titleTextStyle = [styles.defaultTitleStyle, props.customTitleStyle];
  return (
    <View style={containerViewStyle}>
      <TouchableOpacity
        disabled={props.disable}
        style={btnStyle}
        onPress={() => props.onPress()}
      >
        <View>
          <Text style={titleTextStyle}>{props.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
