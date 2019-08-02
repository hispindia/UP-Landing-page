import deepmerge from "deepmerge"

const auth = "Basic " + btoa("fredrik:Fredrik@1234"); 

let baseUrl = "http://apps.hispindia.org/uphmis230/";
let baseOptions = {
    mode: "cors",
    credentials: "include",
};

function setBaseUrl() {
    if (process.env.NODE_ENV === "production") {
        fetch('./manifest.webapp')
            .then(response => response.json())
            .then(manifest => {
                baseUrl = `${manifest.activities.dhis.href}` + '/api/';
            })
            .catch(e => {
                console.error('Could not read manifest:', e);
            });
    } else {
        // Localy we want to use hardcoded credentials.
        console.log("Running localy: Using hardcoded credentials.");

        baseOptions = {
            headers: {
                Authorization: auth,
                "Access-Control-Allow-Credentials": true,
            }
        };
    }
}

/**
 * Allows you to fetch an endpoint in the API
 *
 * @param endpoint The endpoint you want to fetch
 * @param method The method of the request (eg. GET or POST)
 * @param queryParams The query parameters for your request
 * @param body The body of the request
 * @param options Extra options you might want to define
 * @returns {Promise<Response>}
 */
function dhisRequest(endpoint, method, {queryParams, body, options} = {}) {
    if (options !== undefined) {
        options = deepmerge(baseOptions, options);
    } else {
        options = baseOptions;
    }

    const opts = {...{method: method}, ...{body: body}, ...options};
    const url = new URL(endpoint, baseUrl);

    if (queryParams) {
        Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]));
    }

    return fetch(url, opts)
        .then(response => {
            return response.json();
        })
}

setBaseUrl();

export {dhisRequest};