import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import Secondtypeslider14 from "../qr-type-9/type9-components/innersliders/secondtypeslider14";
import { useTranslation } from "react-i18next";

const CouponSecondtypesec = ({ handleregister }) => {
  const { t } = useTranslation();
  return (
    <>
      <section className="second_type_sec">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="second_type_sec_head">
                <h2>{t("ar_learn_about_uses_h2")}</h2>
                <p>{t("ar_industry_reach_p")}</p>
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
};

export default CouponSecondtypesec;
