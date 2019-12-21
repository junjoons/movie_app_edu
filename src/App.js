import React from 'react';

function Itc({teacher}) 
{
  return (
    <h1>ITC loves {teacher}</h1>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <Itc teacher="Bonnie"/>
      <Itc teacher="Will"/>
      <Itc teacher="KHJ"/>
      <Itc teacher="HSN"/>
    </div>
  );
}

export default App;
