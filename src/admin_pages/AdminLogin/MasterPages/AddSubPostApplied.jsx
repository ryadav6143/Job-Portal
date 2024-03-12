import React, { useState, useEffect } from "react";
import axios from "axios";
import updatebtn from "../../../assets/logos/update.png";
import deletebtn from "../../../assets/logos/delete.png";
// import { BASE_URL } from "../../../config/config";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { FormControl } from "@mui/material";
import close from "../../../assets/logos/close.png";
// import { ADMIN_BASE_URL } from "../../../config/config";
import { ADMIN_BASE_URL } from "../../../config/config";
function AddSubPostApplied() {
  const [data, setData] = useState([]);
  const [postData, setPostData] = useState([]);

  const [selectedPostId, setSelectedPostId] = useState("");
  const [newPost, setNewPost] = useState("");

  const [open, setOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  // -----------------------------Fetching data from applied_subpost------------------------------
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`${ADMIN_BASE_URL}/appliedSubPost`)
      .then((response) => {
        // console.log("response.data>>>>",response.data)
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
      .get(`${ADMIN_BASE_URL}/appliedPost`)
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
    // console.log("check category->", selectedPostId);
    // console.log("typed data->", newPost);
    if (!selectedPostId) {
      console.error("Please select a category.");
      return;
    }
    let accessToken = localStorage.getItem("Token");
    accessToken = JSON.parse(accessToken);
    axios
      .post(
        `${ADMIN_BASE_URL}/appliedSubPost`,
        {
          applied_post_masters_id: Number(selectedPostId), // Convert to number
          subpost_name: newPost,
        },
        {
          headers: {
            "access-token": accessToken.token,
          },
        }
      )

      .then((response) => {
        // console.log("API Response:", response.data);
        setData([...data, response.data]);
        setNewPost("");
        fetchData();
        setOpen(false);
      })
      .catch((error) => console.error("Error adding post:", error));
  };

  // -----------------------------Fetching data from applied_post------------------------------
  const handleDeleteSubPost = (subPostId) => {
    let accessToken = localStorage.getItem("Token");
    accessToken = JSON.parse(accessToken);
    axios
      .delete(`${ADMIN_BASE_URL}/appliedSubPost/${subPostId}`, {
        headers: {
          "access-token": accessToken.token,
        }
      },)
      .then((response) => {
        // console.log("Subpost deleted successfully");
        fetchData();
      })
      .catch((error) => console.error("Error deleting subpost:", error));
  };


  const handleCloseModal = () => {
    setOpen(false);
  };
  const [selectedPost, setSelectedPost] = useState("");
  const [updatePost, setUpdatePost] = useState("");
  const handleOpenUpdateModal = (SubPostID) => {
    const selectedSubPost = data.find(subpost => subpost.id === SubPostID);
    // console.log("Selected Post:", selectedSubPost.applied_post_master.post_name);
    // console.log("Selected Subpost Name:", selectedSubPost.subpost_name);
    setSelectedPost(selectedSubPost); // Set the selected subpost id
    setUpdatePost(selectedSubPost.subpost_name); // Set the update post name
    setUpdateModalOpen(true);
  };



  const handleCloseUpdateModal = () => {
    setUpdateModalOpen(false);
    setSelectedPost(null);
    setUpdatePost("");
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "400",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };



  const handleUpdateSubPost = () => {    
    
    let accessToken = localStorage.getItem("Token");
    accessToken = JSON.parse(accessToken);
    axios
      .put(
        `${ADMIN_BASE_URL}/appliedSubPost`,
        {
          appliedSubPost_id:selectedPost.id,
          applied_post_masters_id:selectedPost.applied_post_master.id,  
          subpost_name:updatePost
        },
        {
          headers: {
            "access-token": accessToken.token,
          },
        }
      )
      .then((response) => {
        // console.log("API Response:", response.data);
        fetchData();
        setUpdatePost("");
        setUpdateModalOpen(false);
      })
      .catch((error) => console.error("Error updating post:", error));
  };





  return (
    <>
      <div className="container-1">
        <div>
          <button className="new-opening-btn" onClick={() => setOpen(true)}>
            Add Sub post
          </button>
        </div>

        <Modal
          open={open} // Control the open state of the modal
          onClose={() => setOpen(false)} // Close the modal when onClose event occurs
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <FormControl>
              <div>
                <form>
                  <img
                    onClick={handleCloseModal}
                    className="Examtype-close-btn"
                    src={close}
                  />
                  <label className="AC-SetLabel-Name" htmlFor="postSelect">
                    Select Post:
                  </label>
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

                  <label
                    style={{ marginTop: "20px" }}
                    className="AC-SetLabel-Name"
                    htmlFor=""
                  >
                    Add Sub Post Applied For
                  </label>

                  <input
                    type="text"
                    id=""
                    className="Ac-set-input"
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

                  <button id="set-btn" type="button" onClick={handleAddSubPost}>
                    ADD NOW
                  </button>
                </form>
              </div>
            </FormControl>
          </Box>
        </Modal>

        {/* <button type="button" onClick={handleAddSubPost}>
          ADD NOW
        </button> */}
      </div>

      <div className="master-table ">
        <p className="table-heading">CURRENT APPLIED SUB POST AVAILABLE</p>
        <div className="table-responsive fixe-table">
          <table className="table table-responsive">
          <thead style={{ color: "rgba(0, 0, 0, 0.63)" }} className="thead">
              <tr>
                <th scope="col">ID</th>
                {/* <th scope="col">Post</th> */}
                <th scope="col">Sub Post</th>
                <th scope="col">Post</th>
                <th scope="col">UPDATE</th>
                <th scope="col">DELETE</th>
              </tr>
            </thead>
            <tbody>
              {data.map((subPost, index) => (
                <tr key={subPost.id}>
                  <td>{index + 1}</td>
                  {/* <td>{subPost.applied_post_master.post_name}</td> */}
                  <td>{subPost.subpost_name}</td>
                  <td>{subPost.applied_post_master.post_name}</td>
                  <td>
                    <button id="table-btns">
                      <img
                        onClick={() => handleOpenUpdateModal(subPost.id)}
                        src={updatebtn}
                        className="up-del-btn"
                        alt=""
                      />
                    </button>
                  

                  </td>
                  <td>
                    <button
                      id="table-btns"
                      onClick={() => handleDeleteSubPost(subPost.id)}
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
                              style={{marginTop:"-30px", marginLeft:"18px"}}
                                onClick={handleCloseUpdateModal}
                                className="Examtype-close-btn"
                                src={close}
                              />
                              <label
                                className="AC-SetLabel-Name"
                                htmlFor="postSelect"
                              >
                                Select Post:
                              </label>
                              <select
                                id="postSelect"                             
                                className="select-jc"
                                value={selectedPost ? selectedPost.applied_post_master.id : ""}                       
                                onChange={(e) => {
                                  const selectedPostId = parseInt(e.target.value);
                                  const selectedPostData = postData.find((post) => post.id === selectedPostId);
                              // console.log("selectedPost>>>>>>",selectedPostId)
                                  setSelectedPost(prevState => ({
                                    ...prevState,
                                    applied_post_master: selectedPostData
                                  }));                             
                                  setUpdatePost(""); 
                                }}
                             >
                                <option value="">Select Post</option>
                                {postData.map((post) => (
                                  <option key={post.id} value={post.id}>
                                    {post.post_name}
                                  </option>
                                ))}
                              </select>

                              <label
                                style={{ marginTop: "20px" }}
                                className="AC-SetLabel-Name"
                                htmlFor=""
                              >
                                Update Sub Post Applied For
                              </label>

                              <input
                                type="text"
                                id=""
                                value={updatePost}                                
                                className="Ac-set-input"
                                placeholder="Sub Post Applied For"
                                onChange={(e) => {
                                  setUpdatePost(e.target.value);
                                  // console.log("Updated sub post:", e.target.value);
                                }}
                              />

                              <button
                                id="set-btn"
                                type="button"
                              onClick={handleUpdateSubPost}
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
    </>
  );
}

export default AddSubPostApplied;
