import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const globalState = useSelector(state => state)
  const admins = globalState.admins.data;
  const me = admins.find(admin => admin?.id == globalState?.auth?.data?.admin?.id)
  console.log("globalState: ", globalState, "me: ", me)
  const { darkMode, dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar my-0 py-0" style={{}}>
      <div className="wrapper" style={{ position: "relative", top: "-10px" }}>
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          {/* <div className="item gap-1">
            <LanguageOutlinedIcon className="icon" />
            <span>English</span>
          </div> */}
          {/* {darkMode && darkMode ?
            <div className="item">
              <LightModeOutlinedIcon
                className="icon"
                onClick={() => dispatch({ type: "TOGGLE" })}
              />
            </div>
            :
            <div className="item">
              <DarkModeOutlinedIcon
                className="icon"
                onClick={() => dispatch({ type: "TOGGLE" })}
              />
            </div>
          } */}
          <div className="item">
            <img
              src={me?.usersprofile?.profilePic}
              // src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
