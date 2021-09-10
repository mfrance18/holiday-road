import { settings } from "../Settings.js";

export const getParks = (selection) => {

const apiKey = settings.npsKey;

return fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${selection}&api_key=${apiKey}`)
    .then(response => response.json())
    .then(parsedResponse => {
        return parsedResponse;
    })

}