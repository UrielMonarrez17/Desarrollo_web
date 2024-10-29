import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/WishList.css";
import mascota from "../images/Mascota.png";

const WishList = () => {
    const [items, setItems] = useState([
        {
            name: "Juanito",
            tipos: ["Química", "+18"],
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
            price: 1000.0,
            image: mascota,
            nombre: "Dinovison",
            autor: "Alexis",
            url: "https://megustas.com"
        }
    ]);

    useEffect(() => {
        axios.get('/api/wishlist')
            .then(response => setItems(response.data))
            .catch(error => console.error('Error fetching wishlist:', error));
    }, []);

    return (
        <div className="wishlist-container">
            <h1 className="wishlist-title">My Wish List</h1>
            <div className="wishlist-items">
                {items.map(item => (
                    <div key={item._id || item.name} className="wishlist-card">
                        <img src={item.image} alt={item.name} className="wishlist-image" />
                        <div className="wishlist-content">
                            <h5 className="wishlist-item-title">{item.name}</h5>
                            <p className="wishlist-item-author">Por {item.autor}</p>
                            <p className="wishlist-item-type">{item.tipos.join(", ")}</p>
                            <p className="wishlist-item-description">{item.description}</p>
                            <p className="wishlist-item-price"><strong>Precio:</strong> ${item.price}</p>
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="wishlist-link">Más información</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WishList;
