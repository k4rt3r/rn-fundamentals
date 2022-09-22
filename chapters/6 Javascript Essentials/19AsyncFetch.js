import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";

class App extends React.Component {
  state = { data: [] };
  
  fetchRequest = async () => {
    const api = "https://5ea731f184f6290016ba7d10.mockapi.io/api/Products";

    // fetch(api)
    //   .then((response) => response.json()
    //   .then((data) => console.log(data)))
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // const response = fetch(api);
    // const body = await (await response).json();
    // console.log(body);
    // this.setState({ body });
  };

  async componentDidMount() {
    //this.fetchRequest();
    const response = await fetch('https://5ea731f184f6290016ba7d10.mockapi.io/api/Products');
    const data = await response.json();
    this.setState({data});
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.state.body.map((el) => {
            <View>
              <Text>{el.title} </Text>
              <Text>{el.price}</Text>
            </View>;
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default App;
