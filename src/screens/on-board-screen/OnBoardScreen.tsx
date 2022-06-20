import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {images} from '../../assets/images/map';
import {styles} from './OnBoardScreenStyles';
import Button from "../../component/Button/Button"

export default function OnBoardingScreen(props: any) {
  const [pageIndex, setPageIndex] = useState(0);
  let index = 0;
  const flatlistScrollRef = useRef();
  const DATA = [
    {
      id: '0',
      image: images.app_logo,
      title: ` Extra support \n during recovery`, 
    },
    {
      id: '1',
      image: images.app_logo,
      title: ' Live 1:1 and group \n therapy sessions',
    },
    {
      id: '2',
      image: images.app_logo,
      title: ' 24/7 Emergency \n access',
    },
  ];

  const _renderScrollBackground = (item, index) => {
    return (
      <View style={styles.backgroundContainer}>
        <Image
          source={item.image}
          style={{height: 50, width: 50, marginBottom: 20}}
        />
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 32,
            textAlign: 'center',
          }}>
          {item.title}
        </Text>
      </View>
    );
  };

  const onScrollEnd = value => {
    const contentOffset = value.nativeEvent.contentOffset;
    const viewSize = value.nativeEvent.layoutMeasurement;
    const pageNum = Math.floor(contentOffset.x / viewSize.width + 0.5);
    setPageIndex(pageNum);
    index = pageNum;
  };

  const renderDotView = item => {
    return (
      <View
        style={[
          styles.dotStyle,
          {
            opacity: parseInt(item.id) !== pageIndex ? 0.4 : 1,
          },
        ]}></View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.scrollContainer}>
        <FlatList
          ref={flatlistScrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          data={DATA}
          renderItem={({item, index}) => _renderScrollBackground(item, index)}
          keyExtractor={item => item.id}
          onMomentumScrollEnd={value => onScrollEnd(value)}
          style={{flex: 1}}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.dotContainer}>
          {DATA.map(item => {
            return renderDotView(item);
          })}
        </View>
        <Button
          title={'Enter your invite code'}
          onPress={() => {
            props.navigation.navigate('invitationCode');
          }}
        />
        <View style={styles.loginContainer}>
          <Text style={styles.haveAccount}>
            Already have account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('login');
            }}>
            <Text style={styles.loginTxt}>{' Log in.'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
