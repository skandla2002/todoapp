import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Dimensions,
  Platform,
  ScrollView
} from "react-native";
import Todo from "./ToDo";

const { height, width } = Dimensions.get("window");

class App extends Component {
  state = {
    newToDo: ""
    // ,
    // loadedToDos: false,
    // toDos: {}
  };

  // componentDidMount = () => {
  //   this._loadToDos();
  // };

  render() {
    const {
      newToDo
      // , loadedToDos, toDos
    } = this.state;
    // if(!loadedToDos){
    //   return <AppLoading />;
    // }

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Todo App</Text>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder={"New To Do"}
            value={newTodo}
            onChangeText={this._controlNewTodo}
            placeholderTextColor={"#999"}
            returnKeyType={"done"}
            autoCorrect={false}
          />
          <ScrollView contentContainerStyle={styles.toDos}>
            <Todo />
          </ScrollView>
        </View>
      </View>
    );
  }

  _controlNewTodo = text => {
    this.setState({
      newToDo: text
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F23657",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "white",
    fontSize: 30,
    marginTop: 50,
    fontWeight: "200",
    marginBottom: 30
  },
  card: {
    backgroundColor: "white",
    flex: 1,
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 5,
    ...Platform.select({
      ios: {
        shadowColor: "rgba(50, 50, 50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0
        }
      },
      android: {
        elevation: 3
      }
    })
  },
  input: {
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize: 25
  }
});

export default App;
