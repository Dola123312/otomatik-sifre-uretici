var değerler = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
var sonuç = "";
function şifreoluşturucu() {
    for (var i = 0, u = değerler.length; i < 16; ++i) {
        sonuç += değerler.charAt(Math.floor(Math.random() * u));
    }
    return sonuç;
}
console.log(şifreoluşturucu());
