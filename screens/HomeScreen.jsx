import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import axios from "axios";
import axiosConfig from "../Helpers/axiosConfig"; // Assuming you have axiosConfig set up
import { formatDistanceToNowStrict, set } from "date-fns";

export default function HomeScreen({ route, navigation }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [ page, setPage ] = useState(1);
  const [ isAtEndOfScrolling, setIsAtEndOfScrolling ] = useState(false);
  const flatListRef = useRef();

  function handleRefresh() {
    setIsAtEndOfScrolling(false);
    setRefreshing(true);
    setPage(1);

  };

  function handleReachEnd() {
    setPage(page + 1);
  }

  useEffect(() => {
    getAllTweets();
  }, [page]);

  useEffect(() => {
    if(route.params?.NewTweetAdded) {
        getAllTweetsRefresh();
        flatListRef.current?.scrollToOffset({
        offset: 0,
        animated: true,
        });
    }

  }, [route.params?.NewTweetAdded]);    

  function getAllTweetsRefresh() {
   setPage(1);
   setIsLoading(false);
    setRefreshing(false);

    axiosConfig
      .get(`/tweets` )
      .then((response) => {
        setData(response.data.data);
        setIsLoading(false);
        setRefreshing(false);
      })
      .catch((error) => {
        alert('Error', 'Failed to fetch tweets. Please try again later.');
        setIsLoading(false);
        setRefreshing(false);
      });
  }


  function getAllTweets() {
   

    axiosConfig
      .get(`/tweets?page=${page}` )
      .then((response) => {
        
        if(page === 1){
            setData(response.data.data);
        }
        else{
            setData([...data, ...response.data.data]);
        }

        if(!response.data.next_page_url){
            setIsAtEndOfScrolling(true);
        }
        
        setIsLoading(false);
        setRefreshing(false);
      })
      .catch((error) => {
        alert('Error', 'Failed to fetch tweets. Please try again later.');
        setIsLoading(false);
        setRefreshing(false);
      });
  }

  function gotoProfileScreen() {
    navigation.navigate("Profile Screen");
  }

  function gotoSingleTweetScreen(tweetId) {
    navigation.navigate('Tweet Screen', 
        { 
            tweetId : tweetId,
        });
  }

  function gotoNewTweetScreen() {
    navigation.navigate("New Tweet");
  }

  const Item = ({ tweetId, name, username, body, avatar, created_at }) => (
    <View style={styles.tweetContainer}>
      <TouchableOpacity onPress={gotoProfileScreen}>
        <Image
          source={{ uri: avatar }}
          style={{ width: 42, height: 42, borderRadius: 25, marginRight: 8 }}
        />
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.flexRow} onPress={gotoProfileScreen}>
          <Text style={styles.tweetName}>{name}</Text>
          <Text style={styles.tweetHeader}>@{username}</Text>
          <Text style={styles.tweetHeader}>&middot;</Text>
          <Text style={styles.tweetHeader}>{formatDistanceToNowStrict(new Date(created_at))}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tweetContentContainer} onPress={() => gotoSingleTweetScreen(tweetId)}>
          <Text numberOfLines={2} style={styles.tweetContent}>
            { body }
          </Text>
        </TouchableOpacity>
        <View style={styles.tweetEngagement}>
          <TouchableOpacity style={styles.flexRow}>
            <EvilIcons name="comment" size={20} color="gray" />
            <Text style={styles.textGray}>456</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.flexRow}>
            <EvilIcons name="retweet" size={20} color="gray" />
            <Text style={styles.textGray}>32</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.flexRow}>
            <EvilIcons name="heart" size={20} color="gray" />
            <Text style={styles.textGray}>76</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.flexRow}>
            <EvilIcons
              name={Platform.OS === "ios" ? "share-apple" : "share-google"}
              size={20}
              color="gray"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator style={{ marginTop: 8 }} size="large" color="gray" />
      ) : (
        <FlatList
          ref={flatListRef}
          data={data}
          renderItem={({ item }) => (
            <Item
              tweetId={item.id}
              name={item.user?.name || "Unknown"}
              username={item.user?.username || "anonymous"}
              avatar={item.user?.avatar || "https://via.placeholder.com/42"}
              body={item.body}
              created_at={item.created_at}
            />
          )}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => <View style={styles.tweetSeparator}></View>}
          refreshing={refreshing}
          onRefresh={handleRefresh}
          onEndReached={handleReachEnd}
          onEndReachedThreshold={0}
          ListFooterComponent={() => !isAtEndOfScrolling && (<ActivityIndicator size="large" color="gray" />)}
        />
      )}
 

      <TouchableOpacity style={styles.floatingButton} onPress={gotoNewTweetScreen}>
        <FontAwesome6 name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  tweetContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  flexRow: {
    flexDirection: "row",
  },
  tweetName: {
    fontWeight: "bold",
    marginRight: 5,
  },
  tweetHeader: {
    color: "gray",
    marginRight: 5,
  },
  tweetContentContainer: {
    marginTop: 4,
  },
  tweetContent: {
    lineHeight: 22,
  },
  textGray: {
    color: "gray",
    marginLeft: 4,
  },
  tweetEngagement: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 12,
  },
  tweetSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#1DA1F2",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
