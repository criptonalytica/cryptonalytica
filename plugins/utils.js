import Vue from 'vue'

const utils = {
    stringfy(str = '') {
        const strArr = str.split(' ');
        const snakeArr = strArr.reduce((acc, val) => {
            return acc.concat(val.toLowerCase());
        }, []);
        return snakeArr.join('-');
    },
}

export default ({ context }, inject) => {
    inject('utils', utils)
}