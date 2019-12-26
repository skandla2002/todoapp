import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";

const { width, height } = Dimensions.get("window");

export default class ToDo extends React.Component {
  state = {
    isEditing: false,
    isCompleted: false
  };
  render() {
      const { isCompleted } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={}>
          <View style={[styles.circle, isCompleted ? styles.completedCircle : styles.uncompletedCircle]} />
        </TouchableOpacity>
        <Text style={styles.text}>Hello I`m a ToDo</Text>
      </View>
    );
  }
  toggleComplete = () => {
      this.setState( prevState => {
          return {
              isCompleted: !prevState.isCompleted
          }
      })
  }
}

const styles = StyleSheet.create({
  container: {
    width: width - 50,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row"
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: "red",
    borderWidth: 10,
    marginRight: 20
  },    
  completedCircle:{
      borderColor: "#bbb"
  },
  uncompletedCircle: {
    borderColor: "#F23657"
  },
  text: {
    fontWeight: "600",
    fontSize: 20,
    marginVertical: 20
  },
  circle: {
      width:
  }
});
