import React,{useEffect,useState} from 'react';
import candidatesApiService from '../../../candidateService';


const CandidateOtherInfoForm = () => {


  const [otherInfoItem, setOtherInfoItem] = useState([])
  const fetchData = async () => {
    try {

      const fetchedData = await candidatesApiService.getCandidateMembershipInfo();
      console.log("response?????????????????", fetchedData);
      setOtherInfoItem(fetchedData);
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
    <button>Add OtherInfo</button>
  </div>

    <div className="master-table">
      <p className="SCA-heading">Other Information</p>
      <div className="table-responsive fixe-table">
        <table className="table table-responsive">
          <thead style={{ color: "rgba(0, 0, 0, 0.63)" }} className="thead">
            <tr>
              <th scope="col">Sr. No.</th>
              <th scope="col">Membership of University/Institute/Industry Bodies/Professional Bodies</th>
              <th scope="col">Date From</th>
              <th scope="col">Date To</th>
              <th scope="col">Position Held</th>
              <th scope="col">Contribution</th>
        
              {/* <th scope="col">DELETE</th> */}
            </tr>
          </thead>
          <tbody>
            {otherInfoItem&&otherInfoItem.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.member_of_institute_name}</td>
                <td>{formatDate(item.membership_date_from)}</td>
                <td>{formatDate(item.membership_date_to)}</td>
                <td>{item.position_held}</td>
                <td>{item.contribution}</td>
                {/* <td>{item.name_of_institute}</td>
                <td>{item.name_of_industry}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default CandidateOtherInfoForm;
