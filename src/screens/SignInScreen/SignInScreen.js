import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput} from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/images/logo.png'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'
import {useForm, Controller} from 'react-hook-form'

const SignInScreen = () => {
  const {height} = useWindowDimensions()
  const navigation = useNavigation()

  const {control, handleSubmit, formState: {errors} } = useForm()

  const onSignInPressed = (data) => {
    console.log(data)
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
            name="login"
            placeholder="Login"
            rules={{required: 'Login é obrigatório'}}
            control={control}
          />

        <CustomInput
            name="senha"
            placeholder="Senha"
            control={control}
            rules={{
              required: 'Senha é obrigatória',
              minLength: {value: 3, message: 'A senha precisa ter no mínimo 3 caracteres'}}}
            secureTextEntry
          />

        <CustomButton
            text="Entrar"
            onPress={handleSubmit(onSignInPressed)}
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