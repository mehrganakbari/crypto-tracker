import "../common/index.css"

const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=50&page=1";
const cryptoBox = document.querySelector("#ContentsBox");

const addCrypyo = (img, Nname, name, price , Pchenge, Phigh, Plow, update) => {
    cryptoBox.innerHTML += `
    <div class="bg-lite-blue flex justify-items-stretch w-full">
    <div
      class="border-r border-b border-l-dark-blue text-center py-2 px-3 text-lg w-1/5 flex justify-between items-center">
      <div class="flex items-center">
        <img src="${img}" alt="icon" class="h-6 w-6 mr-2">
        <span class="text-sm">${Nname}</span>
      </div>
      <div class="text-sm">${name}</div>
    </div>
    <div class="border-r border-b border-l-dark-blue text-center py-2 px-3 text-lg w-1/5">${price}</div>
    <div class="border-r border-b border-l-dark-blue text-center py-2 px-3 text-lg w-1/5">${Pchenge}</div>
    <div class="border-r border-b border-l-dark-blue text-center py-2 px-3 text-lg w-1/5">${Plow} <span
        class="text-dark-blue">|</span>  ${Phigh}</div>
    <div class="border-b text-center py-2 px-3 text-lg w-1/5">${update}</div>
  </div>
    `;
}

fetch(URL)
    .then((res) => res.json())
    .then((data) => {
        data.map((crypto) => {
            addCrypto(crypto.image, crypto.symbol, crypto.name, crypto.current_price, crypto.price_change_24h, crypto.high_24h, crypto.low_24h, crypto.last_updated);
            console.log(`img : ${crypto.image} - Nname : ${crypto.symbol} - name : ${crypto.name} - price : ${crypto.current_price} - Pchenge : ${crypto.price_change_24h} - Phigh : ${crypto.high_24h} - Plow : ${crypto.low_24h} - update : ${crypto.last_updated}`);
        })
    });

