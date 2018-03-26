import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Story from './story';

class App extends Component {

  state = {
    stories: []
};

  componentDidMount() {

    this.getStories();
}

getStories() {

    fetch("http://localhost:3004/stories")
    .then(res => res.json())
    .then(result => 
        this.setState({
            stories : result
        })
    );
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          {this.state.stories.map(function(item){
                    return <div><br/><Story title={item.title} status={item.status} /></div>;
                  })
          }
        
      </div>
    );
  }
}

export default App;
