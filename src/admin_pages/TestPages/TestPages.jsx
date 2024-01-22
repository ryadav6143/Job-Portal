import React, { useState } from "react";
import "./TestPages.css";
import Header from "../../components/Header/Header";

function TestPages() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
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

      <div className="faq-body">
        <div className="accordion" id="accordionExample">
          {sections.map((section, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="true"
                  aria-controls={`collapse${index}`}
                >
                  {section.summary}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className={`accordion-collapse collapse${
                  index === 0 ? " show" : ""
                }`}
                aria-labelledby={`heading${index}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>{section.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
   
 

    </>
  );
}

export default TestPages;
