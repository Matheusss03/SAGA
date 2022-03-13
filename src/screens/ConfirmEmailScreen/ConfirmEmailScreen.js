import { View, Text, StyleSheet, ScrollView} from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { Alert } from 'react-native-web'
import { Auth } from 'aws-amplify'

const ConfirmEmailScreen = () => {
  const route = useRoute()

  const {control, handleSubmit, watch} = useForm({
    defaultValues: {username: route?.params?.username
    }});

  const username = watch('username')

  const navigation = useNavigation()

  const onConfirmPressed = async (data) => {
    try {
      await Auth.confirmSignUp(data.username, data.code)
      navigation.navigate('SignIn')

    } catch (e) {
      Alert.alert('Algo deu errado', e.message)
    }
  }

  const onSignInPress = () => {
    navigation.navigate('SignIn')
  }

  const onResendPress = async () => {
    try {
      await Auth.resendSignUp(username)
      Alert.alert('Sucesso', 'Código reenviado para seu email')   
    } catch (e) {
      Alert.alert('Algo deu errado', e.message)
    }
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirme seu email</Text>

        <CustomInput
            placeholder="Username"
            name="username"
            control={control}
            rules={{required: 'Insira seu username'}}
          />

        <CustomInput
            placeholder="Coloque seu código de confirmação"
            name="code"
            control={control}
            rules={{required: 'Insira o código de confirmação'}}
          />

        <CustomButton
            text="Confirmar"
            onPress={handleSubmit(onConfirmPressed)}
        />

        <CustomButton
            text="Reenviar código"
            onPress={handleSubmit(onResendPress)}
            type="SECONDARY"
        />

        <CustomButton
            text="Voltar ao login"
            onPress={handleSubmit(onSignInPress)}
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

export default ConfirmEmailScreen