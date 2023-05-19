import React, { useEffect, useState } from 'react';
import './TextChangingComponent.css';

const TextChangingComponent = () => {
    const texts = ['Responsive Design','HTML5','CSS3','JavaScript', 'Bootstrap', 'React', 'CSS','JQuery'];
    const [index, setIndex] = useState(0);
    const [currentText, setCurrentText] = useState(texts[index]);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 2000);
  
      return () => clearInterval(interval);
    }, []);
  
    useEffect(() => {
      setCurrentText(texts[index]);
    }, [index]);
  
    return <div className="text-changing">{currentText}</div>;
  };

export default TextChangingComponent;