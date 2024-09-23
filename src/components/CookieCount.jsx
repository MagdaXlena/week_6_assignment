
import { useState, useEffect } from "react";
import './CookieCount.css'
import cookieImage from "/src/images/cookieImage.png"

export default function CookiesCount({cookies, setCookies, cookiesPerSec}) {


 
    function handleClick () {
        setCookies(cookies => cookies + 1)
    }
    

    useEffect(() => {
        console.log('Use effect is running')
        
// sam did the dodgy interval the destroys itself each second! 
    const cookieInterval = setInterval(() => {
        console.log('This is the interval running')
        setCookies(cookies => cookies + cookiesPerSec)
        localStorage.setItem('cookies', (cookies))
        console.log(cookies)
    }, 1000)


    return () => {
        clearInterval(cookieInterval)
    }

    }, [cookies])

    return (
        <div className='cookiesCount'>
            <h1 className="clickerName">React Cookie Clicker</h1>
            <img src={cookieImage} onClick = {handleClick}className="cookieImage"></img>
            <h2 className="cookies">Cookies: {cookies}</h2>
            <h2 className="cookiesPerSecond">Cookies per sec: {cookiesPerSec} </h2>
         
        </div>
    )
}