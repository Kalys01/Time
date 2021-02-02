function dataTimes(){
    const times = document.querySelector('.times');
    const dates = document.querySelector('.dates');
    const days = document.querySelector('.day');

    let data = new Date();

    let hour = data.getHours();
    let min = data.getMinutes();
    let sec = data.getSeconds();

    let year = data.getFullYear();
    let month = data.getMonth() + 1;
    let day = data.getDate();

    times.innerHTML = ( ("0" + hour).slice(-2) + ":" + ("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2) );
    dates.innerHTML = ( year + "/" + ("0" + month).slice(-2) + "/" + ("0" + day).slice(-2) );

    let d = data.getDay();
    let week = '';
    switch (d) {
        case 0: week = "Жекшемби"; break;
        case 1: week = "Дүйшөмбү"; break;
        case 2: week = "Шейшемби"; break;
        case 3: week = "Шаршемби"; break;
        case 4: week = "Бейшенби"; break;
        case 5: week = "Жума"; break;
        case 6: week = "Ишемби"; break;
    }
    days.innerHTML = week;
}

window.onload = function(){
    setInterval(dataTimes, 1000)
};