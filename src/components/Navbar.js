import { Link } from "react-router-dom";
import './NavbarStyle.css';
export default  function Navbar () {
  return (
    <div className='NavigationItems'>
      <Link to='/' className='appLogo'></Link>
      <div className='float-right'>
        <Link to='/' className='NavigationItem'>Burgers</Link>
        <Link to='/auth' className='NavigationItem'>Logout </Link>
      </div>
    </div>
  );
}

