import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#3c0a6b" },
          headerTintColor: "white",
          tabBarActiveTintColor: "#3c0a6b",
          // drawerActiveBackgroundColor: "#f0e1ff",
          // drawerActiveTintColor: "#3c0a6b",
          // drawerStyle: {
          //   backgroundColor: "#ccc",
          // },
        }}
      >
        <Tab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
          // options={{
          //   drawerLabel: "Welcome Screen-1",
          //   drawerIcon: ({ color, size }) => (
          //     <Ionicons name="home" color={color} size={size} />
          //   ),
          // }}
        />
        <Tab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
          // options={{
          //   drawerIcon: ({ color, size }) => (
          //     <Ionicons name="person" color={color} size={size} />
          //   ),
          // }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
