import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Image, Platform, View} from 'react-native';
import {images} from '../assets/images/map';
import {colors} from '../globals/colors';
import {verticalScale} from '../globals/scale';
import ContactusScreen from '../screens/contactus-screen/ContactusScreen';
import HelpScreen from '../screens/help-screen/HelpScreen';
import ProfileScreen from '../screens/profile-screen/ProfileScreen';
import ScheduleScreen from '../screens/ScheduleScreen/ScheduleScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: colors.appThemeColor,
          borderTopWidth: 1,
          borderColor: colors.appThemeColor,
        },
        showLabel: false,
        safeAreaInsets: Platform.OS === 'android' && {bottom: 0},
        activeTintColor: colors.black,
        inactiveTintColor: colors.black,
      }}
      screenOptions={{headerShown: false, tabBarStyle: {height: 60}}}>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="contactUs"
          component={ContactusScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator> */}
      <Tab.Screen
        name="schedule_Screen"
        component={ScheduleScreen}
        options={({route}: any) => ({
          tabBarIcon: ({focused}) => (
            <Image
              source={images.schedule_icon}
              style={{
                width: 26,
                height: 26,
                tintColor: focused ? colors.appThemeColor : colors.gray,
              }}
            />
          ),
        })}
      />
      <Tab.Screen
        name="help_screen"
        component={HelpScreen}
        options={({route}: any) => ({
          tabBarIcon: ({focused}) => (
            <Image
              source={images.community_icon}
              style={{
                width: 26,
                height: 26,
                tintColor: focused ? colors.appThemeColor : colors.gray,
              }}
            />
          ),
          tabBarStyle: {showIcon: false},
        })}
      />
      <Tab.Screen
        name="profile_screen"
        component={ProfileScreen}
        options={({route}: any) => ({
          tabBarIcon: ({focused}) => (
            <Image
              source={images.profile_icon}
              style={{
                width: 26,
                height: 26,
                tintColor: focused ? colors.appThemeColor : colors.gray,
              }}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
