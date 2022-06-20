import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors} from '../../globals/colors';
import scale, {verticalScale} from '../../globals/scale';
import * as global from '../../globals/global';

const Input = props => {
  const {
    placeholder,
    value,
    secureTextEntry,
    onInputChangeHandler,
    keyboardType,
    maxLength,
    title,
    passwordIcon,
    onIconPress,
    subTitle,
    onPressForgetPassword,
    placeholderTextColor
  } = props;
  return (
    <View {...props}>
      <KeyboardAvoidingView behavior="padding">
        <View style={{flexDirection: 'row',justifyContent: 'space-between',}}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onPressForgetPassword}>
        <Text style={styles.subTitle}>{subTitle}</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            style={styles.input}
            autoCapitalize="none"
            keyboardType={keyboardType}
            // keyboardType='decimal-pad'
            onChangeText={onInputChangeHandler}
            secureTextEntry={secureTextEntry}
            maxLength={maxLength}
            value={value}
          />
          <TouchableOpacity onPress={onIconPress} style={styles.passwordIcon}>
            <Image source={passwordIcon} style={styles.passwordIcon} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.lightGray,
    backgroundColor: colors.white,
    marginHorizontal: scale(20),
    borderRadius: 10,
    paddingHorizontal: scale(20),
    paddingVertical: scale(10),
    marginTop: verticalScale(16),
    flexDirection: 'row',
  },
  input: {
    color: colors.lightBlack,
    fontSize: global.font_16,
    fontWeight: '400',
    flex: 1,
  },
  title: {
    color: colors.lightBlack,
    fontSize: global.font_14,
    fontWeight: '600',
    marginHorizontal: scale(20),
  },
  passwordIcon: {
    alignSelf: 'center',
  },
  subTitle: {
    color: colors.appThemeColor,
    fontSize: global.font_14,
    fontWeight: '600',
    marginHorizontal: scale(20),
  }
});

export default Input;
