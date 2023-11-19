import { InfoOutlined } from '@mui/icons-material';
import { MailOutlineRounded } from '@mui/icons-material';
import { AiFillGithub } from "react-icons/ai";
import { CreateRounded } from '@mui/icons-material';
import { CopyrightRounded } from '@mui/icons-material';
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='left-footer'>
                <button className="footer-buttons" id="about">
                    <InfoOutlined/>
                    <p>about</p>
                </button>
                <button className="footer-buttons" id="contact">
                    <MailOutlineRounded/>
                    <p>contact</p>
                </button>
                <button className="footer-buttons" id="github">
                    <AiFillGithub fontSize="23px"/>
                    <p>github</p>
                </button>
                <button className="footer-buttons" id="authors">
                    <CreateRounded/>
                    <p>authors</p>
                </button>
            </div>
            <div className='right-footer'>
                <CopyrightRounded/> 
                <em>2023</em>
            </div>
        </div>
    )
}

export default Footer