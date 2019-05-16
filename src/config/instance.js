import axios from 'axios';
import SETTINGS from './settings';

const INSTANCE = axios.create({
    baseURL: `${SETTINGS.apiEndpoint}`
});

export default INSTANCE;