import { View, Text, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CateGoryGridTitle from "../components/CateGoryGridTitle";
// import { useNavigation } from "@react-navigation/native";

const CategoriesScreen = ({ navigation }) => {
  function renderCatergoriesItem(itemData) {
    const handlePress = () => {
      navigation.navigate("MealsOverViewScreen", {
        categoryId: itemData.item.id,
      });
    };
    return (
      <CateGoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onHandlePress={handlePress}
      ></CateGoryGridTitle>
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCatergoriesItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
