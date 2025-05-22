
import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function NewTweet ({navigation}) {

    const [tweet, setTweet] = useState("");

    function submitTweet() {
        
        navigation.navigate('Tab');

    }

    return(
        <View style={ styles.container }>
            <View style={ styles.buttonContainer }>
                <Text style={ tweet.length > 250 ? styles.textRed : styles.textGray}>Character left: {280 - tweet.length}</Text>
                <TouchableOpacity style={ styles.tweetButton } onPress={ () => submitTweet()}>
                    <Text style={ styles.buttonText }>Submit</Text>
                </TouchableOpacity>
            </View>
            <View style={ styles.tweetBoxContainer }>
                <Image
                    source={{uri: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png'}}
                    style={ styles.avatar }
                />
                <TextInput 
                    style={ styles.input }
                    onChangeText={setTweet}
                    value={tweet}
                    placeholder="What's happening?"
                    placeholderTextColor={"gray"}
                    multiline={true}
                    maxLength={280}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 12,
        paddingVertical: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
    },
    tweetButton: {
        backgroundColor: '#0f1418',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 24,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    avatar: {
        width: 40,
        height: 40,
        borderWidth: 3,
        borderRadius: 40,
        
    },
    tweetBoxContainer: {
        flexDirection: 'row',
    },
    ml14: {
        marginLeft: 14,
    },
    input: {
        flex: 1,
        color: '#222222',
        lineHeight: 28,
    },
    textGray: {
        color: 'gray',
    },
    textRed: {
        color: 'red',
    },
})