//options
export const exerciseOptions = {
	method: 'GET',
	url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
	headers: {
	  'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
	  'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
  };
  
  //options
  export const youtubeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key':  process.env.REACT_APP_RAPID_API_KEY,
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	  },
  };
  

  //function to fetch data
  export const fetchData = async (url , options) => {
	const res = await fetch(url, options);
	const data = await res.json();
	return data;
  };