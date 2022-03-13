import { View, Text, StyleSheet, ScrollView, Alert} from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { Auth } from 'aws-amplify'

const ForgotPasswordScreen = () => {
  const {control, handleSubmit} = useForm();

  const navigation = useNavigation()

  const onSendPressed = async (data) => {
    try {
      await Auth.forgotPassword(data.username)
      navigation.navigate('NewPassword')
    } catch (e) {
      Alert.alert('Algo deu errado', e.message)
    }
  }

  const onSignInPress = () => {
    navigation.navigate('SignIn')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Recupere sua senha</Text>

        <CustomInput
            placeholder="Username"
            name="username"
            control={control}
            rules={{required: 'Insira seu username'}}
          />

        <CustomButton
            text="Enviar"
            onPress={handleSubmit(onSendPressed)}
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

export default ForgotPasswordScreen