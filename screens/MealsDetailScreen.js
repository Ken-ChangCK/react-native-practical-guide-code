import { useLayoutEffect } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import SubTitle from "../components/MealDetail/SubTitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

const MealsDetailScreen = ({ route }) => {
  const mealId = route.params.mealId;
  const selectMeal = MEALS.find((meal) => meal.id === mealId);
  const navigation = useNavigation();
  const handleHeaderOnPress = () => {
    console.log("handleHeaderOnPress");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton onPress={handleHeaderOnPress} icon="star" color="white" />
        );
      },
    });
    return () => {};
  }, [navigation, handleHeaderOnPress]);

  return (
    <ScrollView style={styles.root}>
      <Image style={styles.image} source={{ uri: selectMeal.imageUrl }} />
      <Text style={styles.title}>{selectMeal.title}</Text>
      <MealDetail
        duration={selectMeal.duration}
        affordability={selectMeal.affordability}
        complexity={selectMeal.complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>ingredient</SubTitle>
          <List data={selectMeal.ingredients} />

          <SubTitle>Steps</SubTitle>
          <List data={selectMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealsDetailScreen;

const styles = StyleSheet.create({
  root: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    maxWidth: "80%",
  },
});
