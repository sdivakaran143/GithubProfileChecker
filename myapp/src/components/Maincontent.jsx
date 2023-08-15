import Bodycontent from './Bodycontent';
import Header from './HeaderContent';
function Maincontent (props){
    return(
        <div>
            < Header userdata={props.userdata}/>
            <h2 className="title">Public Repositories</h2>
            <Bodycontent data={props.data}/>
        </div>
    )
}
export default Maincontent;