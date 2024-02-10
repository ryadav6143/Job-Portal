import React, { useState, useEffect } from "react";
import "./Master.css";
import axios from "axios";
import updatebtn from "../../../assets/logos/update.png";
import deletebtn from "../../../assets/logos/delete.png";
import { BASE_URL } from "../../../config/config";
function AddPostApplied() {
  const [data, setData] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  // ------------------Fetching Data from job_category_master-id-------------------------------
  useEffect(() => {
    addPostApplied();
  }, []);
  function addPostApplied() {
    fetch(`${BASE_URL}/jobCategory`)
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching job categories:", error));
  }
  // ------------------GET DATA FROM API--------------------------------
  function getPost() {
    fetch(`${BASE_URL}/appliedPost`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }
  useEffect(() => {
    getPost();
  }, []);
  // ------------------GET DATA FROM API--------------------------------

  // ------------------POST DATA TO API--------------------------------
  const handleAddPost = () => {
    console.log(selectedCategoryId, "check category");
    if (!selectedCategoryId) {
      console.error("Please select a category.");
      return;
    }

    axios
      .post(
        `${BASE_URL}/appliedPost`,
        {
          post_name: newCategory,
          job_category_master_id: selectedCategoryId,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setData([...data, response.data]);
        setNewCategory("");
      })
      .catch((error) => console.error("Error adding post:", error));
  };

  // ------------------POST DATA TO API--------------------------------

  // ------------------DELETE DATA FROM API--------------------------------
  const handleDeletePost = (categoryId) => {
    fetch(`${BASE_URL}/appliedPost/${categoryId}`, {
      method: "DELETE",
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
  // ------------------DELETE DATA FROM API--------------------------------

  // ------------------UPDATE DATA IN API--------------------------------

  // const handleUpdatePost = () => {
  //   if (!selectedCategory) return;

  //   fetch(`${BASE_URL}/appliedPost/${selectedCategory.id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ post_name: selectedCategory.post_name }),
  //   })
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       // Update the state with the updated data
  //       setData(
  //         data.map((category) =>
  //           category.id === selectedCategory.id ? responseData : category
  //         )
  //       );
  //       // Reset the selected category
  //       setSelectedCategory(null);
  //     })
  //     .catch((error) => console.error("Error updating category:", error));
  // };
  const handleUpdatePost = () => {
    if (!selectedCategory || !selectedCategoryId) return;

    axios
      .put(
        `${BASE_URL}/appliedPost/${selectedCategoryId}`,
        {
          post_name: selectedCategory.post_name,
          job_category_master_id: selectedCategory.job_category_master_id,
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
          data.map((post) =>
            post.id === selectedCategoryId ? response.data : post
          )
        );
        // Reset the selected category
        setSelectedCategory(null);
        setSelectedCategoryId(null);
      })
      .catch((error) => console.error("Error updating post:", error));
  };

  const handleSelectCategory = (e) => {
    const selectedCategoryId = e.target.value;
    const selectedCategoryObj = categories.find(
      (category) => category.id === selectedCategoryId
    );

    setSelectedCategoryId(selectedCategoryId);
    setSelectedCategory(selectedCategoryObj);
  };

  const handleSelectPostForUpdate = (categoryId) => {
    const selectedPost = data.find((post) => post.id === categoryId);
    setSelectedCategoryId(categoryId); // Set the selected category ID
    setSelectedCategory(selectedPost); // Set the selected category object
  };

  // ------------------UPDATE DATA IN API--------------------------------

  return (
    <>
      <div className="container-1">
        <form>
          <div>
            <label>Select Category</label>
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

          <label htmlFor="categoryInput">Add Post Applied For</label>
          <input
            type="text"
            id="categoryInput"
            placeholder="Add Post"
            value={selectedCategory ? selectedCategory.post_name : newCategory}
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
          {selectedCategory ? (
            <button type="button" onClick={handleUpdatePost}>
              UPDATE NOW
            </button>
          ) : (
            <button type="button" onClick={handleAddPost}>
              ADD NOW
            </button>
          )}
        </form>
      </div>

      <div className="master-table ">
        <p className="table-heading">CURRENT APPLIED POST AVAILABLE</p>
        <div className="">
          <table className="table table-responsive">
            <thead style={{ color: "rgba(0, 0, 0, 0.63)" }}>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">POST</th>
                <th scope="col">UPDATE</th>
                <th scope="col">DELETE</th>
              </tr>
            </thead>
            <tbody>
              {data.map((category) => (
                <tr key={category.id}>
                  <td>{category.id}</td>
                  <td>{category.post_name}</td>
                  <td>
                    <button
                      id="table-btns"
                      onClick={() => handleSelectPostForUpdate(category.id)}
                    >
                      <img src={updatebtn} className="up-del-btn" alt="" />
                    </button>
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
