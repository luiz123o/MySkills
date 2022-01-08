import React from "react";
import { StatusBar } from "react-native";
import { Home } from "./src/pages/Home";

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={'#000'} />
      <Home />
    </>
  );
};

export default App;
