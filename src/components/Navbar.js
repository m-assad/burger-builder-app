import './NavbarStyle.css';
export default  function Navbar () {
  return (
    <div className='NavigationItems'>
      <div className='appLogo'>
      </div>
      <div className='float-right'>
        <a href="#" className='NavigationItem'>Burgers</a>
        <a href="#" className='NavigationItem'>Login</a>
      </div>

    </div>
  );
};

