import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { FormControl } from "@mui/material";
import close from "../../../assets/logos/close.png";
// import { ADMIN_BASE_URL } from "../../../config/config";
import { ADMIN_BASE_URL } from "../../../config/config";
import axios from "axios";
import updatebtn from "../../../assets/logos/update.png";
import deletebtn from "../../../assets/logos/delete.png";
import adminApiService from "../../adminApiService";

function AddCategories() {
  const [data, setData] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null); // New state for tracking the selected category for update
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  // ------------------GET DATA FROM API--------------------------------

  const getJobCategory = async () => {
    try {
      const response = await adminApiService.getJobCategories();
      setData(response.data);
    } catch {
      console.error("Error fetching data:");
    }
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    try {
      const response = await adminApiService.AddCategory({
        category_name: newCategory,
      });
      setData([...data, response.data]);
      setNewCategory("");
      setOpen(false);
      getJobCategory();
    } catch (error) {
      console.error("Error adding newCategory:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(error.response.data.message);
      } else {
        alert("An error occurred while adding newCategory.");
      }
    }
  };

  const handleDeleteCategory = (categoryId) => {
    if (
      window.confirm(
        "Are you sure you want to delete this category? This action cannot be undone."
      )
    ) {
      adminApiService.DeleteCategory(categoryId);
      setData((prevData) =>
        prevData.filter((category) => category.id !== categoryId)
      );
    } else {
      console.log("Category deletion canceled.");
    }
  };

  const handleUpdateCategory = async () => {
    if (!selectedCategory) return;
    const updateID = selectedCategory.id;
    try {
      const response = await adminApiService.updateCategory(updateID, {
        category_name: selectedCategory.category_name,
      });
      setData(
        data.map((category) =>
          category.id === selectedCategory.id ? response.data : category
        )
      );
      setSelectedCategory(null);
      setUpdateModalOpen(false);
      getJobCategory();
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  useEffect(() => {
    getJobCategory();
  }, []);

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
    setOpen(false);
    setNewCategory();
    setSelectedCategory();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "700",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <div className="container-1">
        <div className="new-opening-btn">
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
                  <div className="">
                    <button
                      id="set-btn"
                      type="button"
                      onClick={handleAddCategory}
                    >
                      ADD
                    </button>

                    <div className="category-publish-btn">
                      <p>Publish To Job Profile</p>
                      <label className="switch">
                        <input type="checkbox" id="checkbox" />
                        <div className="slider round"></div>
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </FormControl>
          </Box>
        </Modal>
      </div>
      {/* -------------------------update form ---------------------------------------- */}

      <div className="admin-list">
        <div className="master-table ">
          <p className="SCA-heading">CURRENT CATEGORIES AVAILABLE</p>
          <div className="table-responsive fixe-table">
            <table className="table table-responsive">
              <thead style={{ color: "rgba(0, 0, 0, 0.63)" }} className="thead">
                <tr>
                  <th scope="col">S No.</th>
                  <th scope="col">NAME</th>
                  <th scope="col">UPDATE</th>
                  <th scope="col">DELETE</th>
                </tr>
              </thead>
              <tbody>
                {data.map((category, index) => (
                  <tr key={category?.id}>
                    <td>{index + 1}</td>
                    <td>{category?.category_name}</td>
                    <td>
                      <button
                        id="table-btns"
                        onClick={() =>
                          handleSelectCategoryForUpdate(category?.id)
                        }
                      >
                        <img src={updatebtn} className="up-del-btn" alt="" />
                      </button>
                    </td>
                    <td>
                      <button
                        id="table-btns"
                        onClick={() => handleDeleteCategory(category.id)}
                      >
                        <img src={deletebtn} className="up-del-btn" alt="" />
                      </button>
                    </td>
                  </tr>
                ))}
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
                                ? selectedCategory?.category_name
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCategories;
