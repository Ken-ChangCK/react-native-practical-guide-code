import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const startAddGoalHandler = () => {
    setIsModalVisible(true);
  };
  const endAddGoalHandler = () => {
    setIsModalVisible(false);
  };

  const addGoalHandler = (enterGoalText) => {
    setCourseGoal((preValue) => [
      ...preValue,
      { text: enterGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandle = (id) => {
    setCourseGoal((cuurrentCourseGoal) => {
      return cuurrentCourseGoal.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="add new goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        ></Button>
        {isModalVisible && (
          <>
            <GoalInput
              onAddGoal={addGoalHandler}
              onCancel={endAddGoalHandler}
              visible={isModalVisible}
            />
          </>
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoal}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandle}
                />
              );
            }}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
