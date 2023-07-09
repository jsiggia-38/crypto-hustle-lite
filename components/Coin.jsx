import React, { useEffect, useState } from "react";
import './Coin.css'

const API_KEY = import.meta.env.VITE_APP_API_KEY;


const Coin = ({ image, name, symbol }) => {
    const [price, setPrice] = useState(null);


    useEffect(() => {
        const fetchCoinPrice = async () => {
            const response = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key=` + API_KEY);
            const json = await response.json();

            setPrice(json);

        };

        fetchCoinPrice().catch(console.error);

    }, [symbol]);

    return (
        <div>
            {price ? (
                <li className = "main-list" key = {symbol}>
                    <img className = "icons" src = {`https://www.cryptocompare.com${image}`} width = "50" height = "50" alt = {`Small icon for ${name} crypto coin`} />
                    {name}  
                    <span className = "tab"></span> ${price.USD} USD
                </li>

            ) : null
            
            }
        </div>
    )
};

export default Coin;