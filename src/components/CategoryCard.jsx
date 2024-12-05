import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ name, image }) => {
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate(`/category/${name}`)
    }
  return (
    <div className="category-cardd" onClick={handleClick}>
        <div className="contentt">
          <div className="textt">{name}</div>
        </div>
        <div className="imagee">
            <img src={image} alt="img"/>
        </div>
    </div>
  );
};

export default CategoryCard;
