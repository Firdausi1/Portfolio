import React from 'react';
import './Footer.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

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
