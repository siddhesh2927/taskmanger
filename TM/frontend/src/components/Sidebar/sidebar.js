import HomeIcon from '@mui/icons-material/Home';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import LogoutIcon from '@mui/icons-material/Logout';
import AddCardIcon from '@mui/icons-material/AddCard';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
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

const Div = styled.div`
  width: 85px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 25;
  padding: 20px 0;
  background: rgba(15, 12, 41, 0.95);
  backdrop-filter: blur(20px);
  border-right: 1px solid rgba(138, 43, 226, 0.3);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 4px 0 24px rgba(0, 0, 0, 0.5);
`;

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 100%;
  flex: 1;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 5px;
`;

const Hr = styled.hr`
  width: 70%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(138, 43, 226, 0.6), transparent);
  border: 0;
  margin: 15px 0;
  box-shadow: 0 0 8px rgba(138, 43, 226, 0.3);
`;

export const Sidebar = () => {
  const Name = Cookies.get("Name");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  return Name ? (
    <Div className='SidebarMainDiv'>
      <LightTooltip title={Name} arrow placement="right">
        <h1
          style={{
            backgroundColor: "rgba(138, 43, 226, 0.9)",
            color: "white",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            fontWeight: "700",
            border: "2px solid rgba(138, 43, 226, 0.5)",
            boxShadow: "0 4px 20px rgba(138, 43, 226, 0.6)",
            transition: "all 0.3s ease",
            marginBottom: "10px"
          }}
        >
          {Name ? Name[0].toUpperCase() : null}
        </h1>
      </LightTooltip>

      <Hr />

      <Icons>
        <LightTooltip title="Home" arrow placement="right">
          <IconButton
            onClick={() => {
              dispatch(removeTask());
              navigate("/home");
            }}
            sx={{
              color: 'white',
              padding: '12px',
              borderRadius: '12px',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'rgba(138, 43, 226, 0.3)',
                transform: 'scale(1.1)'
              }
            }}
          >
            <HomeIcon sx={{ fontSize: 26 }} />
          </IconButton>
        </LightTooltip>

        <LightTooltip title="All Tasks" arrow placement="right">
          <IconButton
            onClick={() => {
              dispatch(removeTask());
              navigate("/task/all");
            }}
            sx={{
              color: 'white',
              padding: '12px',
              borderRadius: '12px',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'rgba(138, 43, 226, 0.3)',
                transform: 'scale(1.1)'
              }
            }}
          >
            <AllInboxIcon sx={{ fontSize: 26 }} />
          </IconButton>
        </LightTooltip>

        <LightTooltip title="Personal" arrow placement="right">
          <IconButton
            onClick={() => {
              dispatch(removeTask());
              navigate("/task/personal");
            }}
            sx={{
              color: 'white',
              padding: '12px',
              borderRadius: '12px',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'rgba(138, 43, 226, 0.3)',
                transform: 'scale(1.1)'
              }
            }}
          >
            <PersonalVideoIcon sx={{ fontSize: 26 }} />
          </IconButton>
        </LightTooltip>

        <LightTooltip title="Official" arrow placement="right">
          <IconButton
            onClick={() => {
              dispatch(removeTask());
              navigate("/task/official");
            }}
            sx={{
              color: 'white',
              padding: '12px',
              borderRadius: '12px',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'rgba(138, 43, 226, 0.3)',
                transform: 'scale(1.1)'
              }
            }}
          >
            <HomeWorkIcon sx={{ fontSize: 26 }} />
          </IconButton>
        </LightTooltip>

        <LightTooltip title="Others" arrow placement="right">
          <IconButton
            onClick={() => {
              dispatch(removeTask());
              navigate("/task/others");
            }}
            sx={{
              color: 'white',
              padding: '12px',
              borderRadius: '12px',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'rgba(138, 43, 226, 0.3)',
                transform: 'scale(1.1)'
              }
            }}
          >
            <OtherHousesIcon sx={{ fontSize: 26 }} />
          </IconButton>
        </LightTooltip>

        <LightTooltip title="Add Task" arrow placement="right">
          <IconButton
            onClick={() => {
              dispatch(removeTask());
              navigate("/addtask");
            }}
            sx={{
              color: 'white',
              padding: '12px',
              borderRadius: '12px',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'rgba(138, 43, 226, 0.3)',
                transform: 'scale(1.1)'
              }
            }}
          >
            <AddCardIcon sx={{ fontSize: 26 }} />
          </IconButton>
        </LightTooltip>
      </Icons>

      <Buttons>
        <LightTooltip title="Logout" arrow placement="right">
          <IconButton
            onClick={() => {
              Cookies.remove("Name");
              Cookies.remove("Token");
              navigate("/");
            }}
            sx={{
              color: 'white',
              padding: '12px',
              borderRadius: '12px',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'rgba(239, 68, 68, 0.3)',
                transform: 'scale(1.1)'
              }
            }}
          >
            <LogoutIcon sx={{ fontSize: 26 }} />
          </IconButton>
        </LightTooltip>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "15px",
            color: "rgba(255, 255, 255, 0.4)",
            fontSize: "10px",
            gap: "3px"
          }}
        >
          <CopyrightIcon sx={{ fontSize: 12 }} />
          <p style={{ margin: 0, textAlign: "center" }}>2022</p>
        </div>
      </Buttons>
    </Div>
  ) : null;
};
