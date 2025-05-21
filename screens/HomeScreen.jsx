import { Button } from "@react-navigation/elements";
import { NavigationContainer } from "@react-navigation/native";
import React from "react"
import { FlatList, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';



export default function HomeScreen ({navigation}) {

    const DATA = [
        {
            id: '1',
            title: 'First Item',
        },
        {
            id: '2',
            title: 'Second Item',
        },
        {
            id: '3',
            title: 'Third Item',
        },
        {
            id: '4',
            title: 'fourth Item',
        },
        {
            id: '5',
            title: 'fifth Item',
        },
        {
            id: '6',
            title: 'sixth Item',
        },
        {
            id: '7',
            title: 'seventh Item',
        },
        {
            id: '8',
            title: 'eighth Item',
        },
        {
            id: '9',
            title: 'ninth Item',
        },
         {
            id: '10',
            title: 'tenth Item',
        },
    ];


    function gotoProfileScreen() {
        navigation.navigate('Profile Screen');
    }

    function gotoSingleTweetScreen() {
        navigation.navigate('Tweet Screen');
    }

    function gotoNewTweetScreen() { 
        navigation.navigate('New Tweet');
    }

    const Item = ({title}) => (
        <View style={styles.tweetContainer}>
            <TouchableOpacity onPress={ () => gotoProfileScreen()}>
                <Image
                    source={{uri: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png'}}
                    style={{width: 42, height: 42, borderRadius: 25, marginRight: 8}}
                />
            </TouchableOpacity>
            <View style={{flex: 1}}>
                <TouchableOpacity style={ styles.flexRow } onPress={ () => gotoSingleTweetScreen()}>
                    <Text style={ styles.tweetName }> { title } </Text>
                    <Text style={ styles.tweetHeader }>Email</Text>
                    <Text style={ styles.tweetHeader }>&middot;</Text>
                    <Text style={ styles.tweetHeader }>9m</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tweetContentContainer} onPress={ () => gotoSingleTweetScreen()}>
                    <Text numberOfLines={2} style={styles.tweetContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
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
                data={DATA}
                renderItem={({item}) => <Item title={item.title} />}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={ () => <View style={styles.tweetSeparator}></View>}
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
        paddingHorizontal: 20,
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