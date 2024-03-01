import React, { useState, useEffect } from "react";
import "./Master.css";
import axios from "axios";
import updatebtn from "../../../assets/logos/update.png";
import deletebtn from "../../../assets/logos/delete.png";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { FormControl } from "@mui/material";
import close from "../../../assets/logos/close.png";
import { ADMIN_BASE_URL } from "../../../config/config";
function AddPostApplied() {
  const [data, setData] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  // const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [open, setOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  // const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [putID, setPutId] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);

  // ------------------Fetching Data from job_category_master-id-------------------------------
  useEffect(() => {
    getJobCategory();
    getPost();
  }, []);
  function getJobCategory() {
    axios
      .get(`${ADMIN_BASE_URL}/jobCategory`)
      .then((response) => {
        console.log("category api>>", response.data);
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching job categories:", error);
      });
  }
  // ------------------GET DATA FROM API--------------------------------
  function getPost() {
    axios
      .get(`${ADMIN_BASE_URL}/appliedPost`)
      .then((response) => {
        console.log("Post api>>", response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  const handleAddPost = () => {
    console.log(selectedCategoryId, "check category");
    if (!selectedCategoryId) {
      console.error("Please select a category.");
      return;
    }

    let accessToken = localStorage.getItem("Token");
    accessToken = JSON.parse(accessToken);

    axios
      .post(
        `${ADMIN_BASE_URL}/appliedPost`,
        {
          post_name: newCategory,
          job_category_master_id: selectedCategoryId,
        },
        {
          headers: {
            "access-token": accessToken.token,
          },
        }
      )
      .then((response) => {
        setData([...data, response.data]);
        setNewCategory("");
        getJobCategory();
        getPost();
        handleCloseModal();
      })
      .catch((error) => console.error("Error adding post:", error));
  };




  // ------------------DELETE DATA FROM API--------------------------------
  const handleDeletePost = (categoryId) => {
    let accessToken = localStorage.getItem("Token");
    accessToken = JSON.parse(accessToken);

    fetch(`${ADMIN_BASE_URL}/appliedPost/${categoryId}`, {
      method: "DELETE",
      headers: {
        "access-token": accessToken.token,
      },
    })
      .then((response) => {
        if (response.ok) {
          // Remove the deleted category from the state
          setData(data.filter((category) => category.id !== categoryId));
        } else {
          console.error("Error deleting category");
        }
      })
      .catch((error) => console.error("Error deleting category:", error));
  };


  const handleUpdatePost = () => {
    let accessToken = localStorage.getItem("Token");
    accessToken = JSON.parse(accessToken);

    axios
      .put(
        `${ADMIN_BASE_URL}/appliedPost`,
        {
          appliedpost_id: putID,
          post_name: selectedPost.post_name,
          job_category_master_id: selectedCategoryId,
        },
        {
          headers: {
            "access-token": accessToken.token,
          },
        }
      )
      .then((response) => {
        setData(data.map(post => post.id === selectedCategoryId ? response.data : post));
        setSelectedCategory("");
        setSelectedCategoryId("");
        getPost();
        setUpdateModalOpen(false);
      })
      .catch((error) => console.error("Error updating post:", error));
  };


  const handleSelectCategory = (e) => {
    const categoryId = e.target.value;
    const selectedCategoryObj = categories.find(
      (category) => category.id === categoryId
    );

    setSelectedCategoryId(categoryId);
    setSelectedCategory(selectedCategoryObj);
  };

  const handlePutSelectCategory = (e) => {
    const categoryId = e.target.value;

    console.log("Categories:", categories);
    console.log("Selected Category ID:", categoryId);


    const selectedCategoryObj = categories.find(
      (category) => category.id === categoryId
    );

    console.log("Selected Category Object:", selectedCategoryObj);


    setSelectedCategoryId(categoryId);
    setSelectedCategory(categoryId);
    setSelectedPost("");
  };






  const handleSelectPostForUpdate = (categoryId) => {
    const selectedPost = data.find((post) => post.id === categoryId);
    setSelectedCategoryId(categoryId);
    setSelectedCategory(selectedPost);
    setPutId(categoryId);

    setUpdateModalOpen(true);
  };
  const handleCloseUpdateModal = () => {
    setUpdateModalOpen(false);
  };






  // ------------------UPDATE DATA IN API--------------------------------

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCloseModal = () => {
    setOpen(false);
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
        <div>
          <button onClick={() => setOpen(true)}>Add Post Applied</button>
        </div>
        <Modal
          open={open}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <FormControl>
              <div>
                <form>
                  <img
                    onClick={handleCloseModal}
                    className="update-close-btn"
                    src={close}
                  />
                  <div>
                    <label className="AC-SetLabel-Name">Select Category</label>
                    <select
                      name="category"
                      className="select-jc"
                      value={selectedCategoryId}
                      onChange={handleSelectCategory}
                    >
                      <option value="">Select Category</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.category_name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <label
                    style={{ marginTop: "20px" }}
                    className="AC-SetLabel-Name"
                    htmlFor="categoryInput"
                  >
                    Add Post Applied For
                  </label>
                  <input
                    type="text"
                    className="Ac-set-input"
                    id="categoryInput"
                    placeholder="Add Post"
                    value={
                      selectedCategory
                        ? selectedCategory.post_name
                        : newCategory
                    }
                    onChange={(e) => {
                      const newValue = e.target.value;
                      if (selectedCategory) {
                        setSelectedCategory((prev) => ({
                          ...prev,
                          post_name: newValue,
                        }));
                      } else {
                        setNewCategory(newValue);
                      }
                    }}
                  />

                  <button id="set-btn" type="button" onClick={handleAddPost}>
                    ADD NOW
                  </button>
                </form>
              </div>
            </FormControl>
          </Box>
        </Modal>

      </div>

      <div className="master-table ">
        <p className="table-heading">CURRENT APPLIED POST AVAILABLE</p>
        <div className="">
          <table className="table table-responsive">
            <thead style={{ color: "rgba(0, 0, 0, 0.63)" }}>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">POST</th>
                <th scope="col">CATEGORY</th>
                <th scope="col">UPDATE</th>
                <th scope="col">DELETE</th>
              </tr>
            </thead>
            <tbody>
              {data.map((category, index) => (
                <tr key={category.id}>
                  <td>{index + 1}</td>
                  <td>{category.post_name}</td>
                  <td>{category.job_category_master.category_name}</td>
                  <td>
                    <button
                      id="table-btns"
                      onClick={() => handleSelectPostForUpdate(category.id)}
                    >
                      <img src={updatebtn} className="up-del-btn" alt="" />
                    </button>
                    <Modal
                      open={updateModalOpen}
                      onClose={handleCloseUpdateModal}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <form>
                          <img
                            onClick={handleCloseUpdateModal}
                            className="postapplied-close-btn"
                            src={close}
                          />
                          <div>
                            <label>Select Category</label>
                            <select
                              name="category"
                              className="select-jc"
                              value={selectedCategory ? selectedCategory.category_name : ""}
                              onChange={handlePutSelectCategory}
                            >
                              <option value="">Select Category</option>
                              {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                  {category.category_name}
                                </option>
                              ))}
                            </select>

                          </div>

                          <label htmlFor="categoryInput">
                            Add Post Applied For
                          </label>

                          <input
                            type="text"
                            className="select-jc"
                            id="categoryInput"
                            placeholder="Add Post"
                            value={selectedPost ? selectedPost.post_name : ""}
                            onChange={(e) => {
                              const newValue = e.target.value;
                              setSelectedPost((prev) => ({
                                ...prev,
                                post_name: newValue,
                              }));
                            }}
                          />

                          <button
                            id="set-btn"
                            type="button"
                            onClick={handleUpdatePost}
                          >
                            UPDATE NOW
                          </button>
                        </form>
                      </Box>
                    </Modal>
                  </td>
                  <td>
                    <button
                      id="table-btns"
                      onClick={() => handleDeletePost(category.id)}
                    >
                      <img src={deletebtn} className="up-del-btn" alt="" />
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

export default AddPostApplied;
