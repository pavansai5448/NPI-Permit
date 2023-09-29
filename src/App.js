import ApprovalFormat from "./ApprovalFormat";
import LoginPage from "./Login";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import {useState} from 'react';
import Tables from "./Table";


function App() {
    const [token, setToken] = useState(false);
    const [user,setUser]=useState("");


    return(
        <div className="App">
            
            <Router>
               
                <Routes>
                    <Route path="/" element={token ? <ApprovalFormat /> : <LoginPage setToken={setToken} setUser={setUser} />} />
                    <Route exact path="/approvalformat" element= {token ?   <ApprovalFormat Username={user}/>:<LoginPage setToken={setToken} setUser={setUser} />} />
                    <Route exact path="/viewdetails" element= {token ? <Tables Username={user}/>:<LoginPage setToken={setToken} setUser={setUser} />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;
