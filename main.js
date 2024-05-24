const lingkaran = document.getElementById('lingkaran')
const luasLingkaran = document.createElement('p')
function hitunglingkaran() {
    var r = jarijari.value
    const l1 = 3.14 * r * r
    const l2 = 22/7 * r * r
    luasLingkaran.textContent = `hasilnya adalah jika 3.14 = ${l1} m2, jika 22/7 = ${l2}`
    lingkaran.append(luasLingkaran)
}

const segitiga = document.getElementById('segitiga')
const luasSegitiga = document.createElement('p')
function hitungsegitiga() {
    var a = alas.value
    var t = tinggi.value
    const l = a * t * 0.5
    luasSegitiga.innerHTML = `hasilnya adalah ${l} m2`
    segitiga.append(luasSegitiga)
}

const persegiPanjang = document.querySelector('.persegipanjang')
const luasPersegiPanjang = document.createElement('p')
function hitungpersegipanjang() {
    var p = panjang.value
    var le = lebar.value
    const l = p * le
    luasPersegiPanjang.innerText = `hasilnya adalah ${l} m2`
    persegiPanjang.append(luasPersegiPanjang)
}

const jajarGenjang = document.querySelector('.jajargenjang')
const luasJg = document.createElement('p')
function hitungjg() {
    var a = alasjg.value
    var t = tinggijg.value
    const l = a * t 
    luasJg.textContent = `hasilnya adalah ${l} m2`
    jajarGenjang.append(luasJg)
}
