import "./App.css";
import { React, useContext } from "react";
import Home from "./components/Home/home.js";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import CatergoryProvider, { CategoryContext } from "./provider/category";
// import Navbar from "./components/Navbar/navbar";
// import Fruit from "./components/Fruit/fruit";
// import Food from "./components/Food/food";
// import About from "./components/about/about";
// import Login from "./components/login/login";
// import SignUp from "./components/login/sign-up";
// import Vegetable from "./components/Fruit/vegetable";

// const Check = () => {
//   const { buttonText } = useContext(CategoryContext);
//   return buttonText ? <Fruit /> : <Vegetable />;
// };

function App() {
  return (
    // <CatergoryProvider>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Navbar />}>
    //         <Route index element={<Home />} />
    //         {/* <Route
    //         path="/ingredients/:ingredientsType"
    //         element={<Ingredients />}
    //       /> */}
    //         <Route path="/fruit" element={<Check />} />
    //         <Route path="/food" element={<Food />} />
    //         <Route path="/about" element={<About />} />
    //       </Route>
    //       <Route path="login" element={<Login />} />
    //       <Route path="sign-up" element={<SignUp />} />
    //     </Routes>
    //   </BrowserRouter>
    // </CatergoryProvider>
    <Home/>
  );
}

export default App;
