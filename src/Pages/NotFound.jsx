import {FaHome} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='hero'>
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <div className="text-8xl font-bold mb-8 ">
             <img className=' animate-bounce' src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404"/>
        
  
          <p className="text-5xl mb-8">404 - Page not found!</p>
          </div>
         <Link to='/' className="btn btn-primary btn-lg  animate-pulse" >
           <FaHome className='mr-2 ' />
         back to home 
         </Link>

        </div>
      </div>
      
     </div>
  
  )
}
