import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/splash-screen/SplashScreen';
import OnBoardingScreen from '../screens/on-board-screen/OnBoardScreen';
import InviteCodeScreen from '../screens/invitation-code/InviteCodeScreen';
import EmailScreen from '../screens/email-screen/EmailScreen';
import PasswordScreen from '../screens/password-screen/PasswordScreen';
import LoginScreen from '../screens/login-screen/LoginScreen';
import ResetPasswordScreen from '../screens/reset-password/ResetPasswordScreen';
import SetNewPasswordScreen from '../screens/set-new-password/SetNewPasswordScreen';
import CheckEmail from '../screens/check-email/CheckEmail';
import SetPaymentMethod from '../screens/set-payment-method/SetPaymentMethod';
import AddInsurance from '../screens/AddInsurance/AddInsurance';
import PersonalInfo from '../screens/personal-info/PersonalInfo';
import InsuranceCard from '../screens/InsuranceCard/InsuranceCard';

const Stack = createNativeStackNavigator();

export const NavigationStack = () => {
  return (
    <Stack.Navigator initialRouteName="splash">
      <Stack.Screen
        name="splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="onBoard"
        component={OnBoardingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="invitationCode"
        component={InviteCodeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="emailScreen"
        component={EmailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="passwordScreen"
        component={PasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="reset_password"
        component={ResetPasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="set_new_password"
        component={SetNewPasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="checkEmail"
        component={CheckEmail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="set_payment_method"
        component={SetPaymentMethod}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="addInsurance"
        component={AddInsurance}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="personal_info"
        component={PersonalInfo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="insuranceCard"
        component={InsuranceCard}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
