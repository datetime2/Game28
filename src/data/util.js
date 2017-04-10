import md5 from 'md5'
import axios from 'axios'
import {Toast,Indicator} from 'mint-ui'
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
//日期格式化
export const dateFormat = (date, format) => {
    if (typeof date === "string") {
        var mts = date.match(/(\/Date\((\d+)\)\/)/);
        if (mts && mts.length >= 3) {
            date = parseInt(mts[2]);
        }
    }
    date = new Date(date);
    if (!date || date.toUTCString() === "Invalid Date") return "";
    var map = {
        "M+": date.getMonth() + 1,          //月份 
        "d+": date.getDate(),                    //日 
        "h+": date.getHours(),                  //小时 
        "m+": date.getMinutes(),              //分 
        "s+": date.getSeconds(),                //秒 
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
        "S": date.getMilliseconds()             //毫秒 
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in map) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (map[k]) : (("00" + map[k]).substr(("" + map[k]).length)));
        }
    }
    return format;
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
        signArray.push('sign=' + (md5(str + "&key=" + signKey)).toUpperCase())
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
//http Get
export const httpGet = (_apiUrl, _params) => {
    return new Promise((resolve, reject) => {
        axios.get(_apiUrl, { params: _params }).then(function (response) {
            resolve(response)
        }).catch(function (error) {
            Indicator.close()
            Toast('数据获取异常')
            reject(error)
        })
    })
}
//判断数组中是否包含元素
export const inArray = (_element, _array) => {
    if (typeof _element == "string" || typeof _element == "number") {
        var len = _array.length
        for (var i = 0; i < len; i++) {
            if (_element === _array[i]) {
                return true;
            }
        }
        return false;
    }
}
//数字对比
export const lowerBound = (num, limit) => {
    return num >= limit ? num : limit
}
export default {
    toThousands,
    createSign,
    httpPost,
    httpGet,
    inArray,
    dateFormat,
    lowerBound
}