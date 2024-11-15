import React from "react";
import Secondtypeslider from "./innersliders/secondtypeslider4";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

const Secondtypesec4 = ({ handleregister }) => {
    const { t } = useTranslation();

    return (
        <>
            <section className="second_type_sec">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="second_type_sec_head">
                                <h2>{t('NB_learn_about_vcard_plus')}</h2>
                                <p>{t('NB_expand_data_description')}</p>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <Secondtypeslider handleregister={handleregister} />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Secondtypesec4;
