import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import Header from "./16components/header";
import Card from "./16components/card";

class App extends React.Component {

  render() {
    const liked_only=this.state.data.filter(el=>el.liked);
    return (
      <SafeAreaView style={styles.container}>
        <Header counter={liked_only.length}/>
        <ScrollView style={styles.body}>
          {/* forEach returns void, map returns the object array */}
          {this.state.data.map((item) => (
            <Card image={item.image} liked={item.liked} id={item.id} onLike={this.onPictureLike} />
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#D0CEE2",
  },
  body: {
    flex: 1,
    backgroundColor: "#EEEE",
  },
});

export default App;
