import { MEALS, CATEGORIES } from "../data/dummy-data";
// import { useRoute } from "@react-navigation/native";
import { View, Text, FlatList, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

const MealsOverViewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;
  const displayedMeal = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => {
      return category.id === catId;
    })?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation]);

  const renderMealItem = (itemData) => {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={Styles.container}>
      <FlatList
        data={displayedMeal}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverViewScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
