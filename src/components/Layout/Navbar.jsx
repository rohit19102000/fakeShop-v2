import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { auth } from '../../Config/firebase'
import { useEffect, useState } from 'react';
export default function Navbar({ title }) {
const [userImg,setUserImg] = useState();



  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUserImg(user ? user.photoURL : null);
    });
    return () => unsubscribe();
  }, []);
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
      <Link to="/" className="text-lg font-bold align-middle">
     {title}
      </Link>
      </div>
      <div className="flex-1 px-2 mx-2">
        <div className="flex justify-end">
          <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
            home
          </Link>
          <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
            about
          </Link>
          <Link to="/contact-us" className="btn btn-ghost btn-sm rounded-btn">
            Contact Us
          </Link>
        
        <Link to="/Auth" className="btn btn-ghost btn-sm rounded-btn">
          {auth.currentUser?.photoURL ? (
          
              <img
                src={userImg}
                alt="Profile"
                className="h-8 w-8 rounded-full ml-2"
              />
            
          ) : (
           <> Log In</>
          )}
        </Link>


        </div>
      </div>
      </nav>
  )
}
Navbar.defaultProps ={
  title:' FakeShop'
}

Navbar.propTypes= {
  title: PropTypes.string,
}