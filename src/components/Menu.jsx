import React from 'react';
import {useState} from 'react';
import './Menu.css';

function Custom() {
  const [isTextVisible, setTextVisible] = useState(true);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [text2, setText2] = useState('');
  const [isWarnClicked, setWarnClicked] = useState(false);
  const [button2Color, setButton2Color] = useState('white');

  const handleTextButtonClick = () => {
    setTextVisible((prevIsTextVisible) => !prevIsTextVisible);
  };

  const handleClick2 = () => {
    if (text2 === '') {
      setButton2Color('red');
      setText2('Warning message');
      setWarnClicked(true);
    } else {
      setButton2Color('white');
      setText2('');
      setWarnClicked(false);
    }
  };

  const handleHintHover = () => {
    setPopupVisible(true);
  };

  const handleHintLeave = () => {
    setPopupVisible(false);
  };

  return (
    <div className='mainDiv'>
      <div className="custom">
        <button className={`text ${isWarnClicked ? 'warned' : ''}`} onClick={handleTextButtonClick}>
          Text
        </button>
        <button
          className="warning"
          onClick={handleClick2}
          style={{ backgroundColor: button2Color }}
        >
          Warning
        </button>
        <button className='hint' onMouseEnter={handleHintHover} onMouseLeave={handleHintLeave}>
          Hint
        </button>
      </div>
      {isTextVisible && (
        <p>
          This is a text.
        </p>
      )}
      {isPopupVisible && (
        <div className="popup">
          <p>This is a popup!</p>
        </div>
      )}
      {text2 && (
        <p className="warningMes">
          {text2}
        </p>
      )}
    </div>
  );
}

export default Custom;
