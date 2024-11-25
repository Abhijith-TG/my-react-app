import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ name, image }) => {
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate(`/category/${name}`)
    }
  return (
    <div className="category-card" onClick={handleClick}>
        <div className="content">
          <div className="text">{name}</div>
        </div>
        <div className="image">
            <img src={image} alt="img"/>
        </div>
    </div>
  );
};

export default CategoryCard;
