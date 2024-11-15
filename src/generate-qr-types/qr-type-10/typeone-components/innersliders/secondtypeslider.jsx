import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import Secondtypeslider14 from "../../../qr-type-9/type9-components/innersliders/secondtypeslider14";

const SecondtypeconeNB = ({ handleregister }) => {
    const { t } = useTranslation();

    return (
        <>
        <section className="second_type_sec">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="second_type_sec_head">
                            <h2>{t('LearnAboutUsesOfWebsiteQRNB')}</h2>
                            <p>{t('ExpandBusinessReachNB')}</p>
                        </div>
                    </Col>  
                    <Col lg={12}>
                        <Secondtypeslider14 handleregister={handleregister} />
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    );
}

export default SecondtypeconeNB;
