import React, { useEffect, useState } from 'react';
import candidatesApiService from '../../../../candidateService';
import updatebtn  from "../../../../../assets/logos/update.png"
import deletebtn from "../../../../../assets/logos/delete.png"
import EditAttendForm from './EditAttendForm';
import AddAttendForm from './AddAttendFrom';

const CandidateAttendForm = () => {

  const [attendItem, setAttendItem] = useState([])
  const [filteredItem, setFilteredItem] = useState(null);
  const [editItemId, setEditItemId] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const fetchData = async () => {
    try {
      const fetchedData = await candidatesApiService.getCandidateAttend();
      // console.log("Attend///", fetchedData);
      setAttendItem(fetchedData);
    } catch (error) {
      console.error("Error fetching data:", error.message);

    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenAttendClick = () => {
    setIsPopupOpen(true); // Open popup
  };
  const handleCloseAttendClick = () => {
    setIsPopupOpen(true); 
  };
  const handleEditClick = (itemId) => {
    // console.log("id??",itemId);
    const filteredItem = attendItem.find(item => item.id === itemId);
    // console.log("Filtered item:", filteredItem);
    setFilteredItem(filteredItem);
    setEditItemId(itemId);
    setEditMode(true);
  };
  const handleClose = () => {    
    setEditMode(false);
    
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
  };

  const handleDeleteClick = async (itemId) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this item?");
    if (isConfirmed) {
      try {
        await candidatesApiService.DeleteAttendForm(itemId);
        // Update state after successful deletion
        setAttendItem(prevItems => prevItems.filter(item => item.id !== itemId));
        // console.log("Item deleted successfully");
      } catch (error) {
        console.error("Error deleting item:", error.message);
      }
    }
  };
  
  return (
    <>
     
      <div className="master-table">
        <div className="flex-btns">
        <p className="candidate-table-heading">Attend</p>
        <button className="add-btn" onClick={handleOpenAttendClick}>Add Attend</button>
        </div>


        <div className="table-responsive set-programs-tabel">

          <table className="table table-responsive">
            <thead style={{ color: "rgba(0, 0, 0, 0.63)" }} className="thead">
              <tr>
                <th scope="col">Sr. No.</th>
                <th scope="col">Date From</th>
                <th scope="col">Date To</th>
                <th scope="col">Name of the Course</th>
                <th scope="col">Sponsored By</th>
                <th scope="col">Edit</th>
                <th scope="col">DELETE</th>
                
              </tr>
            </thead>
            <tbody>
              {attendItem && attendItem.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{formatDate(item.attend_date_from)}</td>
                  <td>{formatDate(item.attend_date_to)}</td>
                  <td>{item.name_of_course}</td>
                  <td>{item.sponsered_by}</td>
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
                      onClick={() => handleDeleteClick(item.id)}
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
      {editMode && <EditAttendForm filteredItem={filteredItem} handleClose={() => setEditMode(false)} fetchData={fetchData}/>}
      {isPopupOpen && <AddAttendForm  handleCloseAttendClick={() => setIsPopupOpen(false)} fetchData={fetchData}/>}
      </>
  );
};

export default CandidateAttendForm;
