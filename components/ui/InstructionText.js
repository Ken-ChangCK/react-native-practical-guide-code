import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/color";

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.instrunctionText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instrunctionText: {
    color: Colors.accent500,
    fontFamily: "open-sans",
    fontSize: 24,
  },
});
