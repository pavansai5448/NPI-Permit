import {useState,useEffect} from "react";
// import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from "react-router-dom";
import './Approval.css';
import axios from 'axios';
import Header from "./Components/Header";
const Tables = ({Username}) => {
  const [data,setData]=useState([]);
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://localhost:7113/api/heightwork/get/${Username}`)
      .then((response) => {
        console.log(response.data)
        setData(response.data); // Use response.data directly
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  
    return ( 

  <div>
    <Header />
    
  <table style={{border:"2px solid black",borderSpacing: "3px"}}>
    <thead>
  <tr>
    <th>Site</th>
    <th>Date & Time</th>
    <th>Issuer</th>
    <th>Receiver</th>
    <th>Nature of Work</th>
    <th>Work Area</th>
    <th>Risk Associated with the Work</th>
    <th>Risk Assessment Detail</th>
    <th>Recommended PPE</th>
    <th>Special Instruction</th>
    <th>Possible Emergency Situation</th>
    <th>Precaution Taken To Support Emergency Situation</th>
    <th>Other permits Applicable</th>
    <th>Permit Approved by Site FHS</th>
    <th>Permit Verified and Closed</th>
  </tr>
  </thead>
  <tbody>
    {loading==false && data.map(user=>{

return <tr key={user.id}>
  <td>{user.site}</td>
  <td>{user.dateAndTime}</td>
  <td>{user.issuer}</td>
  <td>{user.receiver}</td>
  <td>{user.natureOfWork}</td>
  <td>{user.workArea}</td>
  <td>{user.riskAssociatedWithTheWork}</td>
  <td>{user.riskAssessmentDetail}</td>
  <td>{user.recommendedPpe}</td>
  <td>{user.specialInstruction}</td>
  <td>{user.possibleEmergencySituation}</td>
  <td>{user.precautionTakenToSupportEmergencySituation}</td>
  <td>{`${user.otherPermitsApplicable}`}</td>
  <td>{`${user.permitApprovedBySiteFhs}`}</td>
  <td>{`${user.permitVerifiedAndClosed}`}</td>


</tr>

})}
 </tbody>
</table>
</div>
     );
}
 

export default Tables;