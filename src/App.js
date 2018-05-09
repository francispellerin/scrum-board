import React, { Component } from 'react';
import './App.css';
import Story from './components/story';
import ScrumCard from './components/card';
import { Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {

	state = {
		stories: [],
		doneStories: [],
		inProgressStories: [],
		newStories: [],
		completionPercentage: 0,
		bucketList: []
	};

	componentDidMount() {
		this.getStories();
		this.getDoneStories();
		this.getInProgressStories();
		this.getNewStories();
		this.getCompletionPercentage();
		this.getBucketList();
	}

getDoneStories(){

	fetch("http://localhost:3004/stories?status=Done")
    .then(res => res.json())
    .then(result => 
        this.setState({
					doneStories : result
        })
    );
}
getInProgressStories(){

	fetch("http://localhost:3004/stories?status=In Progress")
    .then(res => res.json())
    .then(result => 
        this.setState({
					inProgressStories : result
        })
    );
}

getNewStories(){

	fetch("http://localhost:3004/stories?status=New")
    .then(res => res.json())
    .then(result => 
        this.setState({
					newStories : result
        })
    );
}

getCompletionPercentage(){

	return 30;
}

getBucketList(){

	fetch("http://localhost:3004/sprints/23")
    .then(res => res.json())
    .then(result => 
        this.setState({
					bucketList : result.todos
        })
		);
}

getStories() {

    fetch("http://localhost:3004/stories?status=Done")
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

			<h1>GEMINI - Sprint 23</h1>
		
		<div></div>
		
		<div style={{margin:"0 auto", maxWidth:"1200px"}}>
			<Row>
					<Col xs="12" sm="4" lg="8">
						<Row>
							{this.state.inProgressStories.map(function(item){
								return <Col xs="12" sm="4" lg="3"><Story title={item.title} status={item.status} /></Col>;
								})
							}
							{this.state.newStories.map(function(item){
								return <Col xs="12" sm="4" lg="3"><Story title={item.title} status={item.status} /></Col>;
								})
							}
							{this.state.doneStories.map(function(item){
								return <Col xs="12" sm="4" lg="3"><Story title={item.title} status={item.status} /></Col>;
								})
							}
						</Row>
					</Col>
					<Col xs="12" sm="4" lg="4">
						<ScrumCard items={this.state.bucketList}></ScrumCard>
					</Col>
			</Row>
		</div>
      </div>
    );
  }
}

export default App;
