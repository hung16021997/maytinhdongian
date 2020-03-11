function nhap(a) {
    document.getElementById("kq").value+= a;
}
function giai() {
    let x= document.getElementById("kq").value;
    let y= eval(x);
    document.getElementById("kq").value= y;
}
function xoa() {
    document.getElementById("kq").value="";
}