para= document.querySelector('#quotes');
id= document.querySelector('#serialno');
dice= document.querySelector('.dicebox');
var xhr = new XMLHttpRequest();
xhr.open('GET','https://api.adviceslip.com/advice',true)
xhr.send()
xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText)
        console.log(data);
        para.innerHTML = `" ${data.slip.advice}"`
        id.innerHTML = `ADVICE #${data.slip.id} `
    }
};
dice.addEventListener('click',()=>{
var xhr2 = new XMLHttpRequest();
xhr2.open('GET',`https://api.adviceslip.com/advice/${Math.floor(Math.random() * 300)}`,true)
xhr2.send()
xhr2.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText)
        console.log(data);
        para.innerHTML = `" ${data.slip.advice} "`
        id.innerHTML = `ADVICE #${data.slip.id}`
    }
};
})