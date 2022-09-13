const dividir = function(){
    let x = document.getElementById('x').value
    let y = document.getElementById('y').value
    z = parseFloat(x) / parseFloat(y)
    document.getElementById('z').value = z
}
const apagaNúmero = function(){
    document.getElementById ('x').value = ""
    document.getElementById ('y').value = ""
    document.getElementById('z').value = ""
}