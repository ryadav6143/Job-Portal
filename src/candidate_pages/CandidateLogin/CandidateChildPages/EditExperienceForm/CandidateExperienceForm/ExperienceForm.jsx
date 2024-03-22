import React, { useEffect, useState } from 'react';
import candidatesApiService from '../../../../candidateService';
import updatebtn  from "../../../../../assets/logos/update.png"
import deletebtn from "../../../../../assets/logos/delete.png"
import AddCandidateExperienceForm from './AddCandidateExperienceForm';
import EditCandidateExperienceForm from './EditCandidateExperienceForm';


const ExperienceForm = () => {

  const [experienceItem, setexperienceItem] = useState([])
  const [filteredItem, setFilteredItem] = useState(null);
  const [editItemId, setEditItemId] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
 
  const fetchData = async () => {
    try {
     
      const fetchedData = await candidatesApiService.getExperienceById();
      console.log("check response",fetchedData)
      setexperienceItem(fetchedData);

    } catch (error) {
      console.error("Error fetching data:", error.message);
   
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenExperienceClick = () => {
    setIsPopupOpen(true); // Open popup
  };
  const handleCloseexperienceClick = () => {
    setIsPopupOpen(true); 
  };
  const handleEditClick = (itemId) => {
    console.log("id??",itemId);
    const filteredItem = experienceItem.find(item => item.id === itemId);
    console.log("Filtered item:", filteredItem);
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

//   const handleDeleteClick = async (itemId) => {
//     const isConfirmed = window.confirm("Are you sure you want to delete this item?");
//     if (isConfirmed) {
//       try {
//         await candidatesApiService.DeleteexperienceForm(itemId);
//         // Update state after successful deletion
//         setexperienceItem(prevItems => prevItems.filter(item => item.id !== itemId));
//         console.log("Item deleted successfully");
//       } catch (error) {
//         console.error("Error deleting item:", error.message);
//       }
//     }
//   };
  
  return (
    <>
     
      <div className="master-table">
        <div className="flex-btns">
        <p className="candidate-table-heading">Experience</p>
        <button className="add-btn" onClick={handleOpenExperienceClick}>Add experience</button>
        </div>


        <div className="table-responsive set-programs-tabel">

          <table className="table table-responsive">
            <thead style={{ color: "rgba(0, 0, 0, 0.63)" }} className="thead">
              <tr>
                <th scope="col">Sr. No.</th>
                <th scope="col">Name of Institute / Company</th>
                <th scope="col">Designation</th>
                <th scope="col">Current Gross Pay(per month)</th>
                <th scope="col">Date From</th>
                <th scope="col">Date To</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
                
              </tr>
            </thead>
            <tbody>
              {experienceItem && experienceItem.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.company_experience_name}</td>
                  <td>{item.designation}</td>
                  <td>{item.gross_pay}</td>
                  <td>{formatDate(item.exp_work_from)}</td>
                  <td>{formatDate(item.exp_work_to)}</td>
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
                    //   onClick={() => handleDeleteClick(item.id)}
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
      {editMode && <EditCandidateExperienceForm filteredItem={filteredItem} handleClose={() => setEditMode(false)} fetchData={fetchData}/>}
      {isPopupOpen && <AddCandidateExperienceForm  handleCloseExperienceClick={() => setIsPopupOpen(false)} fetchData={fetchData}/>}
      </>
  );
};

export default ExperienceForm;
