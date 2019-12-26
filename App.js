import React from "react";
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
import { render } from "react-dom";
import Todo from './ToDo';

const { height, width } = Dimensions.get("window");

export default function App() {
  state = {
    newToDo: ""
  };

  render(){
    const { newToDo } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Todo App</Text>
        <View style={styles.card}>
          <TextInput style={styles.input} placeholder={"New To Do"} valud={newTodo} onChangeText={this._crontollNewTodo} placeholderTextColor={"#999"} returnKeyType={"done"} />
          <ScrollView contentContainerStyle={styles.toDos}>
            <Todo />
          </ScrollView>
        </View>
      </View>
    );
  }

  _crontollNewTodo = text => {
    this.setState({
      newToDo: text
    })
  }
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
