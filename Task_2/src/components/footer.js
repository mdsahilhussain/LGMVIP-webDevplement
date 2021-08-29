import React from "react";
import "./style.css";
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
  return (
    <>
      <div className="footer">
        <div class="contain">
          <div class="col">
          <a href="https://github.com/mdsahilhussain">
              <GitHubIcon/>
            </a>
            <a href="https://mdsahilhussain.github.io/">
              <LanguageIcon/>
            </a>
            <a href="https://linkedin.com/in/md-sahil-hussain-75b5181a6">
              <LinkedInIcon/>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;