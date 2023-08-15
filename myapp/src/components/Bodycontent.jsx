import { useState,useEffect } from "react";
import axios from "axios";

function Fectchlanguage(props){
    const [languages,setLanguages]=useState([]);

    useEffect(() => {    
        axios.get(props.link).then(response=>{
            setLanguages(Object.keys(response.data));
        });
    },[props.link])
    return(
       <ul>
        { languages.map(languages=>(
                <li keys={languages}>{languages}</li>
        ))}
       </ul>
    );
}

function Bodycontent(props){
    console.log("pharse 3 done ");
    return(
        <div className="Contentbody">
        {
            props.data.map(x=>{
                return(
                    <a href={x.html_url} target="_blank" className="repoCards" key={x.id} >
                        <h2>{x.name}</h2>
                        <h5>&nbsp;{x.description}</h5>
                        <Fectchlanguage link={x.languages_url}/>
                        <span className="branch">{x.default_branch}</span>
                    </a>
                )
            })
        }
    </div>
    )
}
export default Bodycontent;

