import { View, Text, StyleSheet, ScrollView} from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'

const NewPasswordScreen = () => {
  const [code, setCode] = useState('')
  const [newPassword, setnewPassword] = useState('')

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
        <Text style={styles.title}>Crei uma nova senha</Text>

        <CustomInput
            placeholder="Código"
            value={code}
            setValue={setCode}
          />

        <CustomInput
            placeholder="Nova senha"
            value={newPassword}
            setValue={setnewPassword}
          />

        <CustomButton
            text="Enviar"
            onPress={onSendPressed}
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

export default NewPasswordScreen