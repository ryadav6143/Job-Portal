import React, { useState, useEffect } from "react";
import axios from "axios";
import updatebtn from "../../../assets/logos/update.png";
import deletebtn from "../../../assets/logos/delete.png";
import { BASE_URL } from "../../../config/config";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { FormControl } from "@mui/material";
import close from "../../../assets/logos/close.png";
function AddSubPostApplied() {
  const [data, setData] = useState([]);
  const [postData, setPostData] = useState([]);
  const [selectedPost, setSelectedPost] = useState("");
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [newPost, setNewPost] = useState("");
  const [updatePost, setUpdatePost] = useState("");
  const [open, setOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  // -----------------------------Fetching data from applied_subpost------------------------------
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`${BASE_URL}/appliedSubPost`)
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
      .get(`${BASE_URL}/appliedPost`)
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
    console.log("check category->", selectedPostId);
    console.log("typed data->", newPost);
    if (!selectedPostId) {
      console.error("Please select a category.");
      return;
    }

    axios
      .post(
        `${BASE_URL}/appliedSubPost`,
        {
          applied_post_masters_id: Number(selectedPostId), // Convert to number
          subpost_name: newPost,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      .then((response) => {
        console.log("API Response:", response.data);
        setData([...data, response.data]);
        setNewPost("");
      })
      .catch((error) => console.error("Error adding post:", error));
  };

  // -----------------------------Fetching data from applied_post------------------------------
  const handleDeleteSubPost = (subPostId) => {
    axios
      .delete(`${BASE_URL}/appliedSubPost/${subPostId}`)
      .then((response) => {
        console.log("Subpost deleted successfully");
        fetchData(); // Refresh the data after deletion
      })
      .catch((error) => console.error("Error deleting subpost:", error));
  };

  const handleUpdateSubPost = () => {
    if (!selectedPostId) {
      console.error("Please select a category.");
      return;
    }

    console.log("Updating sub-post:", selectedPost);

    axios
      .put(
        `${BASE_URL}/appliedSubPost/${selectedPost.id}`,
        {
          applied_post_masters_id: Number(selectedPostId),
          subpost_name: updatePost,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("API Response:", response.data);
        fetchData(); // Refresh the data after update
        setUpdatePost(""); // Clear the update field after updating
      })
      .catch((error) => console.error("Error updating post:", error));
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleOpenUpdateModal = (subPost) => {
    setSelectedPost(subPost);
    setUpdatePost(subPost.subpost_name);
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

  return (
    <>
      <div className="container-1">
        <div>
          <button onClick={() => setOpen(true)}>Add Sub post</button>
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
        <div className="">
          <table className="table table-responsive">
            <thead style={{ color: "rgba(0, 0, 0, 0.63)" }}>
              <tr>
                <th scope="col">ID</th>
                {/* <th scope="col">Post</th> */}
                <th scope="col">Sub Post</th>
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
                  <td>
                    <button id="table-btns">
                      <img
                        onClick={() => handleOpenUpdateModal(subPost)}
                        src={updatebtn}
                        className="up-del-btn"
                        alt=""
                      />
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
                                value={selectedPostId}
                                className="select-jc"
                                onChange={(e) => handleSelectPost(e)}
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
                                className="Ac-set-input"
                                placeholder="Sub Post Applied For"
                                value={updatePost}
                                onChange={(e) => setUpdatePost(e.target.value)}
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
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AddSubPostApplied;
