import { useState } from "react";
import { StyleSheet, View, FlatList, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsDetailScreen from "./screens/MealsDetailScreen";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#3f2f25",
            },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All categories",
            }}
          />
          <Stack.Screen
            name="MealsOverViewScreen"
            component={MealsOverViewScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}
          />
          <Stack.Screen
            name="MealsDetailScreen"
            component={MealsDetailScreen}
            // options={{
            //   headerRight: () => {
            //     return <Button title="Tap it" />;
            //   },
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
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
