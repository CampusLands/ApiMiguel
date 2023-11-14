const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3b522fc6e1msh852f40fc083b4f6p1bb400jsn61f2efd17a96',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

fetch('https://youtube138.p.rapidapi.com/video/details/?id=7w4KKZBLXsY&hl=en&gl=US', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));