// src/components/WishList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WishList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Llamada a la API para obtener los elementos de la wish list desde MongoDB
        axios.get('/api/wishlist')
            .then(response => setItems(response.data))
            .catch(error => console.error('Error fetching wishlist:', error));
    }, []);

    return (
        <div>
            <h1>My Wish List</h1>
            <ul>
                {items.map(item => (
                    <li key={item._id}>{item.name}</li> // Ajusta según tu esquema de MongoDB
                ))}
            </ul>
        </div>
    );
};

export default WishList;
