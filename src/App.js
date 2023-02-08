import Navbar from "./Components/Navbar";
import "./App.css";
import AllRoutes from "./Components/Routes/AllRoutes";
import { useState, useEffect } from "react";
import Slider from "./Components/Slider";

function App() {
  const [menu, setmenu] = useState(false);
  return (
    <div className="App">
      {/* <Slider setmenu={setmenu} menu={menu} />
      <Navbar setmenu={setmenu} menu={menu} />
      <AllRoutes /> */}
      <Products />
    </div>
  );
}

export default App;
