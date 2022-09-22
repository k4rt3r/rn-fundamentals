import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

/* First project test -- Batman profile */

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.avatar_container}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{ marginBottom: 10 }}
            source={require("./assets/batman-avatar.png")}/>
          <Text style={{ maxWidth: 200 }}>
            "It's not who I am underneath, but what I do that defines me"
          </Text>
        </View>
      </View>
      <View style={styles.details_container}>
        <View style={styles.item}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.data}>Batman</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>City:</Text>
          <Text style={styles.data}>Gotham</Text></View>
        <View style={styles.item}>
          <Text style={styles.label}>Fav color:</Text>
          <Text style={styles.data}>Black</Text></View>
        <View style={styles.item}>
          <Text style={styles.label}>Job:</Text>
          <Text style={styles.data}>Batting</Text></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },
  avatar_container: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  details_container: {
    flex: 0.6,
    backgroundColor: "white",
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    flex: 0.25,
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:20
  },
  label: {
    color:'orange',
    fontSize:32,
    flex: 0.9,
  },
  data: {
    fontSize:32,
  },
});
