import { View, Text, StyleSheet, ScrollView, Alert} from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'
import {useForm} from 'react-hook-form'
import { Auth } from 'aws-amplify'

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password')

  const navigation = useNavigation()

  const onRegisterPressed = async (data) => {
    const {username, name, password, email} = data

    try {
      const response = await Auth.signUp({
        username,
        password,
        attributes: {email, name, preferred_username: username}
      })

      navigation.navigate('ConfirmEmail', {username})

    } catch (e) {
      Alert.alert('Algo deu errado', e.message)
    }
  }

  const onSignInPress = () => {
    navigation.navigate('SignIn')
  }

  const onTermsOfUsePressed = () => {
    console.warn("Termos de Uso")
  }

  const onPrivacyPressed = () => {
    console.warn("Política de Privacidade")
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Criar uma conta</Text>

        <CustomInput
            name="name"
            control={control}
            placeholder="Nome"
            rules={{
              required: 'Nome obrigatório',
              minLength: {
                value: 3,
                message: 'Nome precisa ter no mínimo 3 caracteres',
              },
              maxLength: {
                value: 24,
                message: 'Nome pode ter no máximo 24 caracteres',
              },
            }}
          />

        <CustomInput
            name="username"
            control={control}
            placeholder="Username"
            rules={{
              required: 'Username obrigatório',
              minLength: {
                value: 3,
                message: 'Username precisa ter no mínimo 3 caracteres',
              },
              maxLength: {
                value: 24,
                message: 'Username pode ter no máximo 24 caracteres',
              },
            }}
          />

        <CustomInput
            placeholder="Email"
            control={control}
            name="email"
            rules={{
              required: 'Email é obrigatório',
              pattern: {value: EMAIL_REGEX, message: 'Email inválido'},
            }}
          />

        <CustomInput
            placeholder="Senha"
            name="password"
            control={control}
            rules={{
              required: 'Senha obrigatória',
              minLength: {
                value: 8,
                message: 'Senha precisa ter no mínimo 8 caracteres',
              },
            }}
            secureTextEntry
          />

        <CustomInput
            placeholder="Repita a senha"
            control={control}
            name="password-repeat"
            secureTextEntry
            rules={{
              validate: value => value === pwd || 'Senhas não são iguais',
            }}
          />

        <CustomButton
            text="Cadastrar"
            onPress={handleSubmit(onRegisterPressed)}
        />

        <Text style={styles.text}>
          Ao cadastrar, você confirma que aceita nossos{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>Termos de Uso</Text> e{' '}
          <Text style={styles.link} onPress={onPrivacyPressed}>Política de Privacidade</Text>
        </Text>

        <SocialSignInButtons/>

        <CustomButton
            text="Tem uma conta? Faça login"
            onPress={onSignInPress}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10
  },
  text: {
    color: 'gray',
    marginVertical: 10
  },
  link: {
    color: '#fdb075'
  }
})

export default SignUpScreen