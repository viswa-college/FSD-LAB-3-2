let myChartInstance = null;
document.getElementById("btn").addEventListener("click", () => {
    getData();
});
document.getElementById("pie").addEventListener("click", () => {
    pieChart();
});
document.getElementById("line").addEventListener("click", () => {
    lineChart();
});
document.getElementById("bar").addEventListener("click", () => {
    barChart();
});
const contentEle = document.getElementById("content");

import { API_KEY } from './env.js';
async function getData() {
    contentEle.innerHTML = "";
    const value = document.getElementById("input").value;
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_KEY}`)
    let data = await res.json()
    contentEle.innerHTML += `
        <img src="https://openweathermap.org/img/wn/
${data.weather[0].icon}@2x.png" alt="icon"/>
        <p>Name : ${data.name}</p>
        <p>Temparture : ${data.main.temp}K</p>
        <p>Humoidity : ${data.main.humidity}K</p>
        <p>Pressure : ${data.main.pressure}</p>
        <p>Description : ${data.weather[0].description}</p>
    `
    
    
   
}

const getDataChart = async () => {
    const value = document.getElementById("input").value;
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${API_KEY}`)
    const data = await res.json();

    console.log(data);
     let xaxislabel = []
    let yaxisdata = [];
    let prevDate = null;
    for(let i=0;i<data.list.length;i++) {
        if(prevDate == null || prevDate != data.list[i].dt_txt.split(" ")[0]) {
        console.log(data.list[i].dt_txt)
        xaxislabel.push(data.list[i].dt_txt.split(" ")[0]);
        yaxisdata.push(data.list[i].main.temp-273);
        prevDate = data.list[i].dt_txt.split(" ")[0];
        }
        
    }

    return {
        xaxislabel,
        yaxisdata
    }
}

const barChart = async () => {
    const {xaxislabel , yaxisdata} = await getDataChart();

    const ctx = document.getElementById('myChart');


    
    if (myChartInstance) {
        myChartInstance.destroy();
    }
    myChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: xaxislabel.slice(0,6),
            datasets: [{
                label: '5 Days Temparture',
                data: yaxisdata.slice(0,6),
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

const pieChart = async () => {

    const {xaxislabel , yaxisdata} = await getDataChart();
    
    const ctx = document.getElementById('myChart');

    if (myChartInstance) {
        myChartInstance.destroy();
    }
    

    myChartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: xaxislabel.slice(0,6),
            datasets: [{
                label: '5 Days Temparture',
                data: yaxisdata.slice(0,6),
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

const lineChart = async () => {
    const {xaxislabel , yaxisdata} = await getDataChart();

    const ctx = document.getElementById('myChart');

    if (myChartInstance) {
        myChartInstance.destroy();
    }

    myChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xaxislabel.slice(0,6),
            datasets: [{
                label: '5 Days Temparture',
                data: yaxisdata.slice(0,6),
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}