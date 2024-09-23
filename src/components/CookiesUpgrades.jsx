import { useState, useEffect } from "react";
import './CookiesUpgrades.css'

export default function CookiesUpgrades({cookies, setCookies, cookiesPerSec, setCookiesPerSec}) {
    const [cookiesArray, setCookiesArray] = useState([]);

    useEffect(() => {
        async function fetchCookiesItems() {
            try {
                const response = await fetch('https://cookie-upgrade-api.vercel.app/api/upgrades');
                const cookiesUpgrade = await response.json();
                setCookiesArray(cookiesUpgrade);
                console.log(cookiesUpgrade);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCookiesItems();
    },[]);

    const handleBuyButton = (upgrade) => {
        console.log(upgrade)
        if (cookies >= upgrade.cost) {
           
            setCookies(cookies - upgrade.cost);
            setCookiesPerSec(cookiesPerSec + upgrade.increase);
        }

    };

    return (
        <div className="cookieShop">
        <h2 className="shop">SHOP</h2>
        <div className="cookiesUpgrade">
                {cookiesArray.map((upgrade) => {
                return (
                    <div key={upgrade.id} className="upgrades">
                        <div>{upgrade.name}</div>
                        <div>Cost: {upgrade.cost}</div>
                        <div>Per Hour: {upgrade.increase}</div>
                        <button className="buyButton" onClick={() => {handleBuyButton(upgrade)}}>Buy</button>
                    </div>
                )
            })}
        </div>
        </div>
    )
}
