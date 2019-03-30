import {
    SETTINGS
} from './../config/settings';

const STORAGE_KEY = SETTINGS.storeName;

/**
 * Return data from localStorage 
 */
export function getAll() {
    return new Promise((resolve, reject) => {
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
    return new Promise((resolve, reject) => {
        const saveSuccess = !!dataMerge.filter(item => parseInt(item.id, 10) === data.id).length;
        if(saveSuccess) {
            resolve({
                message: 'Salvo com sucesso!'
            });
        } else {
            reject({
                message: 'Erro ao salvar'
            });
        }
        
    });
}

/**
 * Remove data in localStorage
 * @param { object } data 
 */
export function remove(data) {
    const dataLocalStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const removeFavorite = dataLocalStorage.filter(item => item.id !== data.id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(removeFavorite));
    return new Promise((resolve, reject) => {
        if(dataLocalStorage.length !== removeFavorite.length) {
            resolve({
                message: 'Removido com sucesso!'
            });
        } else {
            reject({
                message: 'Erro ao remover'
            });
        }
    });
}