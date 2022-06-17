import { View, TouchableOpacity, StyleSheet } from 'react-native'
import DatePicker from 'react-native-datepicker';

import React, { useState, useContext } from 'react'

import { Text } from 'react-native-paper'

import { BackButton, Background, Logo, Header, Button, TextInput, CheckBox } from '../components'

import { theme } from '../utils/theme';
import COLORS from '../utils/colors';
import { AntDesign, Ionicons, Octicons } from '@expo/vector-icons'

import { emailValidator } from '../helpers/emailValidator'
import { nameValidator } from '../helpers/nameValidator'
import { passwordValidator } from '../helpers/passwordValidator'

import Spinner from 'react-native-loading-spinner-overlay'
import { AuthContext } from '../context/AuthContext'

export default RegisterScreen = ({navigation}) => {

  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [dob, setDob] = useState();
  const [toc, setToc] = useState(false);

  const { isLoading, handleRegister } = useContext(AuthContext)

  // const handleRegister = () => {
  //   const nameError = nameValidator(name.value)
  //   const emailError = emailValidator(email.value)
  //   const passwordError = passwordValidator(password.value)
  //   if (emailError || passwordError || nameError) {
  //     setName({ ...name, error: nameError })
  //     setEmail({ ...email, error: emailError })
  //     setPassword({ ...password, error: passwordError })
  //     return
  //   }
  //   navigation.reset({
  //     index: 0,
  //     routes: [{ name: 'Dashboard' }],
  //   })
  // }

  return (
     <Background>
      <Spinner visible={isLoading} />
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Create Account</Header>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <DatePicker 
        style={{ 
          width: '100%', 
          borderRadius: 5, 
          paddingVertical: 10, 
          marginVertical: 5,
          backgroundColor: 'white',
          borderColor : "gray",
          borderWidth: 1,
        }}
        date={dob}
        mode="date"
        placeholder="date of birth"
        format="DD MMMM YYYY"
        minDate="01-January-1900"
        maxDate="01-December-2000"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        iconComponent={
          <AntDesign 
            name='calendar' 
            size={30} 
            color={COLORS.brand} 
            style={{ marginRight: 10 }}
          />
        }
        customStyles={{
          dateInput: {
            alignItems: "flex-start",
            paddingHorizontal: 10,
            paddingVertical: 10,
            width:'100%',
            borderWidth: 0,
          },
          placeholderText: {
            fontSize: 17,
            color: "gray",
          },
          dateText: {
            fontSize: 17,
          }
        }}
        onDateChange={(dob) => {
          setDob(dob);
        }}
        
      />
      <CheckBox 
        onPress={() => setToc(!toc)}
        label="I accept terms & conditions"
        isChecked={toc}
      />
      <Button
        mode="contained"
        onPress={handleRegister}
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

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})