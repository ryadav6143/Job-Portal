import React, { useState } from "react";
import "./TestPages.css";
import Header from "../../components/Header/Header";
import Accordion from "react-bootstrap/Accordion";

function TestPages() {
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

  const [activeKey, setActiveKey] = useState(null);

  const handleAccordionToggle = (eventKey) => {
    setActiveKey(eventKey === activeKey ? null : eventKey);
  };

  return (
    <>
      <Header></Header>
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
    </>
  );
}

export default TestPages;
