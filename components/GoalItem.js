import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = ({ text, id, onDeleteItem }) => {
  return (
    <View style={styles.goalItems}>
      <Pressable
        android_ripple={{ color: "#FFF" }}
        onPress={onDeleteItem.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressItem}
      >
        <Text style={styles.goalText}>{text} </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItems: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e08cc",
  },
  pressItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: "#FFFFFF",
  },
});

export default GoalItem;
