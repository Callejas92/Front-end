function saudacao() {
    var data = new Date();
    var hora = data.getHours();
    if (hora < 10) {
        alert("Bom dia");
    } else if (hora < 18) {
        alert("Boa Tarde");
    } else {
        alert("Boa Noite");
    }
}