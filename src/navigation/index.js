import { View, ActivityIndicator } from 'react-native'
import React, {useEffect, useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './AppNavigator';
import StackNavigator from './StackNavigator';

import { Auth, Hub } from 'aws-amplify';

const Navigation = () => {
  const [user, setUser] = useState(undefined)

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true})
      setUser(authUser)
    } catch (e) {
      setUser(null)
    }
  }

  useEffect(() => {
    checkUser()
  }, [])

  useEffect(() => {
    const listener = (data) => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkUser()
      }
    }
    Hub.listen('auth', listener)
    return () => Hub.remove('auth', listener)
  }, [])

  if (user === undefined) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator/>
      </View>
    )
  }

  return (
    <NavigationContainer>
      {user ? 
          <AppNavigator/>
        : <StackNavigator/>
         }
    </NavigationContainer>
  )
}

export default Navigation