import React, { useState } from "react";
import "./TestPages.css";
import Header from "../../components/Header/Header";
import Accordion from "react-bootstrap/Accordion";

function TestPages() {
  const [fields, setFields] = useState([{ id: 1, value: '', showRemoveButton: false, showAddButton: true }]);

  const addField = () => {
    const newFields = [...fields, { id: fields.length + 1, value: '', showRemoveButton: true, showAddButton: false }];
    setFields(newFields);
  };

 const removeField = (id, index) => {
  const updatedFields = fields.filter((field) => field.id !== id);
  setFields(updatedFields);

  // Show the "Add" button for the previous field when removing a field
  if (index > 0) {
    const newFields = [...fields];
    newFields[index - 1].showAddButton = true;
    setFields(newFields);
  }
};

  const handleChange = (id, value) => {
    const updatedFields = fields.map((field) =>
      field.id === id ? { ...field, value } : field
    );
    setFields(updatedFields);
  };

  // const [fields, setFields] = useState([{ id: 1, value: '' }]);
  // const [isAddMode, setIsAddMode] = useState(false);

  // const toggleAddMode = () => {
  //   setIsAddMode(true);
  // };

  // const addField = () => {
  //   const newField = { id: fields.length + 1, value: '' };
  //   setFields([...fields, newField]);
  // };

  // const removeField = (id) => {
  //   const updatedFields = fields.filter((field) => field.id !== id);
  //   setFields(updatedFields);
  // };

  // const handleInputChange = (id, value) => {
  //   const updatedFields = fields.map((field) =>
  //     field.id === id ? { ...field, value } : field
  //   );
  //   setFields(updatedFields);
  // };
  // const sections = [
  //   {
  //     summary:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Blanditiis, velit.",
  //     detail:
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo eligendi voluptatum consequuntur consequatur quia?Quaerat, debitis, ducimus suscipit ipsum at illum, expedita iurepariatur harum ipsam fugit. Fugit, soluta ipsum.",
  //   },
  //   {
  //     summary:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Blanditiis, velit.",
  //     detail:
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo eligendi voluptatum consequuntur consequatur quia?Quaerat, debitis, ducimus suscipit ipsum at illum, expedita iurepariatur harum ipsam fugit. Fugit, soluta ipsum.",
  //   },
  //   {
  //     summary:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Blanditiis, velit.",
  //     detail:
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo eligendi voluptatum consequuntur consequatur quia?Quaerat, debitis, ducimus suscipit ipsum at illum, expedita iurepariatur harum ipsam fugit. Fugit, soluta ipsum.",
  //   },
  //   {
  //     summary:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Blanditiis, velit.",
  //     detail:
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo eligendi voluptatum consequuntur consequatur quia?Quaerat, debitis, ducimus suscipit ipsum at illum, expedita iurepariatur harum ipsam fugit. Fugit, soluta ipsum.",
  //   },
  //   {
  //     summary:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Blanditiis, velit.",
  //     detail:
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo eligendi voluptatum consequuntur consequatur quia?Quaerat, debitis, ducimus suscipit ipsum at illum, expedita iurepariatur harum ipsam fugit. Fugit, soluta ipsum.",
  //   },
  //   {
  //     summary:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Blanditiis, velit.",
  //     detail:
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo eligendi voluptatum consequuntur consequatur quia?Quaerat, debitis, ducimus suscipit ipsum at illum, expedita iurepariatur harum ipsam fugit. Fugit, soluta ipsum.",
  //   },
  //   {
  //     summary:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Blanditiis, velit.",
  //     detail:
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo eligendi voluptatum consequuntur consequatur quia?Quaerat, debitis, ducimus suscipit ipsum at illum, expedita iurepariatur harum ipsam fugit. Fugit, soluta ipsum.",
  //   },
  //   {
  //     summary:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Blanditiis, velit.",
  //     detail:
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo eligendi voluptatum consequuntur consequatur quia?Quaerat, debitis, ducimus suscipit ipsum at illum, expedita iurepariatur harum ipsam fugit. Fugit, soluta ipsum.",
  //   },
  //   {
  //     summary:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Blanditiis, velit.",
  //     detail:
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo eligendi voluptatum consequuntur consequatur quia?Quaerat, debitis, ducimus suscipit ipsum at illum, expedita iurepariatur harum ipsam fugit. Fugit, soluta ipsum.",
  //   },
  //   {
  //     summary:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Blanditiis, velit.",
  //     detail:
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo eligendi voluptatum consequuntur consequatur quia?Quaerat, debitis, ducimus suscipit ipsum at illum, expedita iurepariatur harum ipsam fugit. Fugit, soluta ipsum.",
  //   },
  //   {
  //     summary:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Blanditiis, velit.",
  //     detail:
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo eligendi voluptatum consequuntur consequatur quia?Quaerat, debitis, ducimus suscipit ipsum at illum, expedita iurepariatur harum ipsam fugit. Fugit, soluta ipsum.",
  //   },
  //   // Add more sections as needed
  // ];

  // const [activeKey, setActiveKey] = useState(null);

  // const handleAccordionToggle = (eventKey) => {
  //   setActiveKey(eventKey === activeKey ? null : eventKey);
  // };

  return (
    <>
      <Header></Header>
      {/* <div className="faq-body">
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
      </div> */}

{/* <div>
      <form style={{textAlign: "center"}}>
      {isAddMode && (
          <button type="button" onClick={addField}>
           +
          </button>
        )}

        {fields.map((field) => (
          <div key={field.id}>
            <input
            style={{width: "50%", }}
              type="text"
              value={field.value}
              onChange={(e) => handleInputChange(field.id, e.target.value)}
            />
            {isAddMode && (
              <button type="button" onClick={() => removeField(field.id)}>
               -
              </button>
            )}
          </div>
        ))}

      
        {!isAddMode && (
          <button type="button" onClick={toggleAddMode}>
            Show Additional Fields
          </button>
        )}
      </form>
    </div> */}
       <div>
      {fields.map((field, index) => (
        <div key={field.id}>
          {field.showAddButton && (
            <button onClick={addField}>Add</button>
          )}
          {field.showRemoveButton && (
            <button onClick={() => removeField(field.id, index)}>Remove</button>
          )}
          <input
            type="text"
            value={field.value}
            onChange={(e) => handleChange(field.id, e.target.value)}
          />
        </div>
      ))}
    </div>
    </>
  );
}

export default TestPages;
