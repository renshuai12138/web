
import request from "../../request/request";
import md5 from 'js-md5'
 
export function sendMailApi(data) {
    console.log(data)
    const token = sessionStorage.getItem('token')
    const name = data.name
    const title = data.title
    const content = data.content
    const chip = data.chip || 0;
    const diamond = data.diamond || 0;
    const item1 = data.item1 || 0;
    const itemCount1 = data.itemCount1 || 0;
    const timeLimit = data.timeLimit || 0;

    return request({
        url: 'api/send_email?token=' + token +'&name=' + name + '&title=' + title + '&content=' + content + '&chip=' + chip + '&diamond=' + diamond + '&item1=' + item1 + '&itemCount1=' + itemCount1 + '&timeLimit=' + timeLimit,
        method: "GET", 
    });
}

export function LonginApi(account, password) {
    password =  md5(password)
    return request({
        url: '/api/login?account=' + account +'&password=' + password ,
        method: "GET",
    });
}

export function selectEmailApi(startDate, endDate) {
    const token = sessionStorage.getItem('token')
    return request({
        url: '/api/select_email?token=' + token + '&startDate='+ startDate +'&endDate=' + endDate,
        method: "GET", 
    });
}

export function selectBanuserApi(startDate, endDate) {
    const token = sessionStorage.getItem('token')
    return request({
        url: '/api/select_banUser?token=' + token + '&startDate='+ startDate +'&endDate=' + endDate,
        method: "GET", 
    });
}



export function banuserApi(from) {
    const token = sessionStorage.getItem('token');
    const uid = from.uid;
    const bantime = from.bantime;
    const reason = from.reason;
    return request({
        url: '/api/banuser?token=' + token + '&uid=' + uid + '&bantime=' + bantime + '&reason=' + reason,
        method: "GET", 
    });
}
export function shutupUserApi(from) {
    const token = sessionStorage.getItem('token');
    const uid = from.uid;
    const bantime = from.bantime;
    const reason = from.reason;
    return request({
        url: '/api/shutup_user?token=' + token + '&uid=' + uid + '&bantime=' + bantime + '&reason=' + reason,
        method: "GET", 
    });
}


export function setSendChipMaxApi(from) {
    const token = sessionStorage.getItem('token');
    const uid = from.pid;
    const chip = from.coins;

    return request({
        url: '/api/setSendChipMax?token=' + token + '&uid=' + uid + '&chip=' + chip,
        method: "GET", 
    });
}




export function  pushApi(from) {
    const token = sessionStorage.getItem('token');
    const name = from.name;
    const content = from.content;
    const timeLimit = from.timeLimit;
    return request({
        url: '/api/push?token=' + token + '&name=' + name + '&content=' + content + '&timeLimit=' + timeLimit,
        method: "GET", 
    });
}

export function pushSendEmailApi(from) {
    const token = sessionStorage.getItem('token');
    const name = from.name;
    const content = from.content;
    const timeLimit = from.timeLimit;
    return request({
        url: '/api/send_email?token=' + token + '&name=' + name + '&content=' + content + '&timeLimit=' + timeLimit,
        method: "GET", 
    });
}


export function selectPushApi(startDate, endDate) {
    const token = sessionStorage.getItem('token');
    return request({
        url: '/api/select_push?token=' + token + '&startDate='+ startDate +'&endDate=' + endDate,
        method: "GET", 
    });
}

export function updateAdvertiseApi(from) {
    console.log(from.title)
    const token = sessionStorage.getItem('token');
    const area = from.area
    const platform = from.platform
    const channel = from.channel
    const deliveryType = from.deliveryType
    const deliveryDate = from.deliveryDate
    const title = from.title
    const cost = from.cost
    const rate = from.rate
    const display = from.display
    const click = from.click
    const install = from.install
    return request({
        url: '/api/update_advertise?token=' + token + '&area='+ area +'&platform=' + platform + '&channel='+ channel +'&deliveryType=' + deliveryType
        + '&deliveryDate='+ deliveryDate +'&title=' + title + '&cost='+ cost +'&rate=' + rate
        + '&display='+ display +'&click=' + click + '&install='+ install,
        method: "GET", 
    });
}

export function selectAdvertiseApi(startDate, endDate) {
    const token = sessionStorage.getItem('token');
    return request({
        url: '/api/select_advertise?token=' + token + '&startDate='+ startDate +'&endDate=' + endDate,
        method: "GET", 
    });
}

export function querypayrecordApi(uid, orders) {
    const token = sessionStorage.getItem('token');
    return request({
        url: '/api/querypayrecord?token=' + token + '&uid='+ uid +'&orders=' + orders,
        method: "GET", 
    });
}

export function test() {
    return request({
        url: '/',
        method: "GET", 
    });
}

export function findUser(page) {
    return request({
        url: '/finduser',
        method: "GET", 
        params:page
    });
}
export function adduser(from) {
    return request({
        url: '/adduser',
        method: "POST", 
        data:from
    });
}
export function addactivity(from) {
    return request({
        url: '/addactivity',
        method: "POST", 
        data:from
    });
}

export function findActivityList() {
    return request({
        url: '/findActivityList',
        method: "GET", 
    });
}

export function findcardid(cardid) {
    return request({
        url: '/getcardid',
        method: "GET", 
        params:cardid
    });
}






