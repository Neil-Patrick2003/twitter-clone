
import { Button } from "@react-navigation/elements";
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';



export default function TweetScreen (navigation) {

    return(
        <View style={ styles.container}> 
            <View style={ styles.profileContainer}>
                <TouchableOpacity style={ styles.flexRow }>
                    <Image
                        source={{uri: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png'}}
                        style={{width: 50, height: 50, borderRadius: 25, marginRight: 8}}
                    />
                    <View>
                        <Text style={ styles.tweetName }>Neil Patrick Mulingbayan</Text>
                        <Text style={ styles.tweetHandle }>@neilpatrick2003</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Entypo name="dots-three-vertical" size={24} color="gray" style={{ alignItems: 'center'}} />
                </TouchableOpacity>
            </View>
            <View style={ styles.tweetContentContainer}>
                <Text style={ styles.tweetContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </Text>
            </View>
            <View style={ styles.tweetEngagement}>
                <View style={ styles.flexRow }>
                    <Text style={ styles.tweetEngagementNumber}>325</Text>
                    <Text style={ styles.tweetEngagementLabel}>Retweets</Text>
                </View>
                <View style={ [styles.flexRow, styles.ml14] }>
                    <Text style={ styles.tweetEngagementNumber}>38</Text>
                    <Text style={ styles.tweetEngagementLabel}>Quote Retweets</Text>
                </View>
                <View style={ [styles.flexRow, styles.ml14] }>
                    <Text style={ styles.tweetEngagementNumber}>2,344</Text>
                    <Text style={ styles.tweetEngagementLabel}>Likes</Text>
                </View>
                
            </View>
            <View style={ styles.tweetEngagementActions}>
                <TouchableOpacity style={ styles.flexRow }>
                        <EvilIcons name="comment" size={30} color="gray" />
                    </TouchableOpacity>
                    <TouchableOpacity style={ styles.flexRow }>
                        <EvilIcons name="retweet" size={30} color="gray" />
                    </TouchableOpacity>
                    <TouchableOpacity style={ styles.flexRow }>
                        <EvilIcons name="heart" size={30} color="gray" />
                    </TouchableOpacity>
                    <TouchableOpacity style={ styles.flexRow }>
                        <EvilIcons name={Platform.OS === 'ios' ? 'share-apple' : 'share-google'} size={30} color="gray" />
                    </TouchableOpacity>
            </View>
            
           
          
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        
    },
    flexRow: {
        flexDirection: 'row',
    },
    tweetName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#222222'
    },
    tweetHandle: {
        color: 'gray',
        marginTop: 4,
    },
    tweetContentContainer: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#E1E8ED',
    },
    tweetContent: {
        fontSize: 20,
        lineHeight: 30,
        color: '#222222',
    },
    tweetEngagement: {
        flexDirection: 'row',
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#E1E8ED',
    },

    tweetEngagementNumber: {
        fontStyle: 'bold',
    }, 
    tweetEngagementLabel: {
        color: 'gray',
        marginLeft: 6,
    },
    ml14: {
        marginLeft: 14,
    },
    tweetEngagementActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#E1E8ED',
    },


})