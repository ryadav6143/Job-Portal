import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footers from "../../components/Footer/Footers";
import Accordion from "react-bootstrap/Accordion";
import "./FAQ.css";
import mark from "../../assets/logos/mark.png";

function FAQ() {
  const [activeKey, setActiveKey] = useState(null);

  const handleAccordionToggle = (eventKey) => {
    setActiveKey(eventKey === activeKey ? null : eventKey);
  };
  const sections = [
    {
      summary:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Blanditiis, velit.",
      detail:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo eligendi voluptatum consequuntur consequatur quia?Quaerat, debitis, ducimus suscipit ipsum at illum, expedita iurepariatur harum ipsam fugit. Fugit, soluta ipsum.",
    },
    {
      summary:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Blanditiis, velit.",
      detail:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo eligendi voluptatum consequuntur consequatur quia?Quaerat, debitis, ducimus suscipit ipsum at illum, expedita iurepariatur harum ipsam fugit. Fugit, soluta ipsum.",
    },
    {
      summary:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Blanditiis, velit.",
      detail:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo eligendi voluptatum consequuntur consequatur quia?Quaerat, debitis, ducimus suscipit ipsum at illum, expedita iurepariatur harum ipsam fugit. Fugit, soluta ipsum.",
    },
    {
      summary:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Blanditiis, velit.",
      detail:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo eligendi voluptatum consequuntur consequatur quia?Quaerat, debitis, ducimus suscipit ipsum at illum, expedita iurepariatur harum ipsam fugit. Fugit, soluta ipsum.",
    },
    {
      summary:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Blanditiis, velit.",
      detail:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo eligendi voluptatum consequuntur consequatur quia?Quaerat, debitis, ducimus suscipit ipsum at illum, expedita iurepariatur harum ipsam fugit. Fugit, soluta ipsum.",
    },
    {
      summary:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Blanditiis, velit.",
      detail:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo eligendi voluptatum consequuntur consequatur quia?Quaerat, debitis, ducimus suscipit ipsum at illum, expedita iurepariatur harum ipsam fugit. Fugit, soluta ipsum.",
    },
    {
      summary:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Blanditiis, velit.",
      detail:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo eligendi voluptatum consequuntur consequatur quia?Quaerat, debitis, ducimus suscipit ipsum at illum, expedita iurepariatur harum ipsam fugit. Fugit, soluta ipsum.",
    },
    {
      summary:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Blanditiis, velit.",
      detail:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo eligendi voluptatum consequuntur consequatur quia?Quaerat, debitis, ducimus suscipit ipsum at illum, expedita iurepariatur harum ipsam fugit. Fugit, soluta ipsum.",
    },
    {
      summary:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Blanditiis, velit.",
      detail:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo eligendi voluptatum consequuntur consequatur quia?Quaerat, debitis, ducimus suscipit ipsum at illum, expedita iurepariatur harum ipsam fugit. Fugit, soluta ipsum.",
    },
    {
      summary:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Blanditiis, velit.",
      detail:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo eligendi voluptatum consequuntur consequatur quia?Quaerat, debitis, ducimus suscipit ipsum at illum, expedita iurepariatur harum ipsam fugit. Fugit, soluta ipsum.",
    },
    {
      summary:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Blanditiis, velit.",
      detail:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo eligendi voluptatum consequuntur consequatur quia?Quaerat, debitis, ducimus suscipit ipsum at illum, expedita iurepariatur harum ipsam fugit. Fugit, soluta ipsum.",
    },
    // Add more sections as needed
  ];

  return (
    <>
      <Header></Header>
      <div className="faq-section">
        <div className="illustrations"></div>

        <div className="faq-body">
          <Accordion activeKey={activeKey} onSelect={handleAccordionToggle}>
            {sections.map((item, index) => (
              <Accordion.Item key={index} eventKey={index.toString()}>
                <Accordion.Header>{item.summary}</Accordion.Header>
                <Accordion.Body>
                  <p>{item.detail} </p>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
      <div className="water-marks">
        <div className="marks-left">
          <img alt="" src={mark} style={{ rotate: "35deg" }} />
          <img alt=""  src={mark} style={{ rotate: "-35deg" }} />
          <img alt="" src={mark} style={{ rotate: "180deg" }} />
          <img alt="" src={mark} style={{ rotate: "128deg" }} />
        </div>
        <div className="marks-right">
          <img alt="" src={mark} style={{ rotate: "-35deg" }} />
          <img alt=""  src={mark} style={{ rotate: "35deg" }} />
          <img alt="" src={mark} style={{ rotate: "180deg" }} />
          <img alt="" src={mark} style={{ rotate: "-48deg" }} />
        </div>
        {/* <div className="mark-bottom">
          <img src={mark} style={{ rotate: "-35deg" }} />
          <img src={mark} style={{ rotate: "35deg" }} />
          <img src={mark} style={{ rotate: "180deg" }} />
          <img src={mark} style={{ rotate: "128deg" }} />
          <img src={mark} style={{ rotate: "48deg" }} />
          <img src={mark} style={{ rotate: "-48deg" }} />
        </div> */}


      </div>

      <Footers></Footers>
    </>
  );
}

export default FAQ;
