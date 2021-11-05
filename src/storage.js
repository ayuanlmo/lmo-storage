import * as Tool from "../lib/tool";

const Storage = window.localStorage;

class Store {
    /**
     * 插入一个键值对
     * @method set
     * @param {string} key 键值
     * @param {string} val 值
     * @param {boolean} async [async = ![]] 异步 默认为false
     * **/
    set(key, val, async = ![]) {
        if (key !== '') {
            if (async) return new Promise((resolve, reject) => {
                const e = Storage.setItem(key, Tool.ToString(val));
                if (e === undefined) resolve(!![]);
                else reject(this);
            })
            else Storage.setItem(key, Tool.ToString(val));
        }
    }
    /**
     * 插入所有键值对
     * @method setAll
     * @param {Array} data 需要插入的数据(格式参见文档)
     * **/
    setAll(data) {
        if (Tool.IsArray(data))
            data.forEach(i => {
                if (i.key !== '')
                    if (i.value !== '')
                        Storage.setItem(i.key, i.value);
            });
        return this;
    }
    /**
     * 获取所有键值
     * @method getKeys
     * @return {Array} 键值list
     * **/
    getKeys(){
        let arr = [];
        for (let i = 0; i < Storage.length; i++) {
            arr.push(Storage.key(i));
        }
        return arr;
    }
    /**
     * 遍历所有键值
     * @method forEach
     * @return {Array} 键值list
     * **/
    forEach(){
        let arr = [];
        for (let i = 0; i < Storage.length; i++) {
            let k = Storage.key(i);
            arr.push({
                key:k,
                value:Storage.getItem(k)
            });
        }
        return arr;
    }
    /**
     * 移除一个键
     * @method remove
     * @param {string} key
     * **/
    remove(key){
        if(key !== ''){
            return Storage.removeItem(key);
        }
    }
    /**
     * 移除所有键
     * @method removeAll
     * **/
    removeAll(){
        Storage.clear();
    }
}

export default new Store();