import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton/CustomButton'
import { Auth } from 'aws-amplify'

const HomeScreen = () => {
    const dados = Auth.currentAuthenticatedUser();

    console.log(dados)

    const CapturaDados = async () => {
        const { attributes } = await Auth.currentAuthenticatedUser();
        console.log(attributes.name)
    }

    const signOut = () => {
        Auth.signOut()
    }

  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 24, alignSelf: 'center'}}>Lar, doce lar</Text>
      <Text onPress={CapturaDados}
      style={{
          color: 'black',
          fontSize: 100
      }}
      >Aperta</Text>
      <Text>Bem vindo {dados.name}</Text>
      <Text onPress={signOut} 
      style={{
        width: '100%',
        textAlign: 'center',
        color: 'red',
        marginTop: 'auto',
        marginVertical: 20,
        fontSize: 20
        }}>
          Sair
      </Text>
    </View>
  )
}

export default HomeScreen