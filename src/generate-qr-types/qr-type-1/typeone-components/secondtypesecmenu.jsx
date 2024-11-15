import React from "react";
import Secondtypeslider from "./innersliders/secondtypeslider";
import { Col, Container, Row } from "react-bootstrap";
import Secondtypeslider12 from "../../qr-type-9/type9-components/innersliders/secondtypeslider12";
import Secondtypeslider13 from "../../qr-type-9/type9-components/innersliders/secondtypeslider13";
import Secondtypeslider15 from "../../qr-type-9/type9-components/innersliders/secondtypeslider15";
import Secondtypeslider16 from "../../qr-type-9/type9-components/innersliders/secondtypeslider16";

const Secondtypesecmenu = ({handleregister}) => {
    return (
        <>
        <section className="second_type_sec">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="second_type_sec_head">
                            <h2>Learn about some of the multiple uses of the Website QR</h2>
                            <p>It doesn't matter what your industry is: expand the reach of your business by improving your customers' experience through direct and quick access to your URLs of interest.</p>
                        </div>
                    </Col>  
                    <Col lg={12}>
                        <Secondtypeslider16  handleregister={handleregister} />
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}

export default Secondtypesecmenu