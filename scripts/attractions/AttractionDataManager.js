export const getBizarres = () => {
  return fetch(`https://holidayroad.nss.team/bizarreries`)
  .then(response => response.json())
  .then(parsedResponse => {
      return parsedResponse;
  })
};

export const getAttraction = (input) => {
  return fetch(`https://holidayroad.nss.team/bizarreries/${input}`)
  .then(response => response.json())
  .then(parsedResponse => {
      return parsedResponse;
  })
}
