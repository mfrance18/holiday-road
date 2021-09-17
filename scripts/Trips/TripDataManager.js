export const createTrip = postObj => {
	return fetch("https://localhost:8088/trips", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(postObj)
  
	})
		.then(response => response.json())
  }

  export const getTrips = () =>{
	return fetch(`https://localhost:8088/trips`)
    .then(response => response.json())
    .then(parsedResponse => {
      return parsedResponse;
    })
  }
  
