import { SETTINGS } from './../../core/config/settings';

const STORAGE_KEY = SETTINGS.storeName;

export class LocalStorage {

    /**
     * Return data from localStorage 
     */
    getAll() {
        return new Promise((resolve)=>{
            resolve(localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem(STORAGE_KEY)) : []);
        });
    }

    /**
     * Save data in localStorage
     * @param { object } item
     */
    save(data) {
        let dataMerge = localStorage.getItem(STORAGE_KEY) ?  [...JSON.parse(localStorage.getItem(STORAGE_KEY)), data] : [data];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataMerge));
    }

    /**
     * Remove data in localStorage
     * @param { object } data 
     */
    remove(data) {
        this.dataLocalStorage = this.dataLocalStorage.filter(item => item.id !== data.id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.dataLocalStorage));
    }

}
