class StorageService {
    set<T>(key: string, data: T): boolean {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    }

    get<T>(key: string): T  {
        const data = localStorage.getItem(key);
        if (!data){
            throw new Error('No data available');
        }
        return JSON.parse(data) as T;
    }

}

export default new StorageService();