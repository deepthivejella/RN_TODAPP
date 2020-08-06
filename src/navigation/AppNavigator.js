import React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../components/HomeScreen';
import CreateNotes from '../components/CreateNotes';


const Stack = createStackNavigator();

const StackScreenOptions = {
    headerStyle:{
        backgroundColor:'#F5A9BC',
        // backgroundColor:'#43d9be',
    },
    headerTintColor:'#ffffff',
    headerTitleStyle:{
        fontSize:22,
    }
}

const AppNavigator = () =>{
    return (
         <NavigationContainer>
             <Stack.Navigator>
                 <Stack.Screen name = "Home Screen"  component = {HomeScreen}  options = {StackScreenOptions}/>
                 <Stack.Screen name = "Create Notes"  component = {CreateNotes} options = {StackScreenOptions}/>
             </Stack.Navigator>
         </NavigationContainer>
    )
}
export default AppNavigator;