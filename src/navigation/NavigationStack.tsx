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
import CreditPayment from '../screens/credit-card-payment/CreditPayment';
import AddDocuments from '../screens/add-documents/AddDocuments';
import SessionBooked from '../screens/sessions-book/SessionBooked';
import SelectedFrequency from '../screens/select-session-frequency/SelectedFrequency';
import Calender from '../screens/CalenderScreen/CalenderScreen';
import ConfirmSelection from '../screens/confirm-selection/ConfirmSelection';
import ScheduleScreen from '../screens/ScheduleScreen/ScheduleScreen';
import HelpScreen from '../screens/help-screen/HelpScreen';
import TabNavigation from './TabNavigation';
import ManageAppointment from '../screens/manage-appointment/ManageAppointment';
import CancleAppointment from '../screens/cancle-appointment/CancleAppointment';
import ContactusScreen from '../screens/contactus-screen/ContactusScreen';
import InsurancePlan from '../screens/insurance-plan/InsurancePlan';
import GovCard from '../screens/gov-card/GovCard';
import PaymentHistory from '../screens/PaymentHistory/PaymentHistory';
import CreditCardInfo from '../screens/creditcard-info/CreditCardInfo';

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
      <Stack.Screen
        name="credit_payment"
        component={CreditPayment}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="add_documents"
        component={AddDocuments}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="session_book"
        component={SessionBooked}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="selected_frequency"
        component={SelectedFrequency}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="calender"
        component={Calender}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="confirm_selection"
        component={ConfirmSelection}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="tabNavigation"
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="manageAppointment"
        component={ManageAppointment}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="cancleAppointment"
        component={CancleAppointment}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="contactUs"
        component={ContactusScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="insurancePlan"
        component={InsurancePlan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="govCard"
        component={GovCard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="paymentHistory"
        component={PaymentHistory}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="creditCardInfo"
        component={CreditCardInfo}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
