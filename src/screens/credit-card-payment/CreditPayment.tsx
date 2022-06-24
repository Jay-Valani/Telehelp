import {Image, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import scale, {verticalScale} from '../../globals/scale';
import {images} from '../../assets/images/map';
import {styles} from './CreditPayment.styles';
import Input from '../../component/text-input/Input';
import {colors} from '../../globals/colors';

const CreditPayment = (props: any) => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: scale(23),
          justifyContent: 'space-between',
          marginTop: verticalScale(50),
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
        <Image
          source={images.unchecked}
          resizeMode="contain"
          style={styles.circle}
        />
      </View>
      <View style={{flex: 1}}>
        <ScrollView>
          <Text style={styles.heading}>
            Finally, we’ll need a payment method {'\n'}for copays and billing.{' '}
            {'\t'}
            <Image source={images.info} />
          </Text>
          <Text style={styles.enterCredDetailsTxt}>
            Please enter your credit card information
          </Text>
          <Input
            placeholder="Enter here"
            title="Cardholder Name"
            placeholderTextColor={colors.lightBlack}
            style={{marginTop: verticalScale(24)}}
          />
          <Input
            placeholder="Enter here"
            title="Card Number"
            placeholderTextColor={colors.lightBlack}
            style={{marginTop: verticalScale(24)}}
          />
          <View style={{flexDirection: 'row'}}>
            <Input
              placeholder="MM/YY"
              title="Expiration Date"
              placeholderTextColor={colors.lightBlack}
              style={{marginTop: verticalScale(24), flex: 1}}
            />
            <Input
              placeholder="xxx"
              title="cvv"
              placeholderTextColor={colors.lightBlack}
              style={{marginTop: verticalScale(24), flex: 1}}
            />
          </View>
          <Input
            placeholder="Zip code"
            title="Zip code"
            placeholderTextColor={colors.lightBlack}
            style={{marginTop: verticalScale(24), flex: 1}}
          />
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: scale(20),
              marginTop: verticalScale(20),
            }}>
            <TouchableOpacity
              onPress={() => {
                setChecked(!checked);
              }}>
              {checked == true ? (
                <Image source={images.checked} resizeMode="contain" />
              ) : (
                <Image
                  source={images.unchecked}
                  resizeMode="contain"
                  style={{tintColor: colors.gray}}
                />
              )}
            </TouchableOpacity>
            <Text style={styles.agree}>
              I agree to the{' '}
              <Text style={styles.terms_condi}>terms and conditions</Text>
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              marginBottom: verticalScale(30),
            }}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('add_documents');
              }}>
              <View style={styles.btnContainer}>
                <Text style={styles.btnText}>Continue</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default CreditPayment;
