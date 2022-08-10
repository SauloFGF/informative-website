export default function initFetchBitcoin() {

}

fetch('https://blockchain.info/ticker')
.then(response => response.json())
.then(json =>{
    const btcPreco = document.querySelector('.btc-preco')
    btcPreco.innerHTML = (100 / json.BRL.buy).toFixed(5)
    console.log(json.BRL.buy)
}).catch(erro => {
    console.log(Error(erro))
})