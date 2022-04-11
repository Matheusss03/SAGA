import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Icon } from 'react-native-vector-icons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import StoreScreen from '../screens/StoreScreen'
import CalendarScreen from '../screens/CalendarScreen'
import QuestionScreen from '../screens/QuestionScreen'

const Tab = createBottomTabNavigator()

const AppNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            showLabel: false,
            style: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundcolor: '#ffffff',
                borderRadius: 15,
                height: 90,
                ...styles.shadow
            }
        }}>
        <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
                tabBarIcon: ({size, color}) => (
                    <FontAwesome5 name={'home'} size={size} color={color}/>
                )}}/>
        <Tab.Screen 
            name="Calendário" 
            component={CalendarScreen}
            options={{
                tabBarIcon: ({size, color}) => (
                    <FontAwesome5 name={'calendar-alt'} size={size} color={color}/>
                )}} />
        <Tab.Screen 
            name="Questões" 
            component={QuestionScreen} 
            options={{
                tabBarIcon: ({size, color}) => (
                    <FontAwesome5 name={'list'} size={size} color={color}/>
                )}}/>
        <Tab.Screen 
            name="Loja" 
            component={StoreScreen} 
            options={{
                tabBarIcon: ({size, color}) => (
                    <FontAwesome5 name={'store'} size={size} color={color}/>
                )}}/>
        <Tab.Screen 
            name="Perfil" 
            component={ProfileScreen} 
            options={{
                tabBarIcon: ({size, color}) => (
                    <FontAwesome5 name={'user-alt'} size={size} color={color}/>
                )}}/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7f5df0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})

export default AppNavigator