import React, { useState, useEffect } from "react";
import axios from "axios";

function AddSubPostApplied() {
  const [data, setData] = useState([]);
  const [postData, setPostData] = useState([]);
  const [selectedPost, setSelectedPost] = useState("");
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [newPost, setNewPost] = useState("");
  // -----------------------------Fetching data from applied_subpost------------------------------
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://192.168.1.8:8090/v1/api/appliedSubPost")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  // -----------------------------Fetching data from applied_subpost------------------------------
  // -----------------------------Fetching data from applied_post------------------------------
  useEffect(() => {
    fetchAppliedPost();
  }, []);

  const fetchAppliedPost = () => {
    axios
      .get("http://192.168.1.8:8090/v1/api/appliedPost")
      .then((response) => {
        setPostData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleSelectPost = (e) => {
    const selectedPostId = e.target.value;
    const selectedPostObj = postData.find((post) => post.id === selectedPostId);
    setSelectedPostId(selectedPostId);
    setSelectedPost(selectedPostObj);
  };

  const handleAddSubPost = () => {
    console.log( "check category->",selectedPostId);
    console.log("typed data->",newPost );
    if (!selectedPostId) {
      console.error("Please select a category.");
      return;
    }

    axios.post("http://192.168.1.8:8090/v1/api/appliedSubPost", {
      applied_post_masters_id: Number(selectedPostId), // Convert to number
      subpost_name: newPost,
    }, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    
      .then((response) => {
        console.log("API Response:", response.data);
        setData([...data, response.data]);
        setNewPost("");
      })
      .catch((error) => console.error("Error adding post:", error));
  };

  // -----------------------------Fetching data from applied_post------------------------------

  return (
    <>
      <div className="container-1">
        <form action="">
          <label htmlFor="postSelect">Select Post:</label>
          <select
            id="postSelect"
            value={selectedPostId}
            className="select-jc"
            onChange={(e) => handleSelectPost(e)} // Pass the event object directly
          >
            <option value="">Select Post</option>
            {postData.map((post) => (
              <option key={post.id} value={post.id}>
                {post.post_name}
              </option>
            ))}
          </select>

          <label htmlFor="">Add Sub Post Applied For</label>
          {/* <input type="text" placeholder="Sub Post Applied For" /> */}
          <input
            type="text"
            id=""
            placeholder="Sub Post Applied For"
            value={selectedPost ? selectedPost.post_name : newPost}
            onChange={(e) => {
              const newValue = e.target.value;
              if (selectedPost) {
                setSelectedPost((prev) => ({
                  ...prev,
                  subpost_name: newValue,
                }));
              } else {
                setNewPost(newValue);
              }
            }}
          />
        </form>
        <button type="button" onClick={handleAddSubPost}>
          {" "}
          ADD NOW
        </button>
      </div>

      <div className="master-table ">
        <p className="table-heading">CURRENT APPLIED SUB POST AVAILABLE</p>
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
              {data.map((subPost, index) => (
                <tr key={subPost.id}>
                  <td>{index + 1}</td>
                  <td>{subPost.subpost_name}</td>
                  <td>
                    <button id="update-btn">UPDATE</button>
                  </td>
                  <td>
                    <button id="delete-btn">DELETE</button>
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

export default AddSubPostApplied;
