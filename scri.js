
/* 
fazer o contador automatico 

*/
const contador = document.querySelector('.contador')
const items = document.querySelectorAll('.formato h4')


let tempdate = new Date();
let tempano = tempdate.getFullYear();
let tempmes = tempdate.getMonth();
let tempdia = tempdate.getDate();

const futuro = new Date(tempano, 3, 8, 18, 0, 0)
console.log(futuro);

const ano = futuro.getFullYear()
const hora = futuro.getHours()
const min = futuro.getMinutes()

const tempo = futuro.getTime()
console.log(tempo);

function restante(){
    const hoje = new Date().getTime()
    const t = tempo - hoje
    console.log(t);

    const ummes = 30.417*24*60*60*1000
    const umdia = 24*60*60*1000
    const umahora = 60*60*1000
    const umminuto = 60*1000

    let meses = Math.floor((t/ummes))
    let dias = Math.floor((t % ummes / umdia))
    let horas = Math.floor((t % umdia / umahora))
    let minutos = Math.floor((t % umahora / umminuto))
    let segundos = Math.floor((t % umminuto / 1000))

    const valores = [meses, dias, horas, minutos, segundos]

    function formato(item){
        if (item < 10){
            return ( item = `0${item}`)
        }
        return item
    }

    items.forEach(function(item, index){
        item.innerHTML = formato(valores[index])
    })
    if(t< 0){
        clearInterval(c)
        contador.innerHTML = `<h4 class="acabou"> A malinagem já aconteceu </h4>`
    }
}

let c = setInterval(restante, 1000)

restante()
