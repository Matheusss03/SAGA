import { View, Text, StyleSheet, ScrollView} from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

const ConfirmEmailScreen = () => {
  const {control, handleSubmit} = useForm();
  const [code, setCode] = useState('')

  const navigation = useNavigation()

  const onConfirmPressed = () => {
    navigation.navigate('Home')
  }

  const onSignInPress = () => {
    navigation.navigate('SignIn')
  }

  const onResendPress = () => {
    console.warn("Reenviar código")
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirme seu email</Text>

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