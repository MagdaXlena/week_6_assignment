import CookiesCount from "./components/CookieCount"
import CookiesUpgrades from "./components/CookiesUpgrades"
import { useEffect, useState } from "react";
// import cookieImage from "./images/cookieImage.png"



export default function App() {

  const storedCookies = JSON.parse(localStorage.getItem('cookies'))  
  const [cookies, setCookies] = useState(storedCookies || 100);
  const [cookiesPerSec, setCookiesPerSec] = useState (1);
  

  

  return (
    <>
      <div className='container'>
        <CookiesCount
        cookies={cookies}
        setCookies={setCookies}
        cookiesPerSec={cookiesPerSec}
        setCookiesPerSec={setCookiesPerSec}
        />
        <CookiesUpgrades
        cookies={cookies}
        setCookies={setCookies}
        cookiesPerSec={cookiesPerSec}
        setCookiesPerSec={setCookiesPerSec}/>
        </div>
        <div className='backgroundImage'></div>
    </>
  )
}

