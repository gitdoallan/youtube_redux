import axios from 'axios';

export default async function fetchSearch(query) {
  const results = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyB7jQHQW89FlUM_Izw4i8HxgP2O5h3urjA&q=${query}`)
  return results.data;
}
