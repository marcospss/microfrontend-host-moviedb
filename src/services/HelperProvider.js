import axios from "axios";
import { toast } from "react-toastify";

import IMAGES_SETTINGS from "./../config/ImageSettings";
import defaultImage from './../assets/images/default-image.png';

/**
 * Performing multiple concurrent requests
 * @param {Array} requests 
 */
export function multipleRequests(requests) {
    return axios.all(requests)
        .then(axios.spread((...requests) => {
            return {
                ...requests
            }
        }))
}

export function title(item) {
    return ((item.title) ? item.title : item.name);
}

export function posterImage(poster_path, size = 'w92') {
    const sizeImage = IMAGES_SETTINGS.poster_sizes[size];
    if (!poster_path) {
        return `${defaultImage}`;
    }
    return `${IMAGES_SETTINGS.secure_base_url}${sizeImage}${poster_path}`;
}

export function backdropImage(backdrop_path, size = 'w300') {
    const sizeImage = IMAGES_SETTINGS.backdrop_sizes[size];
    if (!backdrop_path) {
        return `${defaultImage}`;
    }
    return `${IMAGES_SETTINGS.secure_base_url}${sizeImage}${backdrop_path}`;
}

export function profileImage(profile_sizes, size = 'w185') {
    const sizeImage = IMAGES_SETTINGS.profile_sizes[size];
    if (!profile_sizes) {
        return `${defaultImage}`;
    }
    return `${IMAGES_SETTINGS.secure_base_url}${sizeImage}${profile_sizes}`;
}

export function convertMinutesToTime(data) {
    const minutes = data % 60;
    const hours = (data - minutes) / 60;
    const totalMinutes = (minutes < 10) ? `0${minutes}` : minutes;
    return `${hours}h ${totalMinutes}m`;
}

export function scrollTopPage() {
    window.scroll(0,0);
}

export function toastContainer(type, message) {
    toast[type](message);
}

