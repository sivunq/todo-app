export const get = (url) => {
    const request = new Request(url, {
        credentials: 'include',
        method: 'get',
        headers: {'Access-Control-Allow-Origin': '*'}
    });

    return makeGetRequest(request);
}

export const post = (url, body) => {
    const request = new Request( url, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    });
    console.log(body);
    
    return makeRequest(request);
}

const makeGetRequest = (request) => {
    return fetch(request)
    .then((response) => {
        console.log(response);
        if(response.ok) {
            return response.json();
        } else {
            return Promise.reject("Failed to Fetch: " + response.statusText);
        }
    });
}

const makeRequest = (request) => {
    return fetch(request)
    .then((response) => {
        console.log(response);
        if(response.ok) {
            return response.status;
        } else {
            return Promise.reject("Failed to Fetch: " + response.statusText);
        }
    });
}