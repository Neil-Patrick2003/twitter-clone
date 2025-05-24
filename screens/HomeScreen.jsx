import { Button } from "@react-navigation/elements";
import { NavigationContainer } from "@react-navigation/native";
import React, { use, useEffect, useState } from "react"
import { FlatList, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import axios from "axios";
import { formatDistanceToNowStrict } from "date-fns";




export default function HomeScreen ({navigation}) {

    const [ data, setData ] = useState([]);

    useEffect(() => {
        getallTweets();
    }, [])

    function getallTweets() {
        console.log("Fetching tweets...");
        axios
        .get  ('http://10.0.2.2:8000/api/tweets')
        
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }

    // const DATA = [
    //     {
    //         id: '1',
    //         title: 'First Item',
    //     },
    //     {
    //         id: '2',
    //         title: 'Second Item',
    //     },
    //     {
    //         id: '3',
    //         title: 'Third Item',
    //     },
    //     {
    //         id: '4',
    //         title: 'fourth Item',
    //     },
    //     {
    //         id: '5',
    //         title: 'fifth Item',
    //     },
    //     {
    //         id: '6',
    //         title: 'sixth Item',
    //     },
    //     {
    //         id: '7',
    //         title: 'seventh Item',
    //     },
    //     {
    //         id: '8',
    //         title: 'eighth Item',
    //     },
    //     {
    //         id: '9',
    //         title: 'ninth Item',
    //     },
    //      {
    //         id: '10',
    //         title: 'tenth Item',
    //     },
    // ];


    function gotoProfileScreen() {
        navigation.navigate('Profile Screen');
    }

    function gotoSingleTweetScreen() {
        navigation.navigate('Tweet Screen');
    }

    function gotoNewTweetScreen() { 
        navigation.navigate('New Tweet');
    }

    const Item = ({ name , username , body , avatar , created_at}) => (
        <View style={styles.tweetContainer}>
            <TouchableOpacity onPress={ () => gotoProfileScreen()}>
                <Image
                    source={{uri: avatar}}
                    style={{width: 42, height: 42, borderRadius: 25, marginRight: 8}}
                />
            </TouchableOpacity>
            <View style={{flex: 1}}>
                <TouchableOpacity style={ styles.flexRow } onPress={ () => gotoSingleTweetScreen()}>
                    <Text style={ styles.tweetName }> { name }</Text>
                    <Text style={ styles.tweetHeader }>@{ username }</Text>
                    <Text style={ styles.tweetHeader }>&middot;</Text>
                    <Text style={ styles.tweetHeader }>{ formatDistanceToNowStrict(created_at) }</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tweetContentContainer} onPress={ () => gotoSingleTweetScreen()}>
                    <Text numberOfLines={2} style={styles.tweetContent}>{ body }</Text>
                </TouchableOpacity>
                <View style={ styles.tweetEngagement}>
                    <TouchableOpacity style={ styles.flexRow }>
                        <EvilIcons name="comment" size={20} color="gray" />
                        <Text  style={ styles.textGray}>456</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ styles.flexRow }>
                        <EvilIcons name="retweet" size={20} color="gray" />
                        <Text  style={ styles.textGray}>32</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ styles.flexRow }>
                        <EvilIcons name="heart" size={20} color="gray" />
                        <Text  style={ styles.textGray}>76</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ styles.flexRow }>
                        <EvilIcons name={Platform.OS === 'ios' ? 'share-apple' : 'share-google'} size={20} color="gray" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );


    return(
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({item}) => <Item name={item.user.name} username={ item.user.username } body={ item.body } avatar={ item.user.avatar } created_at={ item.created_at } />}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={ () => <View style={styles.tweetSeparator}></
                View>}
            />
            <TouchableOpacity style={ styles.floatingButton} onPress={ () => gotoNewTweetScreen() }>
                <FontAwesome6 name="add" size={24} color="white" />         
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    tweetContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 12 ,   
    },
    flexRow: {
         flexDirection: 'row'
    },
    tweetName: {
        fontWeight: 'bold',
        marginRight: 5,
    },
    tweetHeader: {
        color: 'gray',
        marginRight: 5,
    },
    tweetContentContainer: {
        marginTop: 4,
    },
    tweetContent: {
        lineHeight: 22,
    },
    textGray: {
        color: 'gray',
        marginLeft: 4,
    },
    tweetEngagement: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginTop: 12,
    },
    tweetSeparator: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#1DA1F2',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

    
})  