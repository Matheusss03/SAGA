import { View, Text, StyleSheet, ScrollView} from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'

const ConfirmEmailScreen = () => {
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
            value={code}
            setValue={setCode}
          />

        <CustomButton
            text="Confirmar"
            onPress={onConfirmPressed}
        />

        <CustomButton
            text="Reenviar código"
            onPress={onResendPress}
            type="SECONDARY"
        />

        <CustomButton
            text="Voltar ao login"
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

export default ConfirmEmailScreen