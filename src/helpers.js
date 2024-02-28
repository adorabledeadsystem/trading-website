function numberWithComma(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

const getFormatTime = date => {
    let hours = date.getHours()
    let minutes = date.getMinutes();
    
    if (minutes >= 0 && minutes <= 9) minutes = '0' + minutes
    if (hours >= 0 && hours <= 9) hours = '0' + hours

    console.log(hours, minutes)

    return `${hours}:${minutes}`
}

export { numberWithComma, getRandom, getFormatTime }