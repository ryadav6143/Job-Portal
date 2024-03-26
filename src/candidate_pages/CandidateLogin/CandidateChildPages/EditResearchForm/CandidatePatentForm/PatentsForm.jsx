import React, { useEffect, useState } from 'react';
import candidatesApiService from '../../../../candidateService';
import updatebtn  from "../../../../../assets/logos/update.png"
import deletebtn from "../../../../../assets/logos/delete.png";
import AddCandidatePatentsForm from './AddCandidatePatentsForm';
import EditCandidatePatentsForm from './EditCandidatePatentsForm';


const PatentsForm = () => {

  const [patentItem, setPatentItem] = useState([])
  const [filteredItem, setFilteredItem] = useState(null);
  const [editItemId, setEditItemId] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const fetchData = async () => {
    try {      
      const fetchedData = await candidatesApiService.getCandidatePatent();
      console.log("patent", fetchedData);
      setPatentItem(fetchedData);
      
    } catch (error) {
      console.error("Error fetching data:", error.message);
      
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClosePatentClick = () => {
    setIsPopupOpen(true); 
  };
  const handleOpenpatentClick = () => {
    setIsPopupOpen(true);
  };


  const handleEditClick = (itemId) => {
    console.log("id??",itemId);
    const filteredItem = patentItem.find(item => item.id === itemId);
    console.log("Filtered item:", filteredItem);
    setFilteredItem(filteredItem);
    setEditItemId(itemId);
    setEditMode(true);
  };
  const handleClose = () => {    
    setEditMode(false);
    
  };
  const handleDeleteClick = async (itemId) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (isConfirmed) {
      try {
        await candidatesApiService.removeCandidatePatent(itemId);
        // Update state after successful deletion
        setPatentItem((prevItems) =>
          prevItems.filter((item) => item.id !== itemId)
        );
        console.log("Item deleted successfully");
      } catch (error) {
        console.error("Error deleting item:", error.message);
      }
    }
  };
  return (
    <>
      {/* <div className="new-opening-btn">
        <button onClick={handleOpenpatentClick}>Add Patents</button>
      </div> */}

      <div className="master-table">
        <div className="flex-btns">
        <p className="candidate-table-heading">Patents</p>
        <button className="add-btn" onClick={handleOpenpatentClick}>Add Patents</button>
        </div>
    

        <div className="table-responsive set-programs-tabel">

          <table className="table table-responsive">
            <thead style={{ color: "rgba(0, 0, 0, 0.63)" }} className="thead">
              <tr>
                <th scope="col">Sr. No.</th>
                <th scope="col">Application ID</th>
                <th scope="col">Title</th>
                <th scope="col">Year</th> 
                <th scope="col">Published/Granted</th> 
                <th scope="col">Country</th>                
                <th scope="col">Edit</th> 
                <th scope="col">Delete</th> 
                                               
              </tr>
            </thead>
            <tbody>
              {patentItem && patentItem.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.patent_applicationid || "-"}</td>
                  <td>{item.patent_application_title || "-"}</td>
                  <td>{item.patent_application_year || "-"}</td>                
                  <td>{item.patent_granted_by || "-"}</td>
                  <td>{item.patent_incountry || "-"}</td>            
                 
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
      {editMode && <EditCandidatePatentsForm filteredItem={filteredItem} handleClose={() => setEditMode(false)} />}
      {isPopupOpen && <AddCandidatePatentsForm  handleClosePatentClick={() => setIsPopupOpen(false)} />}
      </>
  );
};

export default PatentsForm;
