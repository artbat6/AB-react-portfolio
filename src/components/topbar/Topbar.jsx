import "./topbar.scss";
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';

function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#works" className="logo">Arthur Bates</a>
                    <div className="itemContainer">
                      <PersonIcon className="icon" />
                      <span>701 415 8812</span>   
                    </div>
                    <div className="itemContainer">
                      <MailIcon className="icon" />
                      <span>arthurbatesdev@gmail.com</span>   
                    </div>
                </div>
                <div className="right">

                </div>
            </div>
        </div>
    )
}

export default Topbar
