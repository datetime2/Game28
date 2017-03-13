import md5 from 'md5'
import axios from 'axios'
const signKey = 'ZD4417JEFFDDSCC50H3FAE3C787D0E23'
//金额显示转换
export const toThousands = (value) => {
    let flg = false
    let num = value || 0
    let result = ''
    if (num < 0) {
        flg = true;
        num = Math.abs(num)
    }
    let numBer = num.toString()
    while (numBer.length > 3) {
        result = ',' + numBer.slice(-3) + result
        numBer = numBer.slice(0, numBer.length - 3)
    }
    if (numBer)
        result = (flg == true ? "-" : "") + numBer + result
    return result
}
//参数签名
export const createSign = (params) => {
    if (params instanceof Object) {
        let signArray = [], tempArray = [], emptyArray = []
        for (var i in params) {
            if (params.hasOwnProperty(i)) {
                if (params[i] != "") {
                    tempArray.push(new Array(i, params[i]))
                }
                else
                    emptyArray.push(i + '=' + '')
            }
        }
        let sortSignArray = tempArray.sort(function (x, y) {
            return x[0].localeCompare(y[0])
        })
        for (var j = 0; j < sortSignArray.length; j++) {
            signArray.push(sortSignArray[j][0] + "=" + sortSignArray[j][1])
        }
        let str = signArray.join('&')
        signArray.push('sign=' + md5(str + "&key=" + signKey))
        let newArray = signArray.concat(emptyArray)
        return newArray.join('&')
    }
    else return ''
}
//http Post
export const httpPost = (_apiUrl, _params) => {
    return new Promise((resolve, reject) => {
        axios.post(_apiUrl, _params, {
            headers:
            {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function (response) {
            resolve(response)
        }).catch(function (error) {
            console.log(error)
            reject(error)
        })
    })
}
export default {
    toThousands,
    createSign,
    httpPost
}