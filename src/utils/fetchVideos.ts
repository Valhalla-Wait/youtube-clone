import axios from "axios";

const options = {
  method: 'GET',
  url: import.meta.env.VITE_API_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchData = async (url: string) => {
    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/${url}`, options)
    return data
}