import fetch from 'node-fetch';

async function fetchUrl(url, url2) {
    try {
        await fetch(url)
        await fetch(url2)
    } catch (error) {
        console.error(`Error fetching ${url}: ${error.message}`);
    }
}

function fetchPeriodically() {
    setInterval(() => {
        fetchUrl('https://translateapi-x.onrender.com/', 'https://keepthatshitalive.onrender.com/');
    }, 30000);
}

fetchPeriodically();
