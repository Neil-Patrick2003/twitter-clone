


import 'react-native-gesture-handler';
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import NewTweet from './screens/NewTweet';
import TweetScreen from './screens/TweetScreen';
import ProfileScreen from './screens/ProfileScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingsScreen from './screens/SettingsScreen';
import SearchScreen from './screens/SearchScreens';
import NotificationsScreen from './screens/NotificationsScreen';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';






const Stack = createStackNavigator(); 
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


const HomeStackNavigator = () => {
  return (
      <Stack.Navigator 
        screenOptions={{
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen 
          name='Tab' 
          component={TabNavigator} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name='New Tweet' 
          component={NewTweet} 
          options={{title: ''}}
        />
        <Stack.Screen 
          name='Tweet Screen' 
          component={TweetScreen} 
          options={{title: ''}}
        />
        <Stack.Screen 
          name='Profile Screen' 
          component={ProfileScreen} 
          options={{title: ''}}
        />
      </Stack.Navigator> 
  )
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }} 
    
    >
      {/* home bottom tab */}
      <Tab.Screen 
        name="Home2" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
          headerShown: false
        }} 
      />

      {/* search bottom tab */}
      <Tab.Screen 
        name="Search" 
        component={SearchScreen} 
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="search" color={color} size={size} />
          ),
          headerShown: false
        }} 
      />

      {/* notifications bottom tab */}
      <Tab.Screen 
        name="Notifications" 
        component={NotificationsScreen} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="notifications-sharp" size={24} color={color} />
          ),
          headerShown: false
        }} 
      />

    </Tab.Navigator>
  )
}



export default function app(){
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home' 
       screenOptions={{
        headerShown:false,
       }}
      >
        <Drawer.Screen name="Home" component={HomeStackNavigator} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    

  )
}

