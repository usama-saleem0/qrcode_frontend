import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Generatetypesqrcode from "../components/Generatetypesqrcode";
import "bootstrap/dist/css/bootstrap.min.css";
import { baseurl } from "../baseurl";
import hd from "../img/download.svg";
import { useTranslation } from "react-i18next";

import p1 from "../img/p1.svg";
import p2 from "../img/p2.svg";
import p3 from "../img/p3.svg";
import p4 from "../img/p4.svg";
import p5 from "../img/p5.svg";
import p6 from "../img/p6.svg";
import p8 from "../img/p8.svg";
import p9 from "../img/p9.svg";
import p10 from "../img/p10.svg";

import b1 from "../img/b1.svg";
import b2 from "../img/b2.svg";
import b3 from "../img/b3.svg";
import b4 from "../img/b4.svg";
import b5 from "../img/b5.svg";
import b6 from "../img/b6.svg";

import b7 from "../img/b1.svg";
import b8 from "../img/b2.svg";
import b9 from "../img/b3.svg";
import b10 from "../img/b4.svg";
import b11 from "../img/b5.svg";
import b12 from "../img/b6.svg";

const Plans = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="Plans ">
        <div className="contanir">
          <div className="main-Plans">
            <div className="Plans-tital">
              <h2>{t("arplans1")}</h2>
              <p className="para-tital-1">
                {" "}
                {t("arplans2")}
                <br />
                {t("arplans3")}
              </p>
              <div className="Plans-box">
                <div className="Plans-card active">
                  <div className="more-box-active">
                    <p> {t("arplans4")}</p>
                  </div>
                  <h3> {t("arplans5")}</h3>
                  <span>
                    <h4> {t("arplans7")}</h4>
                    <h2> {t("arplans8")}</h2>

                    <p> {t("arplans9")}</p>
                  </span>

                  <a> {t("arplans10")}</a>

                  <button> {t("arplans11")}</button>
                </div>

                <div className="Plans-card">
                  <h3> {t("arplans5")}</h3>
                  <span>
                    <h2> {t("arplans12")}</h2>

                    <p> {t("arplans9")}</p>
                  </span>

                  <a> {t("arplans10")}</a>

                  <button> {t("arplans11")}</button>
                </div>

                <div className="Plans-card">
                  <h3> {t("arplans13")}</h3>
                  <span>
                    <h2> {t("arplans14")}</h2>

                    <p> {t("arplans9")}</p>
                  </span>

                  <a> {t("arplans10")}</a>

                  <button> {t("arplans11")}</button>
                </div>
              </div>
              <p className="para-tital-2"> {t("arplans15")}</p>
            </div>
            <div className="Payment-methods">
              <h2> {t("arplans16")}</h2>
              <div className="Payment-methods-box">
                <span className="span-p-box">
                  <img src={p1} alt="" />
                </span>
                <span className="span-p-box">
                  <img src={p2} alt="" />
                </span>
                <span className="span-p-box">
                  <img src={p3} alt="" />
                </span>
                <span className="span-p-box">
                  <img src={p4} alt="" />
                </span>
                <span className="span-p-box">
                  <img src={p5} alt="" />
                </span>
                <span className="span-p-box">
                  <img src={p6} alt="" />
                </span>
                <span className="span-p-box">
                  <img src={p8} alt="" />
                </span>
                <span className="span-p-box">
                  <img src={p9} alt="" />
                </span>
                <span className="span-p-box">
                  <img src={p10} alt="" />
                </span>
              </div>
            </div>
            <div className="healt-box">
              <span>
                <img src={hd} alt="" />
              </span>
              <p>
                {t("arplans17")} <a> {t("arplans18")}</a>
              </p>
            </div>

            <div className="Payment-methods">
              <h2> {t("arplans19")}</h2>

              <div className="include-box">
                <div className="three-hero-box">
                  <div className="include-card">
                    <img src={b1} alt="" />
                    <span>
                      <h2> {t("arplans20")}</h2>

                      <p>{t("arplans21")}</p>
                    </span>
                  </div>

                  <div className="include-card">
                    <img src={b2} alt="" />
                    <span>
                      <h2>{t("arplans22")}</h2>

                      <p>{t("arplans23")}</p>
                    </span>
                  </div>

                  <div className="include-card">
                    <img src={b3} alt="" />
                    <span>
                      <h2>{t("arplans24")}</h2>

                      <p>{t("arplans25")}</p>
                    </span>
                  </div>
                </div>

                <div className="three-hero-box">
                  <div className="include-card">
                    <img src={b4} alt="" />
                    <span>
                      <h2>{t("arplans26")}</h2>

                      <p>{t("arplans27")}</p>
                    </span>
                  </div>

                  <div className="include-card">
                    <img src={b5} alt="" />
                    <span>
                      <h2>{t("arplans28")}</h2>

                      <p>{t("arplans29")}</p>
                    </span>
                  </div>

                  <div className="include-card">
                    <img src={b6} alt="" />
                    <span>
                      <h2>{t("arplans30")}</h2>

                      <p>{t("arplans31")}</p>
                    </span>
                  </div>
                </div>

                <div className="three-hero-box">
                  <div className="include-card">
                    <img src={b7} alt="" />
                    <span>
                      <h2>{t("arplans32")}</h2>

                      <p>{t("arplans33")}</p>
                    </span>
                  </div>

                  <div className="include-card">
                    <img src={b8} alt="" />
                    <span>
                      <h2>{t("arplans34")}</h2>

                      <p>{t("arplans35")}</p>
                    </span>
                  </div>

                  <div className="include-card">
                    <img src={b9} alt="" />
                    <span>
                      <h2>{t("arplans36")}</h2>

                      <p>{t("arplans37")}</p>
                    </span>
                  </div>
                </div>

                <div className="three-hero-box">
                  <div className="include-card">
                    <img src={b10} alt="" />
                    <span>
                      <h2>{t("arplans38")}</h2>

                      <p>{t("arplans39")}</p>
                    </span>
                  </div>

                  <div className="include-card">
                    <img src={b11} alt="" />
                    <span>
                      <h2>{t("arplans40")}</h2>
                      <p>{t("arplans41")}</p>
                    </span>
                  </div>

                  <div className="include-card">
                    <img src={b12} alt="" />
                    <span>
                      <h2>{t("arplans42")}</h2>

                      <p>{t("arplans43")}</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Plans;
