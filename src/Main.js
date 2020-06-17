import React from 'react';
import ListBooks from './ListBooks';
import CreateBook from './CreateBook';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    if (this.props.action === "list") {
      return <ListBooks />;
    }
    else if (this.props.action === "create"){
      return <CreateBook />
    }

    return <div>Ops.</div>
  }
}

export default Main;