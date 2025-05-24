
import { useState } from "react";
import { ActivityIndicator, Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import axiosConfig from "../Helpers/axiosConfig"; // Assuming you have axiosConfig set up

export default function NewTweet ({navigation}) {

    const [tweet, setTweet] = useState("");
    const [ isLoading, setIsLoading ] = useState(false);

    function submitTweet() {
        if(tweet.length === 0) {
            Alert.alert(
                'Empty Tweet',
                'Tweet cannot be empty. Please write something before submitting.',
            );
            return;
        }
        setIsLoading(true);
        axiosConfig
            .post('tweets', { body: tweet })
            .then(response => {
                navigation.navigate('Tab', {NewTweetAdded: response.data});
                setIsLoading(false);
            })
            .catch(error => {
                alert('Error', 'Failed to submit tweet. Please try again later.');
                setIsLoading(false);
            });


    }

    return(
        <View style={ styles.container }>
            <View style={ styles.buttonContainer }>
                <Text style={ tweet.length > 250 ? styles.textRed : styles.textGray}>Character left: {280 - tweet.length}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    { isLoading && 
                        <ActivityIndicator size="small" color="gray"  /> 
                    }
                    <TouchableOpacity 
                        style={ styles.tweetButton } 
                        onPress={ () => submitTweet()}
                        disabled={isLoading}
                    >
                        <Text style={ styles.buttonText }>Submit</Text>
                    </TouchableOpacity>
                </View>
                
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