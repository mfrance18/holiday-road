export const getEateries = () => {
  return fetch(`https://cors-anywhere.herokuapp.com/http://holidayroad.nss.team/eateries`)
    .then(response => response.json())
    .then(parsedResponse => {
      return parsedResponse;
    })
}

export const getEatery = (input) => {
  return fetch(`https://cors-anywhere.herokuapp.com/http://holidayroad.nss.team/eateries/${input}`)
    .then(response => response.json())
    .then(parsedResponse => {
      return parsedResponse;
    })
}