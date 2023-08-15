import Profilecontent from "./Profilecontent";

function HeaderContent (props){
    let userdata=props.userdata;
    return(
        <header>
            <div className="profiledetials">
            <div className="image"><img src={userdata.data.avatar_url} alt="user profilr picture" /></div>
            <Profilecontent userdata={props.userdata}/>
            </div>
            <button><a href={userdata.data.html_url}>View Profile</a></button>
        </header>
    )
}
export default HeaderContent;