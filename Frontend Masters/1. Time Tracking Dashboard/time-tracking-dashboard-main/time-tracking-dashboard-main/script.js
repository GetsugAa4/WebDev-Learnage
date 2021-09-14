const previousTime = document.getElementsByClassName('previousTime');
const day = document.getElementsByClassName('daily');
const week = document.getElementsByClassName('weekly');
const month = document.getElementsByClassName('monthly');

function displayDaily() {
    // * Hide week and month
    for (i = 0 ; i < week.length ; i++) {
        week[i].style.display = 'none';
        month[i].style.display = 'none';
        day[i].style.display='block';
    }
    document.getElementById("dayButton").style.color='white';
    document.getElementById("weekButton").style.color='hsla(0, 0%, 100%, 0.404)';
    document.getElementById("monthButton").style.color='hsla(0, 0%, 100%, 0.404)';
    

}

function displayWeekly() {
    // * Hide day and month
    for (i = 0 ; i < week.length ; i++) {
        day[i].style.display = 'none';
        month[i].style.display = 'none';
        week[i].style.display='block';
    }
    document.getElementById("dayButton").style.color='hsla(0, 0%, 100%, 0.404)';
    document.getElementById("weekButton").style.color='white';
    document.getElementById("monthButton").style.color='hsla(0, 0%, 100%, 0.404)';
}

function displayMonthly() {
    // * Hide day and week
    for (i = 0 ; i < week.length ; i++) {
        day[i].style.display = 'none';
        week[i].style.display = 'none';
        month[i].style.display='block';
    }
    document.getElementById("dayButton").style.color='hsla(0, 0%, 100%, 0.404)';
    document.getElementById("weekButton").style.color='hsla(0, 0%, 100%, 0.404)';
    document.getElementById("monthButton").style.color='white';
}