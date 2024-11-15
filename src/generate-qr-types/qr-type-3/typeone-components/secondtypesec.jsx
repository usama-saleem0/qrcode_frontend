import React from "react";
import Secondtypeslider from "./innersliders/secondtypeslider";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
const Secondtypesec = ({ handleregister }) => {
    const { t } = useTranslation();
    return (
        <>
            <section className="second_type_sec">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="second_type_sec_head">
                                <h2>{t('sqrtype8')}  </h2>
                                <p>{t('sqrtype9')}</p>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <Secondtypeslider handleregister={handleregister} />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Secondtypesec