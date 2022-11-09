import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from "axios"
import { useEffect, useState, createContext } from "react";
import './App.css';
import Home from './components/home';
import DemandList from './components/DemandList';
import TableDisplay from "./components/table/Tabledisplay";
import Dropdown from 'react-bootstrap/Dropdown';
import Img from './image/skill.jpg';
import People from './image/people.jpg';
import Demand from './image/demand.jpg';
import Capability from './image/capability1.jpg';
import PartialCapability from './image/capability2.jpg';
import Upload from './image/upload.jpg';
const URL = "https://ec2-18-183-187-191.ap-northeast-1.compute.amazonaws.com/api/index.php/"



export const UserContext = createContext()
function App() {
  const [currentuser, setcurrentuser] = useState('testuser1')
  const [currentusername, setcurrentusername] = useState(' Rajkumar Ramasani')


  var uselist = ["testuser1", "testuser2", "testuser3"]
  const [contextdata, setcontextdata] = useState({})
  const [demands, setDemands] = useState([]);
  const [resources, setResources] = useState([]);
  useEffect(() => {
    getDemands();
    getBenchResources();
  }, [currentuser]);
  function getDemands() {
    axios.get(`${URL}demands/${currentuser}`).then(function (response) {
      //console.log("DEMANDS DATA"+JSON.stringify(response.data,0,2));
      setDemands(response.data);
    });
  }
  function getBenchResources() {
    axios.get(`${URL}bench/${currentuser}`).then(function (response) {
      // console.log("BENCH DATA" + JSON.stringify(response.data, 0, 2));
      setResources(response.data);
    });
  }
  var contextdataval = {
    contextdata,
    setcontextdata,
    currentusername, setcurrentuser, setcurrentusername
  }
  return (
    <div>
      <UserContext.Provider value={contextdataval} >
        <div className="main_div">
          
          <div className="header">

          <div className="top_nav">
           <div className="logo_align"> <svg width="25%" height="5%" viewBox="0 0 180 99" fill="none" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
              <path d="M8.12903 85.7419V98.129H4.64516V85.7419H0V82.6452H12.7742V85.7419H8.12903ZM17.4194 97.9355V82.4516H29.0323V85.5484H20.7097V88.6451H28.0645V91.7419H20.7097V95.0322H29.0323V98.129H17.4194V97.9355ZM41.6129 98.3226C36.9677 98.3226 33.6774 94.8387 33.6774 90.3871C33.6774 85.9355 36.9677 82.4516 41.8065 82.4516C44.7097 82.4516 46.4516 83.4193 48 84.7742L45.6774 87.0968C44.5161 85.9355 43.3548 85.3548 41.8065 85.3548C39.2903 85.3548 37.3548 87.4839 37.3548 90.1935C37.3548 92.9032 39.0968 95.0322 41.8065 95.0322C43.5484 95.0322 44.7097 94.2581 45.871 93.2903L48 95.4193C46.2581 97.1613 44.5161 98.3226 41.6129 98.3226ZM62.3226 97.9355V91.7419H56.129V97.9355H52.6452V82.4516H56.129V88.6451H62.3226V82.4516H65.8065V97.9355H62.3226ZM82.6452 97.9355L75.0968 88.0645V97.9355H71.8064V82.4516H74.9032L82.2581 91.9355V82.4516H85.5484V97.9355H82.6452ZM98.7097 98.3226C93.871 98.3226 90.5807 94.8387 90.5807 90.3871C90.5807 85.9355 94.0645 82.4516 98.9032 82.4516C103.742 82.4516 107.032 85.9355 107.032 90.3871C107.032 94.6452 103.548 98.3226 98.7097 98.3226ZM103.355 90.1935C103.355 87.4839 101.419 85.3548 98.7097 85.3548C96 85.3548 94.0645 87.4839 94.0645 90.1935C94.0645 92.9032 96 95.0322 98.7097 95.0322C101.613 95.2258 103.355 92.9032 103.355 90.1935ZM111.871 97.9355V82.4516H115.355V94.8387H123.097V97.9355H111.871ZM134.516 98.3226C129.677 98.3226 126.387 94.8387 126.387 90.3871C126.387 85.9355 129.871 82.4516 134.71 82.4516C139.548 82.4516 142.839 85.9355 142.839 90.3871C142.839 94.6452 139.355 98.3226 134.516 98.3226ZM139.161 90.1935C139.161 87.4839 137.226 85.3548 134.516 85.3548C131.806 85.3548 129.871 87.4839 129.871 90.1935C129.871 92.9032 131.806 95.0322 134.516 95.0322C137.226 95.0322 139.161 92.9032 139.161 90.1935ZM155.032 98.3226C150.194 98.3226 146.903 95.0323 146.903 90.3871C146.903 85.9355 150.387 82.4516 155.032 82.4516C157.742 82.4516 159.484 83.2258 161.032 84.5806L158.903 87.0968C157.742 86.129 156.581 85.5484 154.839 85.5484C152.323 85.5484 150.387 87.6774 150.387 90.3871C150.387 93.2903 152.323 95.2258 155.032 95.2258C156.194 95.2258 157.355 94.8387 158.323 94.2581V92.129H154.839V89.0322H161.613V95.8064C160.065 97.1613 157.935 98.3226 155.032 98.3226ZM174 91.7419V97.9355H170.516V91.7419L164.516 82.4516H168.581L172.258 88.6451L175.935 82.4516H179.806L174 91.7419Z" fill="white"></path>
              <path d="M59.4194 40.2581C59.0323 42.9677 58.2581 45.6774 57.0968 48.3871C55.3548 52.4516 52.8387 56.3226 49.5484 59.6129C43.3548 66 33.871 70.0645 24.3871 70.0645H0V56.129H24.1936C30 56.129 35.4194 54 39.0968 50.129C41.8065 47.4194 43.7419 44.129 44.7097 40.4516H59.4194V40.2581ZM59.4194 29.6129C59.0323 26.9032 58.2581 24.1935 57.0968 21.4839C55.3548 17.4194 52.8387 13.5484 49.5484 10.4516C43.1613 4.06452 33.871 0 24.3871 0H0V13.9355H24.1936C30 13.9355 35.4194 16.0645 39.0968 19.9355C41.8065 22.6452 43.7419 25.9355 44.7097 29.6129H59.4194ZM90 46.4516L71.4194 69.6774H53.0323L80.7097 34.8387L53.0323 0H71.4194L90 23.2258L108.387 0H126.774L99.0968 34.8387L126.774 69.6774H108.387L90 46.4516ZM135.097 40.2581C136.065 43.7419 138 47.0323 140.71 49.9355C144.387 53.8064 150 55.9355 155.613 55.9355H179.806V69.6774H155.613C145.935 69.6774 136.645 65.6129 130.452 59.2258C127.161 55.9355 124.645 52.0645 122.903 48C121.742 45.2903 120.968 42.7742 120.581 39.871H135.097V40.2581ZM135.097 29.6129C136.065 26.129 138 22.8387 140.71 19.9355C144.387 16.0645 150 13.9355 155.613 13.9355H179.806V0H155.613C145.935 0 136.645 4.06452 130.452 10.4516C127.161 13.7419 124.645 17.6129 122.903 21.6774C121.742 24.3871 120.968 26.9032 120.581 29.8064H135.097V29.6129Z" fill="white"></path>
            </svg>
            </div>
            <div><h1>DXC Talent Pool</h1></div>
          </div> 
          </div>
          <div className='name'>Welcome! DXC DEMAND USER </div>
          <div className="row">
            <div className="side">
              <div className="marquee" >  <ul>“Everyone has talent. What's rare is the courage to follow it to the dark places where it leads.”</ul>
                <ul>“Everybody is talented because everybody who is human has something to express.”</ul>
                <ul>“You are unique. You have different talents and abilities.”</ul>
               </div>
            </div>
            <div className="main">
              <img height="160px" width="100%" src={Img} alt="pic" />


            </div>
          </div>


          <BrowserRouter>
            <Routes>
              <Route index element={<Home demands={demands} resources={resources} />} />
              <Route path="demandList" element={<DemandList demands={demands} />} />
              <Route path="resourceList" element={<DemandList resources={resources} />} />
              <Route path="displayTable" element={<TableDisplay resources={resources} />} />
            </Routes>
          </BrowserRouter>
        </div>
      </UserContext.Provider>

      <div className="footer">
        <span _ngcontent-ayw-c176="" className="copyright"> © DXC Technology </span>
      </div>

    </div>
  );
}

export default App;
