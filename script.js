let count = 0;
let firstSave = true;
let increment = document.getElementById('count');
let saveNow = document.getElementById('saveEl');

//Menambahkan nilai count setiap kali button increase ditekan
function increse() {
    count++;
    increment.innerText = count;
}

//Menambahkan nilai previous entry setiap kali button save ditekan
function save() {
    let clickSave = " " + count;

    //Validasi firstSave atau tidak, bila tidak diberikan perintah baru
    if(!firstSave) {
        clickSave = " - " + count;
    }

    saveNow.innerText += clickSave;
    
    //Mengembalikan nilai increment dari 0 dan melakukan perhitungan ulang
    count = 0;
    increment.innerText = count;

    //Update firstSave agar tidak lagi bernilai true
    firstSave = false;
}