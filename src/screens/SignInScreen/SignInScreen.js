import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/images/logo.png'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'

const SignInScreen = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {height} = useWindowDimensions()
  const navigation = useNavigation()

  const onSignInPressed = () => {
    navigation.navigate('Home')
  }

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword')
  }

  const onSignUpPress = () => {
    navigation.navigate('SignUp')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image 
            source={Logo} 
            style={[styles.logo, {height: height * 0.3}]} 
            resizeMode='contain'
          />

        <CustomInput
            placeholder="Login"
            value={username}
            setValue={setUsername}
          />

        <CustomInput
            placeholder="Senha"
            value={password}
            setValue={setPassword}
            secureTextEntry
          />

        <CustomButton
            text="Entrar"
            onPress={onSignInPressed}
        />

        <CustomButton
            text="Esqueci a senha"
            onPress={onForgotPasswordPressed}
            type="TERTIARY"
        />

        <SocialSignInButtons/>

        <CustomButton
            text="Não tem conta? Crie uma"
            onPress={onSignUpPress}
            type="TERTIARY"
        />

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20
  },
  logo: {
    width: 100,
    maxHeight: 200,
    maxWidth: 300
  }
})

export default SignInScreen