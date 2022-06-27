import {Image, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import scale, {verticalScale} from '../../globals/scale';
import {images} from '../../assets/images/map';
import {styles} from './SelectedFrequency.styles';
import {colors} from '../../globals/colors';

const SelectedFrequency = (props: any) => {
  const [selectedFrequency, setSelectedFrequency] = useState(null);
  const Data = [
    {
      id: 1,
      title: 'Just once',
    },
    {
      id: 2,
      title: 'Weekly',
    },
    {
      id: 3,
      title: 'Monthly',
    },
  ];
  const _renderFrequencyItem = ({index, item}) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            console.log('jisdfasdf', index);
            setSelectedFrequency(index);
          }}>
          <View
            style={[
              styles.card,
              {
                marginTop: verticalScale(16),
                borderColor:
                  selectedFrequency != index
                    ? colors.lightBlack
                    : colors.appThemeColor,
              },
            ]}>
            <Text
              style={[
                styles.cardTxt,
                {
                  color:
                    selectedFrequency != index
                      ? colors.lightBlack
                      : colors.appThemeColor,
                },
              ]}>
              {item.title}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const onSubmit = () => {
    selectedFrequency == null ? null : props.navigation.navigate('calender');
  };
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
        <Image source={images.HalfCircle} resizeMode="contain" />
      </View>
      <Text style={styles.heading}>Select session {'\n'}frequency</Text>
      <View style={{marginTop: verticalScale(34)}}>
        <FlatList data={Data} renderItem={item => _renderFrequencyItem(item)} />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: verticalScale(15),
        }}>
        <TouchableOpacity
          onPress={() => {
            onSubmit();
          }}>
          <View
            style={[
              styles.btnContainer,
              {
                borderColor:
                  selectedFrequency == null
                    ? colors.disableButtonColor
                    : colors.appThemeColor,
                backgroundColor:
                  selectedFrequency == null
                    ? colors.disableButtonColor
                    : colors.appThemeColor,
              },
            ]}>
            <Text style={styles.btnText}>Continue</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Text
            style={[
              styles.btnText,
              {color: colors.appThemeColor, marginTop: verticalScale(24)},
            ]}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectedFrequency;
