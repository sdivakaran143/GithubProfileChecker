import './App.css';
import {useState} from 'react';
import axios from "axios";
import Maincontent from './components/Maincontent';

function App() {
  const [initialdata,setinitialdata]=useState(" ");
  const [data,setdata]=useState([]);
  const [username,setusername]=useState("sdivakaran143");
  const [userdata,setuserdata]=useState();
  const [status,setstatus]=useState(false);
  const usernameupdate=(e)=>{
      setusername(e.target.value)
  }
  const fetchdatas=(event)=>{
      event.preventDefault();
      axios.get(`https://api.github.com/users/${username}/repos`).then(response=>{
          setdata(response.data);
          console.log("phase 1 sucessfull");
          return axios.get(response.data[0].owner.url);
      }).then(response=>{
              setuserdata(response);
              setstatus(true)
              console.log("phase 2 sucessfull");
      }).catch(error=>{
          setstatus(false)
          console.log("error ocurred");
         setinitialdata("Check_the_UserName_And_Try_Again")
      })
  }

  
  return(
          <div>
              <div className="searchcontents">
                  <form onSubmit={fetchdatas}>
                      <input placeholder='Enter Username' onChange={usernameupdate}/>
                      <button type="submit">Generete Informations</button>
                  </form>
          </div>
         {
          (status)?<Maincontent userdata={userdata} data={data}/>:<div className='errormessage'>{initialdata}</div> 
         }
      </div>
  );

}

export default App
