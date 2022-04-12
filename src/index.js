import 'regenerator-runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import {
    Container, Row, Col
} from 'react-bootstrap';
import Signing from './elements/signing';

const Main = (props) => {
    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <Signing />
                </Col>
            </Row>
        </Container> 
    );
};

ReactDOM.render(<Main />, document.getElementById('app'));