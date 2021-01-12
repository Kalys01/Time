function dataTimes(){
    const times = document.querySelector('.times');
    let data = new Date();

    let hour = data.getHours();
    let min = data.getMinutes();
    let sec = data.getSeconds();

    times.innerHTML = (("0" + hour).slice(-2) + ":" + ("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2));
}

window.onload = function(){
    setInterval(dataTimes, 1000)
};