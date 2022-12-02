import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import Home from "./Home";
import AddBook from "./AddBook";
import EditBook from "./EditBook";

const Stack = createNativeStackNavigator();

function App() {
  const [data, setData] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={(props) => {
            return <Home {...props} data={data} setData={setData} />;
          }}
        />
        <Stack.Screen
          name="AddBook"
          component={(props) => {
            return <AddBook {...props} data={data} setData={setData} />;
          }}
        />
        <Stack.Screen
          name="EditBook"
          component={(props) => {
            return <EditBook {...props} data={data} setData={setData} />;
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
