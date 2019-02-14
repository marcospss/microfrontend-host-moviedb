import { SETTINGS as IMAGE_SETTINGS } from "../config/ImageSettings";
import axios from 'axios';
export class HelperProvider {

    /**
     * Performing multiple concurrent requests
     * @param {Array} requests 
     */
    multipleRequests(requests) {
        return axios.all(requests)
        .then(axios.spread((...requests) => {
            return {
                ...requests
            }
        }))
    }

    title(item) {
        return ((item.title) ? item.title : item.name);
    }
    posterImage(poster_path, size = 'w92') {
        const sizeImage = IMAGE_SETTINGS.poster_sizes[size];
        if (!poster_path) {
            return 'assets/images/default-image.png';
        }
        return `${IMAGE_SETTINGS.secure_base_url}${sizeImage}${poster_path}`;
    }

    backdropImage(backdrop_path, size = 'w300') {
        const sizeImage = IMAGE_SETTINGS.backdrop_sizes[size];
        if (!backdrop_path) {
            return 'assets/images/default-image.png';
        }
        return `${IMAGE_SETTINGS.secure_base_url}${sizeImage}${backdrop_path}`;
    }

    profileImage(profile_sizes, size = 'w185') {
        const sizeImage = IMAGE_SETTINGS.profile_sizes[size];
        if (!profile_sizes) {
            return 'assets/images/default-image.png';
        }
        return `${IMAGE_SETTINGS.secure_base_url}${sizeImage}${profile_sizes}`;
    }

    convertMinutesToTime(data) {
        const minutes = data % 60;
        const hours = (data - minutes) / 60;
        const totalMinutes = (minutes < 10) ? `0${minutes}` : minutes;
        return `${hours}h ${totalMinutes}m`;
    }

    scrollTopPage() {
        window.scrollTo(0, 0);
    }

}