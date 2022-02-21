import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton'

const SocialSignInButtons = () => {
    const onSignInFacebook = () => {
        console.warn("Entrou pelo facebook")
    }
    
    const onSignInGoogle = () => {
        console.warn("Entrou pelo google")
    }

  return (
    <View>
    <CustomButton
        text="Entrar pelo Facebook"
        onPress={onSignInFacebook}
        bgColor="#e7eaf4"
        fgColor="#4765a9"
    />

    <CustomButton
        text="Entrar pelo Google"
        onPress={onSignInGoogle}
        bgColor="#fae9ea"
        fgColor="#dd4d44"
    />
    </View>
  )
}

export default SocialSignInButtons