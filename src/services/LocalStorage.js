import {
    SETTINGS
} from './../config/settings';

const STORAGE_KEY = SETTINGS.storeName;

/**
 * Return data from localStorage 
 */
export function getAll() {
    return new Promise((resolve) => {
        resolve(localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem(STORAGE_KEY)) : []);
    });
}

/**
 * Save data in localStorage
 * @param { object } item
 */
export function save(data) {
    let dataMerge = localStorage.getItem(STORAGE_KEY) ? [...JSON.parse(localStorage.getItem(STORAGE_KEY)), data] : [data];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataMerge));
}

/**
 * Remove data in localStorage
 * @param { object } data 
 */
export function remove(data) {
    this.dataLocalStorage = this.dataLocalStorage.filter(item => item.id !== data.id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.dataLocalStorage));
}