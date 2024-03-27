import React, { useEffect, useState } from "react";
import candidatesApiService from "../../../../candidateService";
import updatebtn from "../../../../../assets/logos/update.png";
import deletebtn from "../../../../../assets/logos/delete.png";
import AddCandidateJournalForm from "./AddCandidateJournalForm";
import EditCandidateJournalForm from "./EditCandidateJournalForm";

const JournalPublicationForm = () => {
  const [journalItem, setJournalItem] = useState([]);
  const [filteredItem, setFilteredItem] = useState(null);
  const [editItemId, setEditItemId] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const fetchData = async () => {
    try {
      const fetchedData = await candidatesApiService.getCandidateJournalPublications();
      console.log("Journal", fetchedData);
      setJournalItem(fetchedData);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCloseJournalClick = () => {
    setIsPopupOpen(true);
  };
  const handleOpenJournalClick = () => {
    setIsPopupOpen(true);
  };

  const handleEditClick = (itemId) => {
    console.log("id??", itemId);
    const filteredItem = journalItem.find((item) => item.id === itemId);
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
        await candidatesApiService.removeCandidateJournalPublications(itemId);
        // Update state after successful deletion
        setJournalItem((prevItems) =>
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
        <button onClick={handleOpenJournalClick}>Add Journal Publication</button>
      </div> */}

      <div className="master-table">
        <div className="flex-btns">
          <p className="candidate-table-heading">Journal Publications</p>
          <button className="add-btn" onClick={handleOpenJournalClick}>
            Add Journal Publication
          </button>
        </div>

        <div className="table-responsive set-programs-tabel">
          <table className="table table-responsive">
            <thead style={{ color: "rgba(0, 0, 0, 0.63)" }} className="thead">
              <tr>
                <th scope="col">Sr. No.</th>
                <th scope="col">Year</th>
                <th scope="col">Title</th>
                <th scope="col">Author Role/ Inventor</th>
                <th scope="col">Indexing</th>
                <th scope="col">Journal Name</th>
                <th scope="col">ISSN</th>
                <th scope="col">Volume</th>
                <th scope="col">Issue</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {journalItem &&
                journalItem.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.journal_publication_year}</td>
                    <td>{item.journal_publication_title}</td>
                    <td>{item.journal_publication_author}</td>
                    <td>{item.journal_publication_index}</td>
                    <td>{item.journal_publication_name}</td>
                    <td>{item.journal_publication_issn}</td>
                    <td>{item.journal_publication_volume}</td>
                    <td>{item.journal_publication_issue}</td>

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
                      <button type="button" id="table-btns"
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
      {editMode && (
        <EditCandidateJournalForm
          filteredItem={filteredItem}
          handleClose={() => setEditMode(false)}
          fetchData={fetchData}
        />
      )}
      {isPopupOpen && (
        <AddCandidateJournalForm
          handleCloseJournalClick={() => setIsPopupOpen(false)}
          fetchData={fetchData}
        />
      )}
    </>
  );
};

export default JournalPublicationForm;
