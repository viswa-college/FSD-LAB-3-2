             
import {API_KEY} from './env.js';

document.getElementById("btn").addEventListener("click", ()=>{
    getInfo();
});

const contentEle = document.getElementById("content");
async function getInfo() {
    console.log(API_KEY);
    const value = document.getElementById("input").value;
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_KEY}`)
    const data = await res.json()
    contentEle.innerHTML += `
        <img src="https://openweathermap.org/img/wn/
${data.weather[0].icon}@2x.png" alt="icon"/>
        <p>Name : ${data.name}</p>
        <p>Temparture : ${data.main.temp}K</p>
        <p>Humoidity : ${data.main.humidity}K</p>
        <p>Pressure : ${data.main.pressure}</p>
        <p>Description : ${data.weather[0].description}</p>
    `
    console.log(data);
}