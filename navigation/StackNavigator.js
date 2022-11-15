import PostScreen from '../screens/PostScreen'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TabNavigator from './TabNavigator'

const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Tela Inicial" component={TabNavigator}></Stack.Screen>
      <Stack.Screen name="Tela de Posts" component={PostScreen}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default StackNavigator
