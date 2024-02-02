import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { FormControl } from "@mui/material";
import close from "../../../assets/logos/close.png";
import axios from "axios";

function AddCategories() {
  const BASE_URL = "http://192.168.1.8:8090/v1/api";
  const [data, setData] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null); // New state for tracking the selected category for update
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  // ------------------GET DATA FROM API--------------------------------

  const getJobCategory = () => {
    axios
      .get(`${BASE_URL}/jobCategory`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getJobCategory();
  }, []);
  // ------------------GET DATA FROM API--------------------------------

  // ------------------POST DATA TO API--------------------------------
  const handleAddCategory = () => {
    // Send a POST request to the API to add a new category

    axios
      .post(
        `${BASE_URL}/jobCategory`,
        {
          category_name: newCategory,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        // Update the state with the new data
        setData([...data, response.data]);
        // Clear the input field after successful submission
        setNewCategory("");
      })
      .catch((error) => {
        setNewCategory("");
        console.error("Error adding category:", error);
      });
  };

  // ------------------POST DATA TO API--------------------------------

  // ------------------DELETE DATA FROM API--------------------------------
  const handleDeleteCategory = (categoryId) => {
    axios
      .delete(`${BASE_URL}/jobCategory/${categoryId}`)
      .then((response) => {
        if (response.status === 200) {
          // Remove the deleted category from the state
          setData(data.filter((category) => category.id !== categoryId));
        } else {
          console.error("Error deleting category");
        }
      })
      .catch((error) => console.error("Error deleting category:", error));
  };
  // ------------------DELETE DATA FROM API--------------------------------

  // ------------------UPDATE DATA IN API--------------------------------
  const handleUpdateCategory = () => {
    if (!selectedCategory) return;

    axios
      .put(
        `${BASE_URL}/jobCategory/${selectedCategory.id}`,
        {
          category_name: selectedCategory.category_name,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        // Update the state with the updated data
        setData(
          data.map((category) =>
            category.id === selectedCategory.id ? response.data : category
          )
        );
        // Reset the selected category
        setSelectedCategory(null);
        setUpdateModalOpen(false);
      })
      .catch((error) => console.error("Error updating category:", error));
  };

  const handleSelectCategoryForUpdate = (categoryId) => {
    const selectedCategory = data.find(
      (category) => category.id === categoryId
    );
    setSelectedCategory(selectedCategory);

    setUpdateModalOpen(true);
  };

 
  // ------------------UPDATE DATA IN API--------------------------------

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleCloseUpdateModal = () => {
    setUpdateModalOpen(false);
    setNewCategory();
    setSelectedCategory();
  };


  
  const handleXButtonClick = () => {
    if (updateModalOpen) {
      setUpdateModalOpen(false);
    } else {
      setOpen(false);
    }
    // Close the modal when'x' button is clicked
    
    setOpen(false);
    setNewCategory();
    setSelectedCategory();
  };


  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "500",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <div className="container-1">
        <div>
          <button onClick={handleOpen}>Add Categories</button>
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <FormControl>
              <div>
                <form>
                  <img
                    onClick={handleXButtonClick}
                    className="Ac-close-btn"
                    src={close}
                  />
                  <label className="AC-SetLabel-Name" htmlFor="categoryInput">
                    Add Job Category
                  </label>

                  <input
                    className="Ac-set-input"
                    type="text"
                    id="categoryInput"
                    placeholder="Add Categories"
                    value={
                      selectedCategory
                        ? selectedCategory.category_name
                        : newCategory
                    }
                    onChange={(e) => {
                      if (selectedCategory) {
                        setSelectedCategory({
                          ...selectedCategory,
                          category_name: e.target.value,
                        });
                      } else {
                        setNewCategory(e.target.value);
                      }
                    }}
                  />
                  <button
                    id="set-btn"
                    type="button"
                    onClick={handleAddCategory}
                  >
                    ADD
                  </button>
                </form>
              </div>
            </FormControl>
          </Box>
        </Modal>
      </div>
      {/* -------------------------update form ---------------------------------------- */}
      <div className="master-table ">
        <p className="table-heading">CURRENT CATEGORIES AVAILABLE</p>
        <div className="">
          <table className="table table-responsive">
            <thead style={{ color: "rgba(0, 0, 0, 0.63)" }}>
              <tr>
                <th scope="col">S No.</th>
                <th scope="col">NAME</th>
                <th scope="col">UPDATE</th>
                <th scope="col">DELETE</th>
              </tr>
            </thead>
            <tbody>
              {data.map((category, index) => (
                <tr key={category.id}>
                  <td>{index + 1}</td>
                  <td>{category.category_name}</td>
                  <td>
                    <button
                      id="update-btn"
                      onClick={() => handleSelectCategoryForUpdate(category.id)}
                    >
                      UPDATE
                    </button>
                    <Modal
                      open={updateModalOpen}
                      onClose={handleCloseUpdateModal}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <FormControl>
                          <div>
                            <form>
                              <img
                                onClick={handleXButtonClick}
                                className="update-close-btn"
                                src={close}
                              />
                              <label
                                className="AC-SetLabel-Name"
                                htmlFor="categoryInput"
                              >
                                Update Job Category
                              </label>

                              <input
                                className="Ac-set-input"
                                type="text"
                                id="categoryInput"
                                placeholder="Update Category"
                                value={
                                  selectedCategory
                                    ? selectedCategory.category_name
                                    : ""
                                }
                                onChange={(e) =>
                                  setSelectedCategory({
                                    ...selectedCategory,
                                    category_name: e.target.value,
                                  })
                                }
                              />
                              <button
                                id="set-btn"
                                type="button"
                                onClick={handleUpdateCategory}
                              >
                                UPDATE NOW
                              </button>
                            </form>
                          </div>
                        </FormControl>
                      </Box>
                    </Modal>
                  </td>
                  <td>
                    <button
                      id="delete-btn"
                      onClick={() => handleDeleteCategory(category.id)}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AddCategories;
