import React, { useEffect, useState } from 'react';
import candidatesApiService from '../../../../candidateService';
import updatebtn  from "../../../../../assets/logos/update.png"
import deletebtn from "../../../../../assets/logos/delete.png";
import AddCandidateConfrenceForm from './AddCandidateConfrenceForm';
import EditConfrencePublicationForm from './EditConfrencePublicationForm';

const ConfrencePublicationForm = () => {

  const [confrenceItem, setConfrenceItem] = useState([])
  const [filteredItem, setFilteredItem] = useState(null);
  const [editItemId, setEditItemId] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const fetchData = async () => {
    try {      
      const fetchedData = await candidatesApiService.getCandidateResearchWork();
      console.log("Confrence", fetchedData.candidate_conference_publications);
      setConfrenceItem(fetchedData.candidate_conference_publications);
      
    } catch (error) {
      console.error("Error fetching data:", error.message);
      
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCloseConfrenceClick = () => {
    setIsPopupOpen(true); 
  };
  const handleOpenConfrenceClick = () => {
    setIsPopupOpen(true);
  };


  const handleEditClick = (itemId) => {
    console.log("id??",itemId);
    const filteredItem = confrenceItem.find(item => item.id === itemId);
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
        <button onClick={handleOpenConfrenceClick}>Add Confrence Publication</button>
      </div>
      <div className="master-table">
        <p className="SCA-heading">Confrence Publications</p>

        <div className="table-responsive fixe-table">

          <table className="table table-responsive">
            <thead style={{ color: "rgba(0, 0, 0, 0.63)" }} className="thead">
              <tr>
                <th scope="col">Sr. No.</th>
                <th scope="col">Year</th>
                <th scope="col">Title</th>
                <th scope="col">Author Role/ Inventor</th> 
                <th scope="col">Indexing</th> 
                <th scope="col">Confrence Name</th> 
                <th scope="col">ISSN</th> 
                <th scope="col">Volume</th> 
                <th scope="col">Issue</th> 
                <th scope="col">Edit</th> 
                <th scope="col">Delete</th> 
                                               
              </tr>
            </thead>
            <tbody>
              {confrenceItem && confrenceItem.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.conference_publication_year || "-"}</td>
                  <td>{item.conference_publication_title || "-"}</td>
                  <td>{item.conference_publication_author || "-"}</td>
                  <td>{item.conference_publication_index || "-"}</td>
                  <td>{item.conference_publication_name || "-"}</td>
                  <td>{item.conference_publication_issn || "-"}</td>
                  <td>{item.conference_publication_volume || "-"}</td>
                  <td>{item.conference_publication_issue || "-"}</td>
                 
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
      {editMode && <EditConfrencePublicationForm filteredItem={filteredItem} handleClose={() => setEditMode(false)} />}
      {isPopupOpen && <AddCandidateConfrenceForm  handleCloseConfrenceClick={() => setIsPopupOpen(false)} />}
      </>
  );
};

export default ConfrencePublicationForm;
