import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import AddCardIcon from '@mui/icons-material/AddCard';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { styled as newStyled } from '@mui/material/styles';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { removeTask } from '../../redux/action';
import { useDispatch } from 'react-redux';
import "./sidebar.css"

const LightTooltip = newStyled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
    fontWeight:'bold',
  },
}));

// === styled components ===
const Div = styled.div`
  width: ${props => (props.show ? '240px' : '60px')};
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 25;
  padding: 12px 8px;
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: width 0.3s ease;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.3);
`;

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.show ? 'flex-start' : 'center')};
  width: 100%;
  margin-top: 20px;
  flex: 1;
`;

const Hr = styled.hr`
  width: 80%;
  height: 2px;
  background-color: white;
  border: 0;
  margin: 10px 0;
`;
// ==========================

export const Sidebar = () => {
  const Name = Cookies.get("Name");
  const [show, setshow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return Name ? (
    <Div className='SidebarMainDiv' show={show}>
      {show ? (
        <h1>{Name}</h1>
      ) : (
        <LightTooltip title={`${Name}`} arrow>
          <h1
            style={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "25px",
              width: "80%",
              cursor: "pointer",
              margin: "auto",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            {Name ? Name[0] : null}
          </h1>
        </LightTooltip>
      )}

      <div className='ArrorDiv'>
        <Hr show={show} />
        {show ? (
          <ArrowCircleLeftIcon
            sx={{ cursor: "pointer" }}
            onClick={() => setshow(false)}
          />
        ) : (
          <ArrowCircleRightIcon
            sx={{ cursor: "pointer" }}
            onClick={() => setshow(true)}
          />
        )}
      </div>

      <div className='IconsMainDiv'>
        <Icons show={show}>
          <LightTooltip title="Home" arrow>
            <IconButton
              onClick={() => {
                dispatch(removeTask());
                navigate("/home");
              }}
            >
              <HomeIcon sx={{ fontSize: 30, color: "white" }} />
            </IconButton>
          </LightTooltip>

          <LightTooltip title="All" arrow>
            <IconButton
              onClick={() => {
                dispatch(removeTask());
                navigate("/task/all");
              }}
            >
              <AllInboxIcon sx={{ fontSize: 30, color: "white" }} />
            </IconButton>
          </LightTooltip>

          <LightTooltip title="Personal" arrow>
            <IconButton
              onClick={() => {
                dispatch(removeTask());
                navigate("/task/personal");
              }}
            >
              <PersonalVideoIcon sx={{ fontSize: 30, color: "white" }} />
            </IconButton>
          </LightTooltip>

          <LightTooltip title="Official" arrow>
            <IconButton
              onClick={() => {
                dispatch(removeTask());
                navigate("/task/official");
              }}
            >
              <HomeWorkIcon sx={{ fontSize: 30, color: "white" }} />
            </IconButton>
          </LightTooltip>

          <LightTooltip title="Others" arrow>
            <IconButton
              onClick={() => {
                dispatch(removeTask());
                navigate("/task/others");
              }}
            >
              <OtherHousesIcon sx={{ fontSize: 30, color: "white" }} />
            </IconButton>
          </LightTooltip>

          <LightTooltip title="Add Task" arrow>
            <IconButton
              onClick={() => {
                dispatch(removeTask());
                navigate("/addtask");
              }}
            >
              <AddCardIcon sx={{ fontSize: 30, color: "white" }} />
            </IconButton>
          </LightTooltip>

          <LightTooltip title="Logout" arrow>
            <IconButton
              onClick={() => {
                Cookies.remove("Name");
                Cookies.remove("Token");
                navigate("/");
              }}
            >
              <LogoutIcon sx={{ fontSize: 30, color: "white" }} />
            </IconButton>
          </LightTooltip>
        </Icons>

        {show ? (
          <Buttons show={show}>
            <Button
              onClick={() => {
                dispatch(removeTask());
                navigate("/home");
              }}
              sx={{ color: 'white', fontWeight: 'bold', mt: 2.5 }}
              variant='text'
            >
              Home
            </Button>
            <Button
              onClick={() => {
                dispatch(removeTask());
                navigate("/task/all");
              }}
              sx={{ color: 'white', fontWeight: 'bold', mt: 3 }}
              variant="text"
            >
              All
            </Button>
            <Button
              onClick={() => {
                dispatch(removeTask());
                navigate("/task/personal");
              }}
              sx={{ color: 'white', fontWeight: 'bold', mt: 3.2 }}
              variant="text"
            >
              Personal
            </Button>
            <Button
              onClick={() => {
                dispatch(removeTask());
                navigate("/task/official");
              }}
              sx={{ color: 'white', fontWeight: 'bold', mt: 3.5 }}
              variant="text"
            >
              Official
            </Button>
            <Button
              onClick={() => {
                dispatch(removeTask());
                navigate("/task/others");
              }}
              sx={{ color: 'white', fontWeight: 'bold', mt: 3.3 }}
              variant="text"
            >
              Others
            </Button>
            <Button
              onClick={() => {
                dispatch(removeTask());
                navigate("/addtask");
              }}
              sx={{ color: 'white', fontWeight: 'bold', mt: 3 }}
              variant="text"
            >
              Add Task
            </Button>
            <Button
              sx={{ marginTop: 3.1, color: 'white', fontWeight: 'bold' }}
              onClick={() => {
                Cookies.remove('Name')
                Cookies.remove('Token')
                navigate('/')
              }}
              variant="text"
            >
              Logout
            </Button>
            <div
              style={{
                display: "flex",
                marginTop: "40px",
                color: "rgb(151, 195, 225)",
                fontSize: "12px",
              }}
            >
              <CopyrightIcon sx={{ marginRight: 0.8, fontSize: 15 }} />
              <p style={{ margin: 0, marginTop: "1px" }}>2022 Tushar</p>
            </div>
          </Buttons>
        ) : null}
      </div>
    </Div>
  ) : null;
};