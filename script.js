let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');

let dclock = document.querySelector('.dclock');
let ddate = document.querySelector('.ddate');


setInterval(() => {
    d = new Date();
    console.log(d);
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();

    //analog clock
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

    //digital clock
    AmorPm = whichtime(htime);
    htime = hourclock(htime);
    htime = zerodigitsecond(htime);
    mtime = zerodigitsecond(mtime);
    stime = zerodigitsecond(stime);
    dfulldate = dateBuilder(d)


    dclock.innerHTML = htime + ':' + mtime + ':' + stime + ' ' + AmorPm;
    ddate.innerHTML = dfulldate;

}, 1000);


//function to  show full day and full month name
function dateBuilder(now) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[now.getDay()];
    let date = now.getDate();
    let month = months[now.getMonth()];
    let year = now.getFullYear();

    //code for white space copied from google
    return `${day} ‏‏‎ ‎ ${date} ${month}, ${year}`;
}



//find Morning Or Noon Time AM or PM
function whichtime(wt) {
    if (wt >= 0 && wt < 12) {
        AmorPM = "AM"
        return AmorPM;
    } else {
        AmorPM = "PM"
        return AmorPM;
    }
}


//convertibg 24hour clock to 12 hour system
function hourclock(twelvehour) {
    if (twelvehour > 12) {
        twelvehour = twelvehour - 12;
        return twelvehour;
    } else {
        twelvehour = twelvehour;
        return twelvehour;
    }

}


//adding zero to single digits
function zerodigithour(zerohour) {
    if (zerohour < 10) {
        zerohour = '0' + zerohour;
        return zerohour
    } else {
        return zerohour
    }
}


function zerodigitminute(zerominute) {
    if (zerominute < 10) {
        zerominute = '0' + zerominute;
        return zerominute
    } else {
        return zerominute
    }
}

function zerodigitsecond(zerosecond) {
    if (zerosecond < 10) {
        zerosecond = '0' + zerosecond;
        return zerosecond
    } else {
        return zerosecond
    }
}