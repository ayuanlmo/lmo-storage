# lmo-storage

封装了浏览器的localStorage，并提供了一些api 。无需其他任何依赖

## 安装

``` Bash
npm install lmo-storage
```

# 导入

```JavaScript
import Storage from 'lmo-storage';
```

## 使用

### API : set (插入一个键值对)

``` javascript
//该方法接收3个参数
//参数1 key 键名称(string) 必填
//参数2 val 值(string) 必填
//参数3 async 异步 (bool)默认为false 可选

//例：
import Storage from 'lmo-storage';
Storage.set('userName','admin')//插入一个键值对
````

### API : setAll (插入一组键值对)

``` javascript
//该方法接收1个参数
//参数1 data 存入的键值组(Array) 必填
//数组内由对象组成，每个对象格式为：
let obj = {
    key:'user',
    value:'admin123'
}
//例：
import Storage from 'lmo-storage';

const arr = [
    { key:'test1',value:'test1Value'},
    {key:'test2',value:'test2Value'}
];
Storage.setAll(arr)//插入一个键值对
````

### API : getKeys (获取所有键)
``` javascript
//该方法不接受任何参数
//返回一个数组 格式为：['key1','key2'...]

//例：
import Storage from 'lmo-storage';

const keys = Storage.getKeys();
console.log(keys);//['key,','key2','key3']
````

### API : forEach (获取所有键值)
```javascript
//该方法返回一个数组 格式为：
/**
 [
    {
        key:'test1,
        value:'test1Value'
    }
 ]
 * **/

//例：
import Storage from 'lmo-storage';

const arr = Storage.forEach();
console.log(arr);//[{}...]
```

### API : remove (移除某个键值)
```javascript
//该方法接收一个 参数
//参数1 key 移除的建名称(string) 必填

//例：
import Storage from 'lmo-storage';

Storage.remove('test1');
```

### API : removeAll (移除所有键值)
```javascript
//例：
import Storage from 'lmo-storage';

Storage.removeAll();
```