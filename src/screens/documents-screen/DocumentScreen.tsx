import {TouchableOpacity, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import scale, {verticalScale} from '../../globals/scale';
import {images} from '../../assets/images/map';
import {colors} from '../../globals/colors';
import {styles} from './DocumentScreen.styles';

const DocumentScreen = (props: any) => {
  const Data = [
    {
      id: 1,
      title: 'Assignment of Benefits',
    },
    {
      id: 2,
      title: 'Online Therapy \nConsent Form',
    },
    {
      id: 3,
      title: 'HIPAA Privacy \nAuthorization Form',
    },
    {
      id: 4,
      title: 'HIPAA Privacy \nAuthorization Form (2)',
    },
  ];
  const _renderDocumentList = ({item, index}) => {
    return (
      <View>
        <View style={styles.card}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: verticalScale(16),
              marginHorizontal: scale(20),
              justifyContent: 'space-between',
            }}>
            <View style={{flex: 1}}>
              <Text style={styles.info}>{item.title}</Text>
            </View>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.view}>View</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Image
            source={images.back_arrow}
            resizeMode="contain"
            style={styles.back_arrow}
          />
        </TouchableOpacity>
        <Text style={styles.heading}>Documents</Text>
      </View>
      {/* footer */}
      <View style={styles.footer}>
        <View>
          <FlatList data={Data} renderItem={_renderDocumentList} />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            marginBottom: verticalScale(36),
          }}>
          <Text style={styles.contactAdmin}>
            Contact admin support or your therapist to revoke any of your HIPAA
            Privacy Authorization forms
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DocumentScreen;
