const main = document.querySelector('.main');
const cancel = document.querySelector('.cancel');
const msg = document.querySelector('#msg');

while (true) {
    let n = prompt("love mo bako?");
    
    if(n == null) {
        main.style.display = "none";
        cancel.style.display = "flex";
        msg.innerHTML = "hi love";
    }

    if (n.length > 0) {
        alert("what if tayo talaga?");
        alert('what if sakin ka talaga?');
	alert('what if ipagdamot na kita?');
	alert("what if mahalin mo nako ng todo?");
	alert('kasi tayo talaga?');
	alert('minsan lang ako maging seryoso');
	alert('lalo na sa mga bagay na alam kong sigurado');
	alert('mamahalin mo ba ako hanggang dulo?');
        alert('ito na yung sagot mo sakin,' + n);
        main.style.display = 'block';
        break;
    }
}
