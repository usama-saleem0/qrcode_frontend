import React from "react";
import Secondtypeslider from "./innersliders/secondtypeslider";
import { Col, Container, Row } from "react-bootstrap";
import Secondtypeslider12 from "../../qr-type-9/type9-components/innersliders/secondtypeslider12";
import Secondtypeslider13 from "../../qr-type-9/type9-components/innersliders/secondtypeslider13";
import Secondtypeslider15 from "../../qr-type-9/type9-components/innersliders/secondtypeslider15";
import { useTranslation } from "react-i18next";

const Secondtypesecbusnis = ({ handleregister }) => {
  const { t } = useTranslation();
  return (
    <>
      <section className="second_type_sec">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="second_type_sec_head">
                <h2>{t("ar_8")}</h2>
                <p>{t("ar_9")}</p>
              </div>
            </Col>
            <Col lg={12}>
              <Secondtypeslider15 handleregister={handleregister} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Secondtypesecbusnis;
