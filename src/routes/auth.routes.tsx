import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { AppointmentDetails } from '../screens/AppointmentDetails';
import { AppointmentCreate } from '../screens/AppointmentCreate';

import { theme } from '../global/styles/theme';

export type AuthRoutesProps = {
  SignIn: any,
  Home: any,
  AppointmentDetails: any,
  AppointmentCreate: any,
}

const { Navigator, Screen } = createStackNavigator<AuthRoutesProps>();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100,
        },
        headerShown: false,
      }}>
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
      <Screen name="AppointmentDetails" component={AppointmentDetails} />
      <Screen name="AppointmentCreate" component={AppointmentCreate} />
    </Navigator>
  );
}
