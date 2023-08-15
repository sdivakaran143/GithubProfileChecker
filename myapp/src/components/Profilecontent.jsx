function Profilecontent (props){
    let userdata=props.userdata;
    return(
            <div className="Profilecontent">
                <h2>{userdata.data.name}</h2>
                <h4>{userdata.data.login}</h4>
                <h6>{userdata.data.bio}</h6>
                <h6>{userdata.data.location}</h6>
                <h6>{userdata.data.twitter_username}</h6>
                <h6>followers : {userdata.data.followers}</h6>
                <h6>following : {userdata.data.following}</h6>
                <h6>Public_repos : {userdata.data.public_repos}</h6>
                <h6>Last_Actived_At : {userdata.data.updated_at}</h6>
            </div>
    )
}
export default Profilecontent;