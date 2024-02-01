import React, { useState, useEffect } from "react";
import "./Master.css";
import axios from "axios";
function AddPostApplied() {
  const [data, setData] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  // ------------------Fetching Data from job_category_master-id-------------------------------
  useEffect(() => {
    addPostApplied();
  }, []);
  function addPostApplied() {
    fetch("http://192.168.1.8:8090/v1/api/jobCategory")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching job categories:", error));
  }
  // ------------------GET DATA FROM API--------------------------------
  function getPost() {
    fetch("http://192.168.1.8:8090/v1/api/appliedPost")
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
    console.log(selectedCategoryId,"check category");
    if (!selectedCategoryId) {
      console.error("Please select a category.");
      return;
    }
  
    axios.post("http://192.168.1.8:8090/v1/api/appliedPost", {
      post_name: newCategory,
      job_category_master_id: selectedCategoryId,
    }, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setData([...data, response.data]);
        setNewCategory("");
      })
      .catch((error) => console.error("Error adding post:", error));
  };
  
  
  // ------------------POST DATA TO API--------------------------------

  // ------------------DELETE DATA FROM API--------------------------------
  const handleDeletePost = (categoryId) => {
    fetch(`http://192.168.1.8:8090/v1/api/appliedPost/${categoryId}`, {
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

  const handleUpdatePost = () => {
    if (!selectedCategory) return;

    fetch(`http://192.168.1.8:8090/v1/api/appliedPost/${selectedCategory.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post_name: selectedCategory.post_name }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        // Update the state with the updated data
        setData(
          data.map((category) =>
            category.id === selectedCategory.id ? responseData : category
          )
        );
        // Reset the selected category
        setSelectedCategory(null);
      })
      .catch((error) => console.error("Error updating category:", error));
  };

  // const handleSelectCategory = (e) => {
  //   const selectedCategoryId = e.target.value;
  //   const selectedCategoryObj = categories.find(
  //     (category) => category.id === selectedCategoryId
  //   );

  //   setSelectedCategoryId(selectedCategoryId);
  //   setSelectedCategory(selectedCategoryObj);
  // };

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
    setSelectedCategory(selectedPost);
    setSelectedCategoryId(categoryId);
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
                <th scope="col">NAME</th>
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
                      id="update-btn"
                      onClick={() => handleSelectPostForUpdate(category.id)}
                    >
                      UPDATE
                    </button>
                  </td>
                  <td>
                    <button
                      id="delete-btn"
                      onClick={() => handleDeletePost(category.id)}
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

export default AddPostApplied;
