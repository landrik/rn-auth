import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import COLORS from '../utils/colors';

//icons
import { Fontisto, Ionicons, Octicons } from '@expo/vector-icons'



export default function Input({ label, icon, isPassword, onFocus = () => {}, error, description, ...props }) {

  const [hidePassword, setHidePassword] = useState(isPassword);
  const [isFocused, setIsFocused] = useState(false)
  
  return (
    <View style={{width: '100%'}}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputContainer, { borderColor: error ? COLORS.red : isFocused ? COLORS.brand : COLORS.primary}]}>
        <View style={styles.leftIcon}>
          <Octicons name={icon} size={30} color={COLORS.brand} />
        </View>
        <TextInput 
          secureTextEntry={hidePassword}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true)
          }}
          onBlur={() => setIsFocused(false)}
          {...props} 
        />
        {isPassword && (
          <View style={styles.rightIcon}>
            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
              <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={COLORS.darkLight} />
            </TouchableOpacity>
            
          </View>
        )}
      </View>
      {error && (
        <View><Text style={{color: COLORS.red, fontSize: 14, fontWeight: 'bold'}}>{error}</Text></View>
      )}
      
    </View>
  )
}

const styles = StyleSheet.create({
  label:{
    color: COLORS.teritiary,
    fontSize: 13,
    textAlign: 'left',
  },
  inputContainer:{
    backgroundColor: COLORS.secondary,
    padding: 15,
    paddingHorizontal: 55,
    borderRadius: 3,
    borderWidth: 1,
    fontSize: 16,
    height: 50,
    marginTop: 3,
    marginBottom: 10,
    color: COLORS.teritiary,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 1,  
    elevation: 5,
  },
  leftIcon:{
    left: 15,
    top:10,
    position:'absolute',
    zIndex:1,
  },
  rightIcon:{
    right: 15,
    top:10,
    position: 'absolute',
    zIndex: 1,
  },

})

// const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
//   return (
//     <View>
//       <LeftIcon>
//         <Octicons name={icon} size={30} color={brand} />
//       </LeftIcon>
//       <StyledInputLabel>{label}</StyledInputLabel>
//       <StyledTextInput {...props} />
//       {isPassword && (
//         <RightIcon onPress={() => setHidePassword(!hidePassword)}>
//           <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
//         </RightIcon>
//       )}
//     </View>
//   )
// }