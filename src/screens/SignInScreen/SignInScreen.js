import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/images/logo.png'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'

const SignInScreen = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {height} = useWindowDimensions()

  const onSignInPressed = () => {
    console.warn("Logar")
  }

  const onForgotPasswordPressed = () => {
    console.warn("Esqueceu a senha")
  }

  const onSignInFacebook = () => {
    console.warn("Entrou pelo facebook")
  }

  const onSignInGoogle = () => {
    console.warn("Entrou pelo google")
  }

  const onSignUpPress = () => {
    console.warn("Criar conta")
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

        <CustomButton
            text="Entrar pelo Facebook"
            onPress={onSignInFacebook}
            bgColor="#e7eaf4"
            fgColor="#4765a9"
        />

        <CustomButton
            text="Entrar pelo Google"
            onPress={onSignInGoogle}
            bgColor="#fae9ea"
            fgColor="#dd4d44"
        />

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