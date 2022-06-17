import { Background, Logo, Header, Button, Paragraph } from '../components'
import React from 'react'

export default DashboardScreen = ({navigation}) => {
  return (
    <Background>
      <Logo />
      <Header>Let's start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          })
        }
      >
        Logout
      </Button>
    </Background>
  )
}