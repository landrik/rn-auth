import { Stylesheet, TextInput, TouchableOpacity, View, Text } from 'react-native'
import React from 'react'
import { Ionicons, Octicons } from '@expo/vector-icons'
import COLORS from '../utils/colors'

const [hidePassword, setHidePassword] = useState(false)

export default TextInputAlt = ({label, icon, isPassword, error, description, ...props}) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.label}><Text>{label}</Text></View>
      <View style={styles.InputContainer}>
        <View style={styles.LeftIcon}>
          <Octicons size={32} name={icon} color={COLORS.brand} />
        </View>
        <TextInput
          autoCorrect={false}
          secureTextEntry={hidePassword} 
          {...props}
        />
        {isPassword && (
          <View style={styles.RightIcon}>
            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
              <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={32} color={COLORS.brand} />
            </TouchableOpacity>
          </View>)}
      </View>
        {error && (
          <View>
            <Text style={{color: COLORS.red, fontSize: 14, fontWeight: 'bold' }}>{error}</Text>
          </View>
        )}
    </View>
  )
}

const styles = Stylesheet.create({
  container: {
    flex: '1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label:{
    color: COLORS.teritiary,
    fontSize: 13,
    textAlign: 'left',
  },
  InputContainer:{
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
  LeftIcon:{
    left: 15,
    top:10,
    position:'absolute',
    zIndex:1,
  },
  RightIcon:{
    right: 15,
    top:10,
    position: 'absolute',
    zIndex: 1,
  },


})