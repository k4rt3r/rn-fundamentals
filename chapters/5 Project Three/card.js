import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Card = ({ image, liked, onLike, id }) => {
  return (
    <View style={styles.card}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableWithoutFeedback onLongPress={() => onLike(id)}>
          <Image
            source={image}
            style={{
              width: 260,
              height: 180,
              resizeMode: "contain",
              borderRadius: 20,
            }}
          />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.footer}>
        <Text style={[{ flex: 1 }, styles.actionBtn]}>Comment</Text>
        <TouchableOpacity
          onPress={() => onLike(id)}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Text style={[styles.actionBtn, { marginRight: 5 }]}>Like</Text>
          <FontAwesome name="heart" size={16} color={liked ? "red" : "grey"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingTop: 10,
  },
  card: {
    padding: 20,
    minHeight: 250,
    backgroundColor: "white",
    marginVertical: 30,
    marginHorizontal: 30,
    borderRadius: 20,
  },
  actionBtn: {
    fontSize: 16,
  },
});

export default Card;
