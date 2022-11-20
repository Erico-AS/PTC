function masc_tel() {
    var tel = document.getElementById("num").value
    tel = tel.slice(0,14)
    document.getElementById("num").value = tel

    if (tel[0] != "(") {
        if (tel[0] != undefined) {
            document.getElementById("num").value = "(" + tel[0]
        }
    } if (tel[3] != ")") {
        if (tel[3] != undefined) {
            document.getElementById("num").value = tel.slice(0,3) + ")" + tel[3]
        }
    } if (tel[9] != "-") {
        if (tel[9] != undefined) {
            document.getElementById("num").value = tel.slice(0,9) + "-" + tel[9]
        }
    }
}