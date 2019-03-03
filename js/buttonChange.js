function buttonChange1() {
    document.getElementById('id01').style.display='none';
    document.getElementById('join').innerText='Joined';
    document.getElementById('join').disabled=true;
}
function buttonChange2() {
    document.getElementById('friend1').innerText='Waiting for Accept';
    document.getElementById('friend1').disabled=true;
    document.getElementById('friend1').className="btn btn-outline-warning btn-sm"
}
function buttonChange3() {
    document.getElementById('friend2').innerText='Waiting for Accept';
    document.getElementById('friend2').disabled=true;
    document.getElementById('friend2').className="btn btn-outline-warning btn-sm"
}
function buttonChange4() {
    document.getElementById('friend3').innerText='Waiting for Accept';
    document.getElementById('friend3').disabled=true;
    document.getElementById('friend3').className="btn btn-outline-warning btn-sm"
}
