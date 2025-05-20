import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function SearchScreen() {
    return (
        <View style={styles.container}>
        <Text>Search Screen</Text>
        <StatusBar style="auto" />
        </View>
    );
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});