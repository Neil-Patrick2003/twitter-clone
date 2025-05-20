import { Button } from "@react-navigation/elements";
import { NavigationContainer } from "@react-navigation/native";
import React from "react"
import { Text, View } from "react-native";


export default function HomeScreen ({navigation}) {

    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen / Feed</Text>
            <Button title="New Tweet"  onPress={() => navigation.navigate('New Tweet')}>New Tweet</Button>
            <Button title="New Tweet"  onPress={() => navigation.navigate('Tweet Screen')}>Tweet Screen</Button>
            <Button title="New Tweet"  onPress={() => navigation.navigate('Profile Screen')}>Profile Screen</Button>
        
        </View>
    )
}