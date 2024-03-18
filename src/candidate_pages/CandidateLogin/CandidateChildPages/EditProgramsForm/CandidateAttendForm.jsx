import React, { useEffect, useState } from 'react';
import candidatesApiService from '../../../candidateService';


const CandidateAttendForm = () => {

  const [attendItem, setAttendItem] = useState([])
  const fetchData = async () => {
    try {

      const fetchedData = await candidatesApiService.getCandidateAttend();
      console.log("Attend///", fetchedData);
      setAttendItem(fetchedData);
    } catch (error) {
      console.error("Error fetching data:", error.message);

    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
  };
  return (
    <>
      <div className="new-opening-btn">
        <button>Add Attend</button>
      </div>
      <div className="master-table">
        <p className="SCA-heading">Attend</p>

        <div className="table-responsive fixe-table">

          <table className="table table-responsive">
            <thead style={{ color: "rgba(0, 0, 0, 0.63)" }} className="thead">
              <tr>
                <th scope="col">Sr. No.</th>
                <th scope="col">Date From</th>
                <th scope="col">Date To</th>
                <th scope="col">Name of the Course</th>
                <th scope="col">Sponsored By</th>

                {/* <th scope="col">DELETE</th> */}
              </tr>
            </thead>
            <tbody>
              {attendItem && attendItem.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{formatDate(item.attend_date_from)}</td>
                  <td>{formatDate(item.attend_date_to)}</td>
                  <td>{item.name_of_course}</td>
                  <td>{item.sponsered_by}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div></>
  );
};

export default CandidateAttendForm;
