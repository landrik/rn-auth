import { View, Text } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-native-paper';
import { theme } from '../utils/theme';


//imports screens
import { SplashScreen, OnBoardingScreen, LoginScreen, ForgotPasswordScreen, RegisterScreen, DashboardScreen, SignUpScreen, HomeScreen, ProfileScreen, ExercicesScreen, ExercisesListScreen } from '../screens'
//import colors
//import { Colors } from '../components/styles';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Provider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName='Exercises'
      >
        <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Exercises" component={ExercicesScreen} />
        <Stack.Screen name="ExercisesList" component={ExercisesListScreen} />
        

      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default RootStack