import React from 'react'
import { Background, Logo, Header, Button, Paragraph } from '../components';

export default SplashScreen = ({navigation}) => {
  
  return (
    <Background isBgImage>
      <Logo />
      <Header>Login UI UX</Header>
      <Paragraph>
        The easiest way to start with your amazing application
      </Paragraph>
    <Button
      mode="contained"
      onPress={() => navigation.navigate('Login')}
    >Login</Button>
    <Button
      mode='outline'
      //onPress={()=> navigation.navigate('Register')}
      onPress={()=> navigation.navigate('SignUp')}
    >Register</Button>
    </Background>
  )
}