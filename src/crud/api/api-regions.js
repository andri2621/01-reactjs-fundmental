import axios from 'axios';
import apiURL from '../config/config-url';


const listRegion = async () => {
    try {
        let response = await axios.get(`${apiURL}/regions/`)
        return await response.data
      } catch(err) {
        return await err.message
      }
};


export {listRegion}