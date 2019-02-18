import { SETTINGS } from './../../core/config/settings';

const STORAGE_KEY = SETTINGS.storeName;

export class LocalStorage {

    dataLocalStorage = [];

    constructor() {
        this.dataLocalStorage = this.storage.get(STORAGE_KEY) || this.dataLocalStorage;
    }
    /**
     * Return data from localStorage 
     */
    getAll() {
        return this.dataLocalStorage;
    }

    /**
     * Save data in localStorage
     * @param { object } item
     */
    save(data) {
        this.dataLocalStorage = [...this.dataLocalStorage, data];
        localStorage.setItem(STORAGE_KEY, this.dataLocalStorage);
    }

    /**
     * Remove data in localStorage
     * @param { object } data 
     */
    remove(data) {
        this.dataLocalStorage = this.dataLocalStorage.filter(item => item.id !== data.id);
        localStorage.setItem(STORAGE_KEY, this.dataLocalStorage);
    }

}
