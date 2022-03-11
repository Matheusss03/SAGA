import { View, Text, StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

const NewPasswordScreen = () => {
  const {control, handleSubmit} = useForm();

  const navigation = useNavigation()

  const onSendPressed = () => {
    navigation.navigate('Home')
  }

  const onSignInPress = () => {
    navigation.navigate('SignIn')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Crie uma nova senha</Text>

        <CustomInput
            placeholder="Código"
            control={control}
            name="code"
            rules={{required: 'Insira o código recebido no e-mail cadastrado'}}
          />

        <CustomInput
            placeholder="Nova senha"
            control={control}
            name="new_password"
            secureTextEntry
            rules={{
              required: 'Senha obrigatória',
              minLength: {
                value: 8,
                message: 'Senha precisa ter no mínimo 8 caracteres',
              },
            }}
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

export default NewPasswordScreen