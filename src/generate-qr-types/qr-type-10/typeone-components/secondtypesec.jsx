import React from "react";
import Secondtypeslider from "./innersliders/secondtypeslider";
import { Col, Container, Row } from "react-bootstrap";

const Secondtypesec = ({handleregister}) => {
    return (
        <>
        <section className="second_type_sec">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="second_type_sec_head">
                            <h2>Learn about some of the multiple uses of the image gallery</h2>
                            <p>Make your advertising campaigns more attractive by sharing images of your products, services and events with your clients.</p>
                        </div>
                    </Col>  
                    <Col lg={12}>
                        <Secondtypeslider  handleregister={handleregister} />
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}

export default Secondtypesec