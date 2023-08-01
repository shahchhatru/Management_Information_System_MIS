import { Link } from 'react-router-dom';
import './styles.css'

interface AdminOptionCardProps{
    Iid:string;
    imgPath:string;
    imgtext:string;
    title:string;
    linkaddr:string;
}

const AdminOptionCard = ({Iid,imgPath,imgtext,title,linkaddr}:AdminOptionCardProps)=>{
    return( 
        
        
        <div className="admin-option-card" id={Iid}>
           <div className='image-container'>
                <img src={imgPath} alt={imgtext} />
            </div>
            <div className='text-container'>
            <Link to={linkaddr} className='link-addr'>  <span>{title}</span></Link>
            </div>
            
        </div>
    
    )
}

export default AdminOptionCard;