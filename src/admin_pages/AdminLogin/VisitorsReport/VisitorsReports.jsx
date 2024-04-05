import React, { useState, useEffect } from "react";
import adminApiService from "../../adminApiService";
import updatebtn from "../../../assets/logos/update.png"
import deletebtn from "../../../assets/logos/delete.png"
import close from "../../../assets/logos/close.png"
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { FormControl } from "@mui/material";
function VisitorsReports() {
    const [visitorData, setVisitorData] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedVisitor, setSelectedVisitor] = useState(null);
    const [updateModalOpen, setUpdateModalOpen] = useState(false);
    const [updateData, setUpdateData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        contact_1: "",
        message: "",
        action_discription: "",
        is_attend: false,
        is_close: false,
        assign_to: false,
      });
    const fetchVisitorData = async () => {
        try {
            const response = await adminApiService.getVisitor();
            setVisitorData(response);
        } catch (error) {
            console.error("Error fetching visitor details:", error);
        }
    };

    useEffect(() => {
        fetchVisitorData();
    }, []);
    const handleCloseUpdateModal = () => {
        setUpdateModalOpen(false);
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


    const handleSelectPostForUpdate = (visitorId) => {

        const selectedVisitor = visitorData.find((visitor) => visitor.id === visitorId);
        console.log("selectedVisitor>>>>>", selectedVisitor)
        setSelectedVisitor(selectedVisitor);
        setUpdateData(selectedVisitor); 
        setUpdateModalOpen(true);
    };


    const handleUpdateVisitor = async () => {
        try {
          const response = await adminApiService.updateVisitor(updateData);
          console.log("Updated Visitor:", response);
          // Refresh visitor data
          fetchVisitorData();
          setUpdateModalOpen(false);
        } catch (error) {
          console.error("Error updating visitor:", error);
        }
      };
    return (
        <>

            <div className="admin-list">
                <div className="master-table ">
                    <p className="SCA-heading">Visitors Report</p>
                    <div className="table-responsive ">
                        <table className="table table-responsive">
                            <thead style={{ color: "rgba(0, 0, 0, 0.63)" }}>
                                <tr>
                                    <th scope="col">S.No.</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Message</th>
                                    <th scope="col">Assign-To</th>
                                    <th scope="col">Is-Attend</th>
                                    <th scope="col">Is-Close</th>
                                    <th scope="col">Comments</th>
                                    <th scope="col">Visiting Date</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {visitorData.map((visitor, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{visitor.first_name}</td>
                                        <td>{visitor.last_name}</td>
                                        <td>{visitor.email}</td>
                                        <td>{visitor.contact_1}</td>
                                        <td>{visitor.message}</td>
                                        <td>{visitor.assign_to || "-"}</td>
                                        <td>{visitor.is_attend ? "Yes" : "No"}</td>
                                        <td>{visitor.is_close ? "Yes" : "No"}</td>
                                        <td>{visitor.action_discription || "-"}</td>
                                        <td>{new Date(visitor.createdAt).toLocaleDateString()}</td>
                                        <td>
                                            <button
                                                type="button"
                                                id="table-btns"
                                                onClick={() => handleSelectPostForUpdate(visitor.id)}
                                            >
                                                <img className="up-del-btn" src={updatebtn} alt="" />
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                type="button"
                                                id="table-btns"

                                            >
                                                <img className="up-del-btn" src={deletebtn} alt="" />
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
                                        <form>
                                            <img
                                                onClick={handleCloseUpdateModal}
                                                className="postapplied-close-btn"
                                                src={close}
                                                alt=""
                                            />
                                            <div className="row">
                                                <div className="col-6">
                                                    <label htmlFor="First Name">
                                                        First Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="select-jc"
                                                        id=""
                                                        name="first_name"
                                                        placeholder="First Name"
                                                        value={selectedVisitor ? selectedVisitor.first_name : ''}
                                                        
                                                    />
                                                </div>
                                                <div className="col-6">
                                                    <label htmlFor="Last Name">
                                                        Last Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="select-jc"
                                                        id=""
                                                        name="last_name"
                                                        placeholder="Last Name"
                                                        value={selectedVisitor ? selectedVisitor.last_name : ''}
                                                    />
                                                </div>


                                            </div>


                                            <div className="row">
                                                <div className="col-6">
                                                    <label htmlFor="Email">
                                                        Email
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="select-jc"
                                                        id=""
                                                        name="email"
                                                        placeholder="Email"
                                                        value={selectedVisitor ? selectedVisitor.Email : ''}
                                                    />
                                                </div>
                                                <div className="col-6">
                                                    <label htmlFor="Contact">
                                                        Contact
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="select-jc"
                                                        id=""
                                                        name="contact_1"
                                                        placeholder="Contact"
                                                        value={selectedVisitor ? selectedVisitor.Contact : ''}
                                                    />
                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="col-6">
                                                    <label htmlFor="Message">
                                                        Message
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="select-jc"
                                                        id=""
                                                        name="message"
                                                        placeholder="Message"
                                                        value={selectedVisitor ? selectedVisitor.Message : ''}
                                                    />
                                                </div>
                                                <div className="col-6">

                                                    <label htmlFor="action_discription">
                                                        action_discription
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="select-jc"
                                                        id=""
                                                        name="action_discription"
                                                        placeholder="action_discription"
                                                        value={selectedVisitor ? selectedVisitor.action_discription : ''}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row">                                               
                                                <div className="col-6">
                                                    <label htmlFor="createdAt">
                                                        createdAt
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="select-jc"
                                                        id=""
                                                        name="createdAt"
                                                        placeholder="createdAt"
                                                        value={selectedVisitor ? selectedVisitor.createdAt : ''}
                                                    />

                                                </div>
                                                </div>
                                     
                                                <div className="row">  
                                                <div className="col-4">
                                                    <p>is_attend</p>
                                                    <label className="switch">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox3"
                                                            name="is_attend"
                                                        // checked={}
                                                        value={selectedVisitor ? selectedVisitor.is_attend : ''}

                                                        />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                                <div className="col-4">
                                                    <p>is_close</p>
                                                    <label className="switch">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox3"
                                                            name="is_close"
                                                        // checked={}
                                                        value={selectedVisitor ? selectedVisitor.is_close : ''}

                                                        />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>  
                                            <div className="col-4">
                                                    <p>assign_to</p>
                                                    <label className="switch">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox3"
                                                            name="assign_to"
                                                        // checked={}
                                                        value={selectedVisitor ? selectedVisitor.assign_to : ''}
                                                        />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>


                                                </div>

                                            <button
                                                id="set-btn"
                                                type="button"
                                                onClick={handleUpdateVisitor}
                                            >
                                                UPDATE NOW
                                            </button>
                                        </form>
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

export default VisitorsReports;
