import { DefaultTheme } from 'react-native-paper'

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#000000',
    // primary: '#560CCE',
    // secondary: '#414757',
    error: '#f13a59',
    white: '#ffffff',
    secondary: '#e5e7eb',
    teritiary: '#1f2937',
    darkLight: '#9ca3af',
    brand: '#f39c12',
    primary: '#f39c12',
    green: '#10b981',
    error: '#ef4444',
    black: '#000000',
  },
  fonts: {
    ...DefaultTheme.fonts,
    small: 15,
    regular: 16,
    big: 20,
    icon: 30,
  },
}