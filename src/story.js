import React, {Component} from 'react';
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";

class Story extends Component {

    render() {
        return (
            <div style={{width:200 + 'px'}}>
                <Card bgColor="#f4f4f4">
                    <CardHeader>{this.props.title}</CardHeader>
                    <CardBody>jfkdlfjdlks fndkfjdsfj djfhdkjfhdjs fdjfshfjkhskj fndjfksdhfjk nfsdhfjskhf</CardBody>
                    <CardFooter>{this.props.status}</CardFooter>
                </Card>
            </div>
            
        );
    }
}

export default Story;