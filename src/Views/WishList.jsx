import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/WishList.css";
import back from"../constants";
import mascota from "../images/Mascota.png";

const WishList = () => {

    const [items, setItems] = useState([    ]);

    useEffect(() => {
        getUserWishList();
    }, []);

    const getUserWishList=async()=>{
        const usuario=localStorage.getItem('user');
        const response = await axios.post(`${back.connection}/database/courses/user/wish`,
            {
                usuario
            }
        );
        console.log("res:",response);
        setItems(response);
    }

    return (
        <div className="wishlist-container">
            <h1 className="wishlist-title">My Wish List</h1>
            <div className="wishlist-items">
                {items.length>0?items.map(item => (
                    <div key={item._id || item.name} className="wishlist-card">
                        <img src={item.image} alt={item.name} className="wishlist-image" />
                        <div className="wishlist-content">
                            <h5 className="wishlist-item-title">{item.name}</h5>
                            <p className="wishlist-item-author">Por {item.autor}</p>
                            <p className="wishlist-item-type">{item.Types.join(", ")}</p>
                            <p className="wishlist-item-description">{item.description}</p>
                            <p className="wishlist-item-price"><strong>Precio:</strong> ${item.__v}</p>
                        </div>
                    </div>
                )):"Al parecer no tienes cursos en tu lista de deseos"}

            </div>
        </div>
    );
};

export default WishList;
