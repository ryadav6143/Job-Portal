import React, { useEffect, useState } from 'react';
import candidatesApiService from '../../../../candidateService';
import updatebtn  from "../../../../../assets/logos/update.png"
import deletebtn from "../../../../../assets/logos/delete.png";
import AddCandidateCopyrights from './AddCandidateCopyrights';
import EditCandidateCopyrights from './EditCandidateCopyrights';


const CopyRightsForm = () => {

  const [copyrightsItem, setcopyrightsItem] = useState([])
  const [filteredItem, setFilteredItem] = useState(null);
  const [editItemId, setEditItemId] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const fetchData = async () => {
    try {      
      const fetchedData = await candidatesApiService.getCandidateResearchWork();
      console.log("copyrights", fetchedData.candidate_copyrights);
      setcopyrightsItem(fetchedData.candidate_copyrights);
      
    } catch (error) {
      console.error("Error fetching data:", error.message);
      
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClosecopyrightsClick = () => {
    setIsPopupOpen(true); 
  };
  const handleOpencopyrightsClick = () => {
    setIsPopupOpen(true);
  };


  const handleEditClick = (itemId) => {
    console.log("id??",itemId);
    const filteredItem = copyrightsItem.find(item => item.id === itemId);
    console.log("Filtered item:", filteredItem);
    setFilteredItem(filteredItem);
    setEditItemId(itemId);
    setEditMode(true);
  };
  const handleClose = () => {    
    setEditMode(false);
    
  };

  return (
    <>
      <div className="new-opening-btn">
        <button onClick={handleOpencopyrightsClick}>Add Copyrights</button>
      </div>
      <div className="master-table">
        <p className="SCA-heading">Copyrights</p>

        <div className="table-responsive fixe-table">

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
              {copyrightsItem && copyrightsItem.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.copyright_applicationid || "-"}</td>
                  <td>{item.copyright_title || "-"}</td>
                  <td>{item.copyright_year || "-"}</td>                
                  <td>{item.copyright_granted_by || "-"}</td>
                  <td>{item.copyright_incountry || "-"}</td>            
                 
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
      {editMode && <EditCandidateCopyrights filteredItem={filteredItem} handleClose={() => setEditMode(false)} />}
      {isPopupOpen && <AddCandidateCopyrights  handleClosecopyrightsClick={() => setIsPopupOpen(false)} />}
      </>
  );
};

export default CopyRightsForm;
