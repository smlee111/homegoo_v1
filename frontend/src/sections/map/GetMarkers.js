// axios
import axios from 'axios';

// Marker API
export default async function GetMarkers() {
    const response = await axios.get(`http://127.0.0.1:8000/api/land`);
    console.log(response.data);

    return response.data;
}