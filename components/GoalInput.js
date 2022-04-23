import { useState } from "react";
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Modal,
  Image,
} from "react-native";

const GoalInput = ({ onAddGoal, visible, onCancel }) => {
  const [enterGoalText, setEnterGoalText] = useState("");
  const goalInputHandler = (e) => {
    setEnterGoalText(e);
  };

  const addGoalHandler = () => {
    onAddGoal(enterGoalText);
    setEnterGoalText("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your goal!"
          onChangeText={goalInputHandler}
          value={enterGoalText}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add goal"
              onPress={addGoalHandler}
              color="#b180f0"
            ></Button>
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color="#f312a2"></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
