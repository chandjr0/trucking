import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../../assets/images/resources/footer-logo-1.png';

const MobileMenu = ({ handleMobileMenu }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: '',
    subMenuKey: '',
  });

  const handleToggle = (key, subMenuKey = '') => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: '',
        subMenuKey: '',
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };

  return (
    <>
      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler" onClick={handleMobileMenu}></div>
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler" onClick={handleMobileMenu}>
            <i className="fa fa-times"></i>
          </span>

          <div className="logo-box">
            <Link to="/" aria-label="logo image">
              <img src={logo} width="150" alt="Logo" />
            </Link>
          </div>

          <div className="mobile-nav__container">
            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
              <ul className="main-menu__list">
                <li className={isActive.key === 1 ? 'dropdown current' : ''}>
                  <Link to="/" onClick={handleMobileMenu}>Home</Link>
              
                  <div className={isActive.key === 1 ? 'dropdown-btn open' : 'dropdown-btn'} onClick={() => handleToggle(1)}>
                    <span className="fa fa-angle-right" />
                  </div>
                </li>
                <li><Link to="/about" onClick={handleMobileMenu}>About</Link></li>
     


                <li className={isActive.key === 4 ? 'dropdown current' : 'dropdown'}>
                  <Link to="/#" onClick={handleMobileMenu}>Services</Link>
                  <ul style={{ display: `${isActive.key === 4 ? 'block' : 'none'}` }}>
             
                    <li><Link to="/express-freight-solutions" onClick={handleMobileMenu}>Express Freight Solutions</Link></li>
                    <li><Link to="/quick-move-logistics" onClick={handleMobileMenu}>Quick Move Logistics</Link></li>
                    <li><Link to="/speedy-dispatch" onClick={handleMobileMenu}>Speedy Dispatch</Link></li>
                    <li><Link to="/swift-supply-chain" onClick={handleMobileMenu}>Swift Supply Chain</Link></li>
                    <li><Link to="/on-point-distribution" onClick={handleMobileMenu}>On Point Distribution</Link></li>
                  </ul>
                  <div className={isActive.key === 4 ? 'dropdown-btn open' : 'dropdown-btn'} onClick={() => handleToggle(4)}>
                    <span className="fa fa-angle-right" />
                  </div>
                </li>
                <li className={isActive.key === 5 ? 'dropdown current' : ''}>
                  <Link to="/#" onClick={handleMobileMenu}>Projects</Link>
                 
                  <div className={isActive.key === 5 ? 'dropdown-btn open' : 'dropdown-btn'} onClick={() => handleToggle(5)}>
                    <span className="fa fa-angle-right" />
                  </div>
                </li>
                <li className={isActive.key === 6 ? 'dropdown current' : ''}>
                  <Link to="/#" onClick={handleMobileMenu}>Blog</Link>
                
                  <div className={isActive.key === 6 ? 'dropdown-btn open' : 'dropdown-btn'} onClick={() => handleToggle(6)}>
                    <span className="fa fa-angle-right" />
                  </div>
                </li>
                <li><Link to="/contact" onClick={handleMobileMenu}>Contact</Link></li>
              </ul>
            </div>
          </div>
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <Link to="mailto:needhelp@lockdown.com">needhelp@lockdown.com</Link>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <Link to="tel:666-888-0000">666 888 0000</Link>
            </li>
          </ul>
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <Link to="#" className="fab fa-twitter"></Link>
              <Link to="#" className="fab fa-facebook-square"></Link>
              <Link to="#" className="fab fa-pinterest-p"></Link>
              <Link to="#" className="fab fa-instagram"></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
