import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainStack from "./MainStack";
import Details from "../screens/Details";

const AppStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
      <Stack.Screen component={MainStack} name="Main" />
      <Stack.Screen component={Details} name="Details" />
    </Stack.Navigator>
  );
};

export default AppStack;
