
import { ImageBackground, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import EvilIcons from '@expo/vector-icons/EvilIcons';



export default function ProfileScreen (navigation) {

    return(
        <View style={ styles.container }>
            <ImageBackground
                source={{uri: 'https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-52393.jpg?semt=ais_hybrid&w=740'}}
                style={ styles.backgroundImage }
            />
            <View style={ styles.avatarContainer }>
                <ImageBackground
                    source={{uri: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png'}}
                    style={ styles.avatar }
                />
                <TouchableOpacity style={ styles.followButton }>
                    <Text style={ styles.followButtonText }>Follow</Text>
                </TouchableOpacity>
            </View>  
            <View style={ styles.nameContainer }>
                <Text style ={ styles.profileName }>Neil Patrick Mulingbayan</Text>
                <Text style={ styles.profileHandler }> @neilpmulingbayan</Text>
            </View>
            <View style={ styles.profileContainer }>
                <Text style={ styles.profileContainerText }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nisl nunc egestas nunc, eget tincidunt nisl nunc eget nunc. </Text>
            </View>
            <View style={ styles.locationContainer }>
                <EvilIcons name="location" size={20} color="gray" />
                <Text style={ styles.textGray }>Philippines</Text>
            </View>
            <View style={ styles.linkContainer }>
                <TouchableOpacity style={ styles.linkItem }>
                    <EvilIcons name="link" size={20} color="gray" />
                    <Text style={ styles.textGray } onPress={() => Linking.openURL('https://laracasts.com')}>https://laracasts.com</Text>
                </TouchableOpacity>
                <View style={ [styles.linkItem, styles.ml14] }>
                    <EvilIcons name="calendar" size={20} color="gray" />
                    <Text style={ styles.textGray }>Joined March 2009.</Text>
                </View>
            </View>
            <View style={ styles.followContainers}> 
                <View style={ styles.followItem }>
                    <Text style={ styles.followNumber }>1,000</Text>
                    <Text style={ styles.followLabel }>Following</Text>
                </View>
                <View style={ [styles.followItem, styles.ml14 ] }>
                    <Text style={ styles.followNumber }>1,000</Text>
                    <Text style={ styles.followLabel }>Following</Text>
                </View>
            </View>
            <View style={styles.tweetSeparator}></View>
                
        </View>
    )
}

const styles = StyleSheet.create({
    textGray: {
        color: 'gray',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    backgroundImage: {
        width: 800,
        height: 120,
        
    },
    avatar: {
        width: 80,
        height: 80,
        borderWidth: 3,
        borderRadius: 40,
        borderColor: 'white',
        
    },
    avatarContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginTop: -34,
        
    },
    followButton: {
        backgroundColor: '#0f1418',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 24,
    },
    followButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    nameContainer:{
        paddingHorizontal: 10,
        paddingVertical: 2,
    },
    profileContainer: {
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 2,
    },
    profileName: {
        fontWeight: 'bold',
        fontSize: 22,
    },
    profileHandler: {
        fontSize: 16,
        color: 'gray',
    },
    profileContainerText: {
        lineHeight: 22,
    },
    locationContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 12,
    },
    linkContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 4,
    },
    linkItem: {
        flexDirection: 'row',
    },
    ml14 : {
        marginLeft: 14,
    },
    followContainers: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 12,
        marginTop: 12,
    },
    followItem: {
        flexDirection: 'row',
    },
    followNumber: {
        fontWeight: 'bold',
    },
    followLabel: {
        color: 'gray',
        marginLeft: 4,
    },
    tweetSeparator: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },


     

    
})