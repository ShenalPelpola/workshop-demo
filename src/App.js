import { Parent } from "./Examples/Re-render-optimizations/MovingStateDown/Problem/Parent";
// import { Parent } from "./Examples/Re-render-optimizations/MovingStateDown/Solution/Parent";
// import { Parent } from "./Examples/Re-render-optimizations/ComponentAsChildren/Problem/Parent";
// import { Parent } from "./Examples/Re-render-optimizations/ComponentAsChildren/Solution/Parent";
// import { Parent } from "./Examples/Re-render-optimizations/ComponentAsProps/Problem/Parent";
// import { Parent } from "./Examples/Re-render-optimizations/ComponentAsProps/Solution/Parent";
// import { Parent } from "./Examples/Re-render-optimizations/Memorization/Parent";
// import CodeSplittingExample from "./Examples/CodeSplitting/CodeSplittingExample";
// import { ExpensiveComponent } from "./Examples/Re-render-optimizations/ComponentAsChildren/Solution/ExpensiveComponent";
// import { DebounceExample } from "./Examples/DebounceAndThrottle/DebounceExample";
// import { ThrottledMouseTracker } from "./Examples/DebounceAndThrottle/ThrottleExample";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Parent />

      {/* <Parent>
        <ExpensiveComponent />
      </Parent> */}

      {/* <Parent ExpensiveComponent={<ExpensiveComponent />} /> */}

      {/* <CodeSplittingExample /> */}

      {/* <DebounceExample /> */}
      
      {/* <ThrottledMouseTracker /> */}
    </div>
  );
}

export default App;
