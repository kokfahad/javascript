function ageInDays() {
    var birthYear = prompt("What year you born....dear friend ?");
    var ageIndaysCount = (2022 - birthYear) * 365 ;
    // console.log(ageIndaysCount)
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are '+ ageIndaysCount + ' days old.');
    h1.setAttribute('id','ageIndays');
    h1.appendChild(textAnswer)
    document.getElementById('flex-box-result').appendChild(h1);
    // document.getElementById('ageIndays').innerHTML = 'You are '+ ageIndaysCount + ' days old.';
}

function reset(){
    document.getElementById('ageIndays').remove();
}