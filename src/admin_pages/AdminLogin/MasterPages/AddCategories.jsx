import React, { useState, useEffect } from "react";

function AddCategories() {
  const [data, setData] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null); // New state for tracking the selected category for update
  // ------------------GET DATA FROM API--------------------------------

  function getjobcategory() {
    fetch("http://192.168.1.8:8090/v1/api/jobCategory")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }
  useEffect(() => {
    getjobcategory();
  }, [data]);
  // ------------------GET DATA FROM API--------------------------------

  // ------------------POST DATA TO API--------------------------------
  const handleAddCategory = () => {
    // Send a POST request to the API to add a new category
    fetch("http://192.168.1.8:8090/v1/api/jobCategory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ category_name: newCategory }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        // Update the state with the new data
        setData([...data, responseData]);
        // Clear the input field after successful submission
        setNewCategory("");
      })
      .catch((error) => console.error("Error adding category:", error));
  };
  // ------------------POST DATA TO API--------------------------------

  // ------------------DELETE DATA FROM API--------------------------------
  const handleDeleteCategory = (categoryId) => {
    fetch(`http://192.168.1.8:8090/v1/api/jobCategory/${categoryId}`, {
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
  // const handleUpdateCategory = (categoryId) => {

  //   fetch(`http://192.168.1.8:8090/v1/api/jobCategory/${categoryId}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ category_name: updatedCategoryName }),
  //   })
  //     .then((response) => response.json())
  //     .then((responseData) => {

  //       setData(
  //         data.map((category) =>
  //           category.id === categoryId ? responseData : category
  //         )
  //       );

  //       setUpdatingCategoryId(null);
  //       setUpdatedCategoryName("");
  //     })
  //     .catch((error) => console.error("Error updating category:", error));
  // };

  const handleUpdateCategory = () => {
    if (!selectedCategory) return;

    fetch(`http://192.168.1.8:8090/v1/api/jobCategory/${selectedCategory.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ category_name: selectedCategory.category_name }),
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

  const handleSelectCategoryForUpdate = (categoryId) => {
    const selectedCategory = data.find(
      (category) => category.id === categoryId
    );
    setSelectedCategory(selectedCategory);
  };
  // ------------------UPDATE DATA IN API--------------------------------

  return (
    <>
      <div className="container-1">
        <form>
          <label htmlFor="categoryInput">Add Category of Appointment</label>
          <input
            type="text"
            id="categoryInput"
            placeholder="Add Categories"
            value={
              selectedCategory ? selectedCategory.category_name : newCategory
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
          {selectedCategory ? (
            <button type="button" onClick={handleUpdateCategory}>
              UPDATE NOW
            </button>
          ) : (
            <button type="button" onClick={handleAddCategory}>
              ADD NOW
            </button>
          )}
        </form>
      </div>

      <div className="master-table ">
        <p className="table-heading">CURRENT CATEGORIES AVAILABLE</p>
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
                  <td>{category.category_name}</td>
                  <td>
                    <button
                      id="update-btn"
                      onClick={() => handleSelectCategoryForUpdate(category.id)}
                    >
                      UPDATE
                    </button>
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
