import React, {Component} from 'react';
import { Card, CardBody, CardHeader } from "react-simple-card";

import styled from 'styled-components';

const ScrumCardWrapper = styled.div`
	width:100%;
	margin:20px 0;
`;

class ScrumCard extends Component {

    render() {
        return (
			<ScrumCardWrapper>
				<Card bgColor="#f4f4f4">
					<CardHeader>Bucket List</CardHeader>
					<CardBody>
						<ul>
							{this.props.items.map(function(item){
								return <li>{item}</li>
							})}
						</ul>
					</CardBody>
				</Card>
			</ScrumCardWrapper>
        );
    }
}

export default ScrumCard;