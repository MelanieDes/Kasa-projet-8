import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import logements from "../data/Logements.json";
import arrowLeft from "../assets/arrowLeft.png";
import arrowRight from "../assets/arrowRight.png";


const Carrousel = ({ selectedData }) => {
  
    const [pictures, setPictures] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const { id } = useParams();
  
    useEffect(() => {
      const selectedData = logements.find((item) => item.id === id);
      if (selectedData) {
        setPictures(selectedData.pictures);
        setCurrentIndex(0);
      }
    }, [id]);

    const prevPicture = () => {
      setCurrentIndex((currentIndex) => (currentIndex === 0 ? pictures.length - 1 : currentIndex - 1));
    };

    const nextPicture = () => {
      setCurrentIndex((currentIndex) => (currentIndex === pictures.length - 1 ? 0 : currentIndex + 1));
    };

    if (pictures.length === 1) {
      return (
        <div className="carrousel">
          <img src={pictures[currentIndex]} alt={id} className="carrouselPicture" />
        </div>
      );
    }    
  
    return (
      <div className="carrousel">
        <img src={pictures[currentIndex]} alt={id} className="carrouselPicture"/>
        {pictures.length > 1 && (<img src={arrowLeft} alt="Flèche gauche" onClick={prevPicture} className="arrow left-arrow" />)}
        {pictures.length > 1 && (<img src={arrowRight} alt="Flèche droite" onClick={nextPicture} className="arrow right-arrow" />)}        
        <div className="counter">{`${currentIndex + 1}/${pictures.length}`}</div>
      </div>
    );
    
};

export default Carrousel;