function dataTimes(){
    const times = document.querySelector('.times');
    const dates = document.querySelector('.dates');

    let data = new Date();

    let hour = data.getHours();
    let min = data.getMinutes();
    let sec = data.getSeconds();

    let year = data.getFullYear();
    let month = data.getMonth();
    let day = data.getDate();

    times.innerHTML = ( ("0" + hour).slice(-2) + ":" + ("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2) );
    dates.innerHTML = ( year + "/" + ("0" + month + 1).slice(-2) + "/" + ("0" + day).slice(-2) );
}

window.onload = function(){
    setInterval(dataTimes, 1000)
};