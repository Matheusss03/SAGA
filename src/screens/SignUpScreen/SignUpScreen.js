import { View, Text, StyleSheet, ScrollView} from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'

const SignUpScreen = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')

  const navigation = useNavigation()

  const onRegisterPressed = () => {
    navigation.navigate('ConfirmEmail')
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
            placeholder="Login"
            value={username}
            setValue={setUsername}
          />

        <CustomInput
            placeholder="Email"
            value={email}
            setValue={setEmail}
          />

        <CustomInput
            placeholder="Senha"
            value={password}
            setValue={setPassword}
            secureTextEntry
          />

        <CustomInput
            placeholder="Repita a senha"
            value={passwordRepeat}
            setValue={setPasswordRepeat}
            secureTextEntry
          />

        <CustomButton
            text="Cadastrar"
            onPress={onRegisterPressed}
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