let inputdiemly
let inputdiemhoa
let inputdiemsinh

inputdiemly = prompt("diemly")
inputdiemhoa = prompt("diemhoa")
inputdiemsinh = prompt("diemsinh")

let diemly = parseFloat(inputdiemly)
let diemhoa = parseFloat(inputdiemhoa)
let diemsinh = parseFloat(inputdiemsinh)



let Trungbình =(diemly + diemhoa + diemsinh)/3
document.write('Trung bình = ' + Trungbình.toFixed(2))
let tổng = diemsinh + diemhoa + diemly
document.write("tổng = " + tổng.toFixed(2))