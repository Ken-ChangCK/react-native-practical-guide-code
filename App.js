import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Button,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import { LinearGradient } from "expo-linear-gradient";
import GameSrceen from "./screens/GameSrceen";
import StartGameScreen from "./screens/StartGameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./constants/color";

// cmd + d => debug mode
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handlePickNumber = (pickNumber) => {
    setUserNumber(pickNumber);
    setIsGameOver(false);
  };

  const handleGameOver = (numberOfRounds) => {
    setIsGameOver(true);
    setGuessRounds(numberOfRounds);
  };

  const handleStartNewGame = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  let screen = <StartGameScreen onPickNumber={handlePickNumber} />;

  if (userNumber) {
    screen = (
      <GameSrceen userNumber={userNumber} onHandleGameOVer={handleGameOver} />
    );
  }

  if (isGameOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={handleStartNewGame}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        style={styles.rootScreen}
        colors={[Colors.primary700, Colors.accent500]}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMethod="auto"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          {/* <StatusBar style="light" /> */}
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
