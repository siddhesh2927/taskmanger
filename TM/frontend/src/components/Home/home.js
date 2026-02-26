import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
import { authenticate } from '../../redux/action';
import {useDispatch, useSelector} from "react-redux"
import { useEffect} from "react";
import { Sidebar } from '../Sidebar/sidebar';
import "./home.css"
import CircularProgress from '@mui/material/CircularProgress';


export const Home=()=>{
  const dispatch=useDispatch()
  const token=Cookies.get("Token")
  const Data=useSelector(store=>store.home_pageData)
  const navigate=useNavigate()
  const Name=Cookies.get("Name")
  


  useEffect(()=>{
    if(token===undefined){
       
         navigate("/")
      }
      else{
         dispatch(authenticate(token))
      }

  },[])

  

  
return (
  <div className="HomeContainer">
    <Sidebar/>
    
    <div className="HomeMainContent">
      <div className="HomeHeader">
        <h1 className="WelcomeText">Welcome back, <span>{Name}</span></h1>
        <p className="SubtitleText">Here's your task summary for today</p>
      </div>

      <div className="TasksSummarySection">
        <div className="TaskCard">
          <div className="TaskCardHeader">All Tasks</div>
          <div className="TaskCardValue">
            {Data.message ? <span className="TaskNumber">{Data.All}</span> : <CircularProgress sx={{color:'#667eea'}} size={40} />}
          </div>
        </div>

        <div className="TaskCard">
          <div className="TaskCardHeader">Personal</div>
          <div className="TaskCardValue">
            {Data.message ? <span className="TaskNumber">{Data.Personal}</span> : <CircularProgress sx={{color:'#667eea'}} size={40} />}
          </div>
        </div>

        <div className="TaskCard">
          <div className="TaskCardHeader">Official</div>
          <div className="TaskCardValue">
            {Data.message ? <span className="TaskNumber">{Data.Official}</span> : <CircularProgress sx={{color:'#667eea'}} size={40} />}
          </div>
        </div>

        <div className="TaskCard">
          <div className="TaskCardHeader">Others</div>
          <div className="TaskCardValue">
            {Data.message ? <span className="TaskNumber">{Data.Others}</span> : <CircularProgress sx={{color:'#667eea'}} size={40} />}
          </div>
        </div>
      </div>

      <div className="IllustrationSection">
        <img className='IllustrationImage' src='https://blog.planview.com/wp-content/uploads/2017/08/Tip_1_Juggling-too-many-task-Gif_Twitter.gif' alt="Task illustration"/>
      </div>
    </div>
  </div>
)
}