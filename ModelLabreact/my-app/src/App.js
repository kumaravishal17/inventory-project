// App.js
import React from 'react';
function App() {
  // Inline style objects
  const headingStyle = {
    color: 'green'
  };
  const divStyle = {
    backgroundColor: 'lightblue',
    color: 'darkblue',
    padding: '10px',
    border: '1px solid blue',
    borderRadius: '5px'
  };
  const paragraphStyle = {
    color: 'darkblue',
    fontSize: '16px'
  };
  return (
    <div>
      <h1 style={headingStyle}>Inline Style in JSX Example</h1>
      <div style={divStyle}>
        <p style={paragraphStyle}>This is a paragraph with inline styles applied.</p>
      </div>
    </div>
  );
}
export default App;
