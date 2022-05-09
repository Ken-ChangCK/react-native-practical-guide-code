import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import Colors from "../constants/color";

const StartGameScreen = ({ onPickNumber }) => {
  const [enterdNumber, setEnteredNumber] = useState("");
  const { width, height } = useWindowDimensions();
  const marginTopDistance = height < 380 ? 30 : 100;

  const handleInput = (e) => {
    setEnteredNumber(e);
  };

  const handleResetInput = () => {
    setEnteredNumber("");
  };

  const handleConfirm = () => {
    const chooseNumber = parseInt(enterdNumber);

    if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
      Alert.alert("Invalid number", "number need >0 or <99.", [
        { text: "Okay", style: "destructive", onPress: handleResetInput },
      ]);
      return;
    }
    onPickNumber(chooseNumber);
    console.log("enterdNumber", enterdNumber);
  };

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess number</Title>
          <Card>
            <InstructionText style={styles.instrunctionText}>
              Enter a Number
            </InstructionText>
            <TextInput
              style={styles.textInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={enterdNumber}
              onChangeText={handleInput}
            ></TextInput>
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={handleResetInput}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // marginTop: deviceHeight < 380 ? 30 : 100,
  },
  rootContainer: {
    flex: 1,
    // marginTop: deviceHeight < 380 ? 30 : 100,
    alignItems: "center",
  },
  instrunctionText: {
    color: Colors.accent500,
    fontSize: 24,
  },

  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    fontWeight: "bold",
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
