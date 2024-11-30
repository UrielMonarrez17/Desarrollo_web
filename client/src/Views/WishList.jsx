import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/WishList.css";
import { useAuth } from "../auth/AuthContext";
import back from"../constants";
import { useNavigate } from "react-router-dom";

const WishList = () => {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();
    const [items, setItems] = useState([    ]);

    useEffect(() => {
        if(isAuthenticated){
            getUserWishList();
        }
        
    }, []);

    const getUserWishList=async()=>{
        const usuario=localStorage.getItem('user');
        const response = await axios.post(`${back.connection}/database/courses/user/wish`,
            {
                usuario
            }
        );
        //console.log("res:",response);
        setItems(response.data);
    }
    const handleRedirect=(courseId)=>{
        navigate(`/CoursesInside/${courseId}`);
    }
    return (
        <div className="wishlist-container">
            <h1 className="wishlist-title">My Wish List</h1>
            <div className="wishlist-items">
                {items.length>0?items.map((item, index) => (
                    <div key={item[0]._id || item[0].name} className="wishlist-card" onClick={()=>{handleRedirect(item[0].id)}}>
                        <img src={item[0].image} alt={"Curso de "+item[0].name} className="wishlist-image" />
                        <div className="wishlist-content">
                            <h5 className="wishlist-item-title">{item[0].name}</h5>
                            <p className="wishlist-item-author">Por {item[0].autor}</p>
                            <p className="wishlist-item-type">{item[0].Types.join(",")}</p>
                            <p className="wishlist-item-description">{item[0].description}</p>
                            <p className="wishlist-item-price"><strong>Precio:</strong> ${item[0].price}</p>
                        </div>
                    </div>
                )):"Al parecer no tienes cursos en tu lista de deseos"}

            </div>
        </div>
    );
};

export default WishList;
