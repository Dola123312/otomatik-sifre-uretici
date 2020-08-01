var degerler = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@£$%^&*().,?0123456789",sonuc = "";
function sifreolusturucu() {
    for (var i = 0, u = degerler.length; i < 16; ++i) {
        sonuc += degerler[Math.floor(Math.random() * u)];
    }return sonuc;
}
console.log(sifreolusturucu());
