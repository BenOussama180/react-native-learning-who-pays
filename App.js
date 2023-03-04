import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView } from "react-native";
import StageOne from "./src/components/stage_one";
import StageTwo from "./src/components/stage_two";
import { Provider, Context } from "./src/context";

export default function App() {
  return (
    <Provider>
      <Context.Consumer>
        {({ state: { stage } }) => (
          <ScrollView className="bg-black">
            <View className="container justify-center p-10 pt-20">
              {stage === 1 && <StageOne />}
              {stage === 2 && <StageTwo />}
            </View>
            <StatusBar style="auto" />
          </ScrollView>
        )}
      </Context.Consumer>
    </Provider>
  );
}
