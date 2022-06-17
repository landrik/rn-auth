import { StyleSheet, Text, View, TouchableOpacity, Keyboard, Alert } from 'react-native'
import React, { useState } from 'react'
import { Background, Logo, Header, Button, Input, BackButton, Loader } from '../components';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignUpScreen({navigation}) {

  const initialState = {
    email: '',
    fullname: '',
    dob:' 12 mai 1987',
    password: '',
    confirmpassword: ''
  }
  
  const [inputs, setInputs] = useState(initialState);
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)


  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    if(!inputs.email){
      handleError('This field cannot be empty', 'email')
      valid = false
    }else if(!inputs.email.match(/\S+@\S+\.\S+/)){
      handleError('Use a correct email format', 'email')
      valid = false
    }
    if(!inputs.fullname){
      handleError('This field cannot be empty', 'fullname')
      valid = false
    }
    if(!inputs.dob){
      handleError('This field cannot be empty', 'dob')
      valid = false
    }
    if(!inputs.password){
      handleError('This field cannot be empty', 'password')
    }else if(!inputs.password.length < 6){
      handleError('Minimum 6 characters')
    }

    if(valid){
      register()
    }
  }
  const register = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      try {
        AsyncStorage.setItem('user', JSON.stringify(inputs))
        navigation.navigate('Login')
      } catch (error) {
        Alert.alert('Error', 'Someting went wrong')
      }
    }, 3000)
  }
  const handleChange = (text, input) => {
    setInputs((prevState) => ({...prevState, [input]: text}))
  }
  const handleError = (errorMessage, input) => {
    setErrors(prevState => ({...prevState, [input]: errorMessage}));
  }

  return (
    <Background>
      <Loader visible={loading} />
      <BackButton goBack={navigation.goBack} />
      <Header>Create Account</Header>
      <Input 
        label='Email'
        icon='mail'
        placeholder='email@youremail.com'
        onChangeText={text => handleChange(text, 'email')}
        error={errors.email}
        onFocus={() => handleError(null, 'email') }
      />
      <Input
        label="Full Name"
        icon='person'
        placeholder='Joe Doe'
        onChangeText={text => handleChange(text, 'fullname')}
        error={errors.fullname}
        onFocus={() => handleError(null, 'fullname') }
      />
      <Input 
        label='Date of Birth'
        icon='calendar'
        placeholder='12 Mai 1987'
        onChangeText={text => handleChange(text, 'dob')}
        error={errors.dob}
        onFocus={() => handleError(null, 'dob') }
      />
      
      <Input 
        label='Password'
        icon='lock'
        placeholder='* * * * *'
        isPassword
        onChangeText={text => handleChange(text, 'password')}
        error={errors.password}
        onFocus={() => handleError(null, 'password') }
      />
      <Input 
        label='Confirm Password'
        icon='lock'
        placeholder='* * * * *'
        isPassword
        onChangeText={text => handleChange(text, 'confirmpassword')}
        error={errors.confirmpassword}
        onFocus={() => handleError(null, 'confirmpassword') }
      />
      <Button
        mode="contained"
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('Login')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({})