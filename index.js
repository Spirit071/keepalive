import fetch from 'node-fetch';

var sum = 0;

async function fetchUrl(url, url2) {
    try {
        await fetch(url).then(res => res.headers.forEach(header => {
             sum += header.length; console.log(sum)
        }));
        await fetch(url2).then(res => res.headers.forEach(header => {
            sum += header.length; 
            console.log(sum)
        }))
    } catch (error) {
        console.error(`Error fetching ${url}: ${error.message}`);
    }
}

function fetchPeriodically() {
    fetchUrl('https://translateapi-x.onrender.com/', 'https://keepthatshitalive.onrender.com/');
    setInterval(() => {
        fetchUrl('https://translateapi-x.onrender.com/', 'https://keepthatshitalive.onrender.com/');
    }, 30000);
}

fetchPeriodically();
