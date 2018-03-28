import React, {Component} from 'react';
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";

import styled from 'styled-components';

const StoryWrapper = styled.div`
	width:100%;
	margin:20px 0;
`;

class Story extends Component {

    render() {
        return (
			<StoryWrapper>
				<Card bgColor="#f4f4f4">
					<CardHeader>{this.props.title}</CardHeader>
					<CardBody><p>description</p><div><span>2</span></div></CardBody>
					<CardFooter><button>{this.props.status}</button></CardFooter>
				</Card>
			</StoryWrapper>
        );
    }
}

export default Story;