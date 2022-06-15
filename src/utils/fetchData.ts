export const exerciseOptions = {
	method: 'GET',
	headers: {
	  'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
	  'X-RapidAPI-Key': 'b2b12a9ea8mshd7d8bab3728d3cap16f358jsn1ecd8933f732',
	},
  };
  
  export const youtubeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b2b12a9ea8mshd7d8bab3728d3cap16f358jsn1ecd8933f732',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	  },
  };
  

  export const fetchData = async (url:string, options: {}) => {
	const res = await fetch(url, options);
	const data = await res.json();
  
	return data;
  };