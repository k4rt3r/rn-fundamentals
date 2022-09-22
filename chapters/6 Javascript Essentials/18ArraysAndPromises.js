import React from "react";
import { StyleSheet, View, Text } from "react-native";

const data = [
  { author: "John", title: "Book title 1" },
  { author: "James", title: "Book title 2" },
  { author: "Peter", title: "Book title 3" },
];

class App extends React.Component {
  state = { data: [] };

  componentDidMount() {
    const dataProviderPromise = new Promise((resolve, reject) => {
      let noIssues = true;
      if (noIssues) {
        setTimeout(() => resolve(data), 3000);
      } else {
        reject("Error inside the promise");
      }
    });

    dataProviderPromise
      .then((res) => {
        console.log("inside then");
        console.log(res);
      })
      .catch((err) => {
        console.log("inside catch");
        console.log(err);
      });
  }

  render() {
    return (
      <View styles={styles.container}>
        {this.state.data.map((el) => (
          <View>
            <Text>Title: {el.title}</Text>
            <Text>Author: {el.author}</Text>
            <Text>******************</Text>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});

export default App;
