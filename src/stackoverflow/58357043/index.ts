import axios from 'axios';

const getAreas = area => axios.get(`/test/areas/${area}`);

export default getAreas;
