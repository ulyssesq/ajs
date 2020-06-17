import React from 'react';
import Main from './Main';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentAction: "list"};
  }

  render() {
    const action = this.state.currentAction;
    return (
      <div className="App">
      <header className="App-header">
          <div className="container">
            <h1 className="ml-2">Livraria</h1>
          </div>
        </header>
      <div className="container mt-5">
        <Main action={action} />
      </div>
    </div>
    );
  } 
}

export default App;
