import React, { useEffect, useState } from 'react';
import candidatesApiService from '../../../../candidateService';
import updatebtn  from "../../../../../assets/logos/update.png"
import deletebtn from "../../../../../assets/logos/delete.png"
import AddCandidateResearchForm from './AddCandidateResearchForm';
import EditCandidateResearchForm from './EditCandidateResearchForm';

const ResearchForm = () => {

  const [researchItem, setResearchItem] = useState([])
  const [filteredItem, setFilteredItem] = useState(null);
  const [editItemId, setEditItemId] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const fetchData = async () => {
    try {      
      const fetchedData = await candidatesApiService.getCandidateResearch();
      console.log("research", fetchedData);
      setResearchItem(fetchedData);
      
    } catch (error) {
      console.error("Error fetching data:", error.message);
      
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCloseResearchClick = () => {
    setIsPopupOpen(true); 
  };
  const handleOpenResearchClick = () => {
    setIsPopupOpen(true);
  };


  const handleEditClick = (itemId) => {
    console.log("id??",itemId);
    const filteredItem = researchItem.find(item => item.id === itemId);
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
        await candidatesApiService.DeleteResearchForm(itemId);
        // Update state after successful deletion
        setResearchItem((prevItems) =>
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
        <button onClick={handleOpenResearchClick}>Add Research</button>
      </div> */}

    
      <div className="master-table">
        <div className="flex-btns">
        <p className="candidate-table-heading">Research Work</p>
        <button className="add-btn" onClick={handleOpenResearchClick}>Add Research</button>
        </div>
        

        <div className="table-responsive set-programs-tabel">

          <table className="table table-responsive">
            <thead style={{ color: "rgba(0, 0, 0, 0.63)" }} className="thead">
              <tr>
                <th scope="col">Sr. No.</th>
                <th scope="col">ORCID Id</th>
                <th scope="col">Scopus Id</th>
                <th scope="col">Research Id</th> 
                <th scope="col">Edit</th> 
                <th scope="col">Delete</th> 
                                               
              </tr>
            </thead>
            <tbody>
              {researchItem && researchItem.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.orcid}</td>
                  <td>{item.scopusid}</td>
                  <td>{item.researchid}</td>
                 
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
      {editMode && <EditCandidateResearchForm filteredItem={filteredItem} handleClose={() => setEditMode(false)} />}
      {isPopupOpen && <AddCandidateResearchForm  handleCloseResearchClick={() => setIsPopupOpen(false)} />}
      </>
  );
};

export default ResearchForm;
