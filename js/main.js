const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById("stop");
const reset_btn = document.getElementById("reset");

let seconds = +(prompt("Necha soniya"));
let min = +((prompt("Necha daqiqa"))) ;
let hour = +(prompt("Necha soat"));


time_el.innerText = hour.toString().padStart(2,0) +":"+ min.toString().padStart(2,0) + ":" + seconds.toString().padStart(2,0);
seconds = seconds + min * 60 + hour * 3600


let interval = null

start_btn.addEventListener('click', start);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", reset);


function timer () {
	seconds-- ;


	let hrs = Math.floor(seconds / 3600);
	let mins = Math.floor((seconds - (hrs * 3600)) / 60);
	let secs = seconds % 60;

	if (secs < 10) secs = '0' + secs;
	if (mins < 10) mins = "0" + mins;
	if (hrs < 10) hrs = "0" + hrs;

	if(seconds == 0){
		clearInterval(interval)
		audio.play()
	}

	time_el.innerText = `${hrs}:${mins}:${secs}`;
}

function start () {

	if (interval) {
		return
	}

	interval = setInterval(timer, 1000);
}


function stop () {
	clearInterval(interval);
	interval = null;
}

function reset () {
	stop();
	seconds = 0;
	time_el.innerText = '00:00:00';
}

