const imgs = document.getElementById("contaniner")
const img = document.querySelectorAll("#contaniner img")

let idx = 0

function carrosel() {
    idx++

    if (idx > img.length - 1) {
        idx = 0
    }

    imgs.style.transform = `translateX(${-idx * 100}vw)`

}
setInterval(carrosel, 3000)

const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})
