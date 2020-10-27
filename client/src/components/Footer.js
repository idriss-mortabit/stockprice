import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {

    return (
        <footer  id="mvp-foot-wrap" className="left relative">
        <div id="mvp-foot-top" className="left relative">
          <div className="mvp-main-box">
            <div id="mvp-foot-menu-wrap" className="left relative">
              <div id="mvp-foot-menu" className="left relative">
                <ul className="mvp-foot-menu-list">
                
                  <li><Link to={"/"} >home</Link></li>
                  <li><Link to={"/news/politics"} >politics</Link></li>
                  <li><Link to={"/news/business"}  >business</Link></li>
                  <li><Link to={"/news/sports"}  >sports</Link></li>
                  <li><Link to={"/news/tech"}  >tech</Link></li>
                  <li><Link to={"/news/entertainment"} >entertainment</Link></li>
                  <li><Link to={"/news/lifestyle"}  >lifestyle</Link></li>
                  <li><Link to={"/news/world"}>world</Link></li>
                  <li><Link to={"/terms"} >terms of use</Link></li>
                  <li><Link to={"/privacy"} >privacy policy</Link></li>
                
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="mvp-foot-bot" className="left relative">
          <div className="mvp-main-box">
            <div id="mvp-foot-copy" className="left relative">
              <p>Copyright © {new Date().getFullYear()} TrendIndi, All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>

    );

}

export default Footer;