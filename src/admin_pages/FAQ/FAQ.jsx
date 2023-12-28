import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footers from "../../components/Footer/Footers";
import "./FAQ.css";
import mark from "../../assets/logos/mark.png";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleDetails = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1); // Close the clicked summary if it's already open
    } else {
      setOpenIndex(index); // Open the clicked summary
    }
  };
  return (
    <>
      <Header></Header>
      <div className="faq-section">
        <div className="illustrations"></div>
        <div className="section">
          <p className="faq-heading">FAQ's</p>
          <details>
            <summary>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis, velit.
            </summary>
            <p>
              <p id="faq-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo eligendi voluptatum consequuntur consequatur quia?
                Quaerat, debitis, ducimus suscipit ipsum at illum, expedita iure
                pariatur harum ipsam fugit. Fugit, soluta ipsum.
              </p>
            </p>
          </details>
          <details>
            <summary>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis, velit.
            </summary>
            <p>
              <p id="faq-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo eligendi voluptatum consequuntur consequatur quia?
                Quaerat, debitis, ducimus suscipit ipsum at illum, expedita iure
                pariatur harum ipsam fugit. Fugit, soluta ipsum.
              </p>
            </p>
          </details>
          <details>
            <summary>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis, velit.
            </summary>
            <p>
              <p id="faq-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo eligendi voluptatum consequuntur consequatur quia?
                Quaerat, debitis, ducimus suscipit ipsum at illum, expedita iure
                pariatur harum ipsam fugit. Fugit, soluta ipsum.
              </p>
            </p>
          </details>
          <details>
            <summary>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis, velit.
            </summary>
            <p>
              <p id="faq-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo eligendi voluptatum consequuntur consequatur quia?
                Quaerat, debitis, ducimus suscipit ipsum at illum, expedita iure
                pariatur harum ipsam fugit. Fugit, soluta ipsum.
              </p>
            </p>
          </details>
          <details>
            <summary>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis, velit.
            </summary>
            <p>
              <p id="faq-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo eligendi voluptatum consequuntur consequatur quia?
                Quaerat, debitis, ducimus suscipit ipsum at illum, expedita iure
                pariatur harum ipsam fugit. Fugit, soluta ipsum.
              </p>
            </p>
          </details>
          <details>
            <summary>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis, velit.
            </summary>
            <p>
              <p id="faq-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo eligendi voluptatum consequuntur consequatur quia?
                Quaerat, debitis, ducimus suscipit ipsum at illum, expedita iure
                pariatur harum ipsam fugit. Fugit, soluta ipsum.
              </p>
            </p>
          </details>
          <details>
            <summary>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis, velit.
            </summary>
            <p>
              <p id="faq-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo eligendi voluptatum consequuntur consequatur quia?
                Quaerat, debitis, ducimus suscipit ipsum at illum, expedita iure
                pariatur harum ipsam fugit. Fugit, soluta ipsum.
              </p>
            </p>
          </details>
          <details>
            <summary>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis, velit.
            </summary>
            <p>
              <p id="faq-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo eligendi voluptatum consequuntur consequatur quia?
                Quaerat, debitis, ducimus suscipit ipsum at illum, expedita iure
                pariatur harum ipsam fugit. Fugit, soluta ipsum.
              </p>
            </p>
          </details>
          <details>
            <summary>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis, velit.
            </summary>
            <p>
              <p id="faq-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo eligendi voluptatum consequuntur consequatur quia?
                Quaerat, debitis, ducimus suscipit ipsum at illum, expedita iure
                pariatur harum ipsam fugit. Fugit, soluta ipsum.
              </p>
            </p>
          </details>
          <details>
            <summary>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis, velit.
            </summary>
            <p>
              <p id="faq-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo eligendi voluptatum consequuntur consequatur quia?
                Quaerat, debitis, ducimus suscipit ipsum at illum, expedita iure
                pariatur harum ipsam fugit. Fugit, soluta ipsum.
              </p>
            </p>
          </details>
          <details>
            <summary>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis, velit.
            </summary>
            <p>
              <p id="faq-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo eligendi voluptatum consequuntur consequatur quia?
                Quaerat, debitis, ducimus suscipit ipsum at illum, expedita iure
                pariatur harum ipsam fugit. Fugit, soluta ipsum.
              </p>
            </p>
          </details>
        </div>
      </div>

      {/* <div className="marks-left">
        <img src={mark} style={{ rotate: "35deg" }} />
        <img src={mark} style={{ rotate: "-35deg" }} />
        <img src={mark} style={{ rotate: "180deg" }} />
        <img src={mark} style={{ rotate: "48deg" }} />
        <img src={mark} style={{ rotate: "-48deg" }} />
        <img src={mark} style={{ rotate: "128deg" }} />
      </div>
      <div className="marks-right">
        <img src={mark} style={{ rotate: "-35deg" }} />
        <img src={mark} style={{ rotate: "35deg" }} />
        <img src={mark} style={{ rotate: "180deg" }} />
        <img src={mark} style={{ rotate: "128deg" }} />
        <img src={mark} style={{ rotate: "48deg" }} />
        <img src={mark} style={{ rotate: "-48deg" }} />
      </div>
      <div className="mark-bottom">
        <img src={mark} style={{ rotate: "-35deg"}} />
        <img src={mark} style={{ rotate: "35deg" }} />
        <img src={mark} style={{ rotate: "180deg" }} />
        <img src={mark} style={{ rotate: "128deg" }} />
        <img src={mark} style={{ rotate: "48deg" }} />
        <img src={mark} style={{ rotate: "-48deg" }} />
      </div> */}

      <Footers></Footers>
    </>
  );
}

export default FAQ;
