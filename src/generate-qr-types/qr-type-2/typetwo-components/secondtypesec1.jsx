import React from "react";
import Secondtypeslider from "./innersliders/secondtypeslider1";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

const Secondtypesec1 = ({ handleregister }) => {
  const { t } = useTranslation();

  return (
    <>
      <section className="second_type_sec">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="second_type_sec_head">
                <h2>{t("NB_where_to_use_qr_link_list")}</h2>
                <p>{t("NB_simple_way_get_followers")}</p>
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

export default Secondtypesec1;
