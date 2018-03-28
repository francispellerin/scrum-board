import React, { Component } from 'react';
import './App.css';
import Story from './components/story';
import { Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



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
		
		<div></div>
		
		<div style={{margin:"0 auto", maxWidth:"1200px"}}>
			<Row>
				{this.state.stories.map(function(item){
					return <Col xs="12" sm="4" lg="3"><Story title={item.title} status={item.status} /></Col>;
					})
				}
			</Row>
		</div>
      </div>
    );
  }
}

export default App;
