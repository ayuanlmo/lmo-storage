export const ToString = (data) => {
    if (typeof (data) === 'boolean') return `${data}`;
    if (typeof (data) === 'string') return data;
    if (typeof (data) === 'number') return `${data}`;
    if (typeof (data) === 'object')
        if (IsJSON(data)) return stringify(data);
        else return ``;
}

export const IsJSON = (data) =>
     typeof (data) === 'object' && Object.prototype.toString.call(data).toLowerCase() === '[object object]' && data.length;

export const IsArray = (arr) =>
     Object.prototype.toString.call(arr) === "[object Array]";

export const IsString = (str) =>
     typeof (str) === 'string';

const stringify = (data) =>
    data === undefined ? '' : JSON.stringify(data);
