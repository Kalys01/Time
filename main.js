function dataTimes(){
    const times = document.querySelector('.times');
    const dates = document.querySelector('.dates');
    const days = document.querySelector('.day');

    let data = new Date();

    let hour = data.getHours();
    let min = data.getMinutes();
    let sec = data.getSeconds();

    let year = data.getFullYear();
    let month = data.getMonth();
    let day = data.getDate();

    times.innerHTML = ( ("0" + hour).slice(-2) + ":" + ("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2) );
    dates.innerHTML = ( year + "/" + ("0" + month + 1).slice(-2) + "/" + ("0" + day).slice(-2) );

    let d = data.getDay();
    let week = '';
    switch (d) {
        case 0: week = "Sanday"; break;
        case 1: week = "Monday"; break;
        case 2: week = "Tuesday"; break;
        case 3: week = "Wednesday"; break;
        case 4: week = "Thursday"; break;
        case 5: week = "Friday"; break;
        case 6: week = "Saturday"; break;
    }
    days.innerHTML = week;
}

window.onload = function(){
    setInterval(dataTimes, 1000)
};