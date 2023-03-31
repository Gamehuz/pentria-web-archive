import React from "react";
import { Toaster } from "react-hot-toast";
import { userData } from "./redux/features/user/service";
import Routes from "./Routes";

function App() {
  userData();
  return (
    <>
      <Toaster />
      <Routes />;
    </>
  );
}

export default App;
