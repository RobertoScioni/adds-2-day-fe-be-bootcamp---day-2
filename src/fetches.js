const createQuiz = async (candidateName, name) => {
	let url = process.env.REACT_APP_BACKEND + "exams/start"
	try {
		let params = JSON.stringify({ candidateName, name })
		console.log(params)
		let response = await fetch(url, {
			method: "POST",
			body: params,
			headers: new Headers({
				"Content-Type": "application/json",
			}),
		})
		response = await response.json()
		return response
		//console.log("user", response)
	} catch (e) {
		console.log("ERROR fetching HERE " + e)
	}
}

const addProfilePic = async (profile, userId) => {
	console.log("actually in")
	console.log(profile)
	console.log(userId)
	let TOKEN = process.env.REACT_APP_TOKEN
	try {
		let response = await fetch(
			`https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`,
			{
				headers: new Headers({
					Authorization: `Bearer ${TOKEN}`,
				}),
				method: "POST",
				body: profile,
			}
		)
		response = await response.json()
		if (response.ok) {
			alert("profile pic changed")
		}
		console.log("Response: " + response)
		return response
	} catch (e) {
		console.log("ERROR fetching HERE " + e)
	}
}
export { createQuiz }
