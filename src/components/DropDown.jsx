import { useState } from 'react';
import ArrowOpen from '../assets/arrow_open-24px.png';

const DropDown = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const clickOnArrow = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={`collapse ${isOpen ? "open" : ""}`}>
        <div className="headband">
          <div className="title">{title}</div>
          <div className={`arrow ${isOpen ? "rotate" : ""}`}>
            <img src={ArrowOpen} alt="Flèche vers le haut"  onClick={clickOnArrow} />
          </div>
        </div>
        <div className={`content ${isOpen ? "open" : ""}`}>
          <div className="content-text">{content}</div>
        </div>
      </div>
    );
};

export default DropDown;