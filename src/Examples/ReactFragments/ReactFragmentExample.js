const WithFragments = () => {
  return (
    <>
      <h1>React Fragment Example</h1>
      <p>
        React Fragments let you group multiple elements without adding extra
        nodes to the DOM.
      </p>
    </>
  );
};

const WithoutFragments = () => {
  return (
    <div>
      <h1>React Fragment Example</h1>
      <p>
        React Fragments let you group multiple elements without adding extra
        nodes to the DOM.
      </p>
    </div>
  );
};
