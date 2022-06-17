import { StatusBar } from 'expo-status-bar';
import React from 'react'

import RootStack from './src/navigations/RootStack';
import {AuthProvider} from './src/context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <RootStack />
    </AuthProvider>
  );
}

