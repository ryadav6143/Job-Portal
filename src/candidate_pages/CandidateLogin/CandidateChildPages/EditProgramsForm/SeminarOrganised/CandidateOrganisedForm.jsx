import React, { useEffect, useState } from 'react';
import candidatesApiService from '../../../../candidateService';
import updatebtn from "../../../../../assets/logos/update.png";
import deletebtn from "../../../../../assets/logos/delete.png";
import EditOrganisedForm from './EditOrganisedForm';
import AddOrganisedForm from './AddOrganisedForm';
import "./CandidateOrganisedForm.css"

const CandidateOrganisedForm = () => {
  const [organisedItem, setOrganisedItem] = useState([]);
  const [editItemId, setEditItemId] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [filteredItem, setFilteredItem] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const fetchData = async () => {
    try {
      const fetchedData = await candidatesApiService.getCandidateOrganised();
      setOrganisedItem(fetchedData);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
  };

  const handleEditClick = (itemId) => {
    console.log("id??",itemId);
    const filteredItem = organisedItem.find(item => item.id === itemId);
    console.log("Filtered item:", filteredItem);
    setFilteredItem(filteredItem);
    setEditItemId(itemId);
    setEditMode(true);
  };
  const handleClose = () => {    
    setEditMode(false);
    
  };
  const handleOpenOrganizedClick = () => {
    setIsPopupOpen(true); // Open popup
  };
  const handleCloseOrganizedClick = () => {
    setIsPopupOpen(true); 
  };
  return (
    <>
      <div className="new-opening-btn">
        <button onClick={handleOpenOrganizedClick}>Add Organized</button>
      </div>

      <div className="master-table">
        <p className="SCA-heading">Organized</p>
        <div className="table-responsive fixe-table">
          <table className="table table-responsive">
            <thead style={{ color: "rgba(0, 0, 0, 0.63)" }} className="thead">
              <tr>
                <th scope="col">Sr. No.</th>
                <th scope="col">Date From</th>
                <th scope="col">Date To</th>
                <th scope="col">Name of the Course</th>
                <th scope="col">Sponsored By</th>
                <th scope="col">No. of Participants</th>
                <th scope="col">From Institutes</th>
                <th scope="col">From Industry</th>
                <th scope="col">Edit</th>
                <th scope="col">DELETE</th>
              </tr>
            </thead>
            <tbody>
              {organisedItem && organisedItem.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{formatDate(item.organise_date_from)}</td>
                  <td>{formatDate(item.organise_date_to)}</td>
                  <td>{item.name_of_course}</td>
                  <td>{item.sponsered_by}</td>
                  <td>{item.participants_number}</td>
                  <td>{item.name_of_institute}</td>
                  <td>{item.name_of_industry}</td>
                  <td>
                    <button
                      type="button"
                      id="table-btns"
                      onClick={() => handleEditClick(item.id)}
                    >
                      <img className="up-del-btn" src={updatebtn} alt="" />
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      id="table-btns"
                    >
                      <img className="up-del-btn" src={deletebtn} alt="" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {editMode && <EditOrganisedForm  filteredItem={filteredItem} handleClose={() => setEditMode(false)} />}
      {isPopupOpen && <AddOrganisedForm   handleCloseOrganizedClick={() => setIsPopupOpen(false)} />}
    </>
  );
};

export default CandidateOrganisedForm;
