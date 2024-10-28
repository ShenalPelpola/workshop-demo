// 1) Import the lazy and Suspense from react
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavWrapper from "./NavWrapper";
// import Home from "./Home";
// import About from "./About";
// import Store from "./Store";

// 2) Use the lazy function to import the components asynchronously, 
// Use the then method to access the default property of the module
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
// By default, the module is imported as an object with a default property that holds the component.
// To access the component, you need to destructure the object and access the default property.
const Store = lazy(() => import("./Store").then((module) => ({ default: module.Store })));


const CodeSplittingExample = () => {
  return (
    // 3) Wrap the Router component with the Suspense component and provide a fallback prop to display a loading message while the components are loading.
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<NavWrapper />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/store" element={<Store />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
};

export default CodeSplittingExample;
