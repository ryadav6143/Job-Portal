import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footers from "../../components/Footer/Footers";
import "./FAQ.css";
import mark from "../../assets/logos/mark.png";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
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

  const toggleSection = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <>
      <Header></Header>
      <div className="faq-section">
        <div className="illustrations"></div>

        {/* <div className="section">
          <p className="faq-heading">FAQ's</p>
          {sections.map((section, index) => (
            <div key={index}>
              <details>
                <summary>
                  <div
                    onClick={() => toggleSection(index)}
                    style={{ display: "inline" }}
                  >
                    {section.summary}
                  </div>
                </summary>
                {openIndex === index && (
                  <div className="details">
                    <p>
                      <p id="faq-p">{section.detail}</p>
                    </p>
                  </div>
                )}
              </details>
            </div>
          ))}
        </div> */}
        <div className="section">
          <p className="faq-heading">FAQ's</p>
          {sections.map((section, index) => (
            <div key={index}>
              <details>
                <summary
                  onClick={() => toggleSection(index)}
                  style={{ display: "inline" }}
                >
                  {section.summary}
                </summary>
                {openIndex === index && (
                  <p>
                    <p id="faq-p">{section.detail}</p>
                  </p>
                )}
              </details>
            </div>
          ))}
        </div>
      </div>

      <div className="marks-left">
        <img src={mark} style={{ rotate: "35deg" }} />
        <img src={mark} style={{ rotate: "-35deg" }} />
        <img src={mark} style={{ rotate: "180deg" }} />
        <img src={mark} style={{ rotate: "128deg" }} />
      </div>
      <div className="marks-right">
        <img src={mark} style={{ rotate: "-35deg" }} />
        <img src={mark} style={{ rotate: "35deg" }} />
        <img src={mark} style={{ rotate: "180deg" }} />
        <img src={mark} style={{ rotate: "-48deg" }} />
      </div>
      <div className="mark-bottom">
        <img src={mark} style={{ rotate: "-35deg" }} />
        <img src={mark} style={{ rotate: "35deg" }} />
        <img src={mark} style={{ rotate: "180deg" }} />
        <img src={mark} style={{ rotate: "128deg" }} />
        <img src={mark} style={{ rotate: "48deg" }} />
        <img src={mark} style={{ rotate: "-48deg" }} />
      </div>

      <div className="mark-bottom-2">
        <img src={mark} style={{ rotate: "-180deg" }} />
        <img src={mark} style={{ rotate: "-35deg" }} />
        <img src={mark} style={{ rotate: "130deg" }} />
        <img src={mark} style={{ rotate: "320deg" }} />
        <img src={mark} style={{ rotate: "140deg" }} />
        <img src={mark} style={{ rotate: "-48deg" }} />
      </div>

      <Footers></Footers>
    </>
  );
}

export default FAQ;
