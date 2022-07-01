import {TouchableOpacity, Image, Text, View, FlatList} from 'react-native';
import React from 'react';
import {styles} from './ProfileScreen.styles';
import {images} from '../../assets/images/map';
import scale, { verticalScale } from '../../globals/scale';

const ProfileScreen = (props: any) => {
  const Data = [
    {
      id: 1,
      title: 'Insurance Plan',
      subTitle: 'BlueCross BlueShield',
      nav: "insurancePlan"
    },
    {
      id: 2,
      title: 'Payment History',
      subTitle: 'for past appointments',
      nav: "paymentHistory"
    },
    {
      id: 3,
      title: 'Credit Card Info',
      subTitle: 'MasterCard **** 5778',
      nav: "creditCardInfo"
    },
    {
      id: 4,
      title: 'Documents',
      subTitle: 'View your uploaded documents',
    },
  ];
  const _renderCardList = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity onPress={() => props.navigation.navigate(item.nav)}>
          <View style={styles.card}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: scale(20),
              }}>
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subTitle}>{item.subTitle}</Text>
              </View>
              <Image
                source={images.arrow_right}
                style={{
                  height: 40,
                  width: 40,
                  marginVertical: verticalScale(35),
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Text style={styles.profile}>Profile</Text>
          <TouchableOpacity>
            <Image source={images.setting} style={styles.setting} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.name}>John Smith</Text>
        <FlatList data={Data} renderItem={_renderCardList} />
      </View>
    </View>
  );
};

export default ProfileScreen;
