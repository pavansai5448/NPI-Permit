
import '../Approval.css';
// import {Link} from 'react-router-dom';
import {Link } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <div className="header">
                <div className="img1">
                    <img id="blobby-1" src="./icon.png" alt="Blobby" />
                </div>

                <nav>
                    <Link to="/approvalformat">Home</Link>

                    <Link to="/viewdetails">View Details</Link>
                </nav>
            </div>
        </>
    );
}
 
export default Header;