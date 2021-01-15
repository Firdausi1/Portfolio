import React from 'react';
import './Footer.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
    return (
        <div className="footer">
            <p>All right reserved Firdausy @ 2020</p>
            <div className="footer__socials">
            <TwitterIcon/>
                <LinkedInIcon/>
                <GitHubIcon/>
            </div>
            
        </div>
    )
}

export default Footer
