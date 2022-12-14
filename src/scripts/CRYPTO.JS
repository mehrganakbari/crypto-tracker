const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=50&page=1";
const cryptoBox = document.getElementById("ContentsBox");

const addCrypyo = (img, Nname, name, price , Pchenge, Phigh, Plow, update) => {
    cryptoBox.innerHTML += `
    <div class="bg-lite-blue flex justify-items-stretch w-full">
    <div
      class="border-r border-b border-l-dark-blue text-center py-2 px-3 text-lg w-1/5 flex justify-between items-center">
      <div class="flex items-center">
        <img src="${crypto.image}" alt="icon" class="h-6 w-6 mr-2">
        <span class="text-sm">${crypto.symbol}</span>
      </div>
      <div class="text-sm">${crypto.name}</div>
    </div>
    <div class="border-r border-b border-l-dark-blue text-center py-2 px-3 text-lg w-1/5">${crypto.current_price}</div>
    <div class="border-r border-b border-l-dark-blue text-center py-2 px-3 text-lg w-1/5">${crypto.price_change_24h}</div>
    <div class="border-r border-b border-l-dark-blue text-center py-2 px-3 text-lg w-1/5">${crypto.low_24h} <span
        class="text-dark-blue">|</span>  ${crypto.high_24h}</div>
    <div class="border-b text-center py-2 px-3 text-lg w-1/5">${crypto.last_updated}</div>
  </div>
    `;
  };

fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
        data.map((crypto) => {
            addCrypto(crypto.image, crypto.symbol, crypto.name, crypto.current_price, crypto.price_change_24h, crypto.high_24h, crypto.low_24h, crypto.last_updated);
            console.log(`img : ${crypto.image} - Nname : ${crypto.symbol} - name : ${crypto.name} - price : ${crypto.current_price} - Pchenge : ${crypto.price_change_24h} - Phigh : ${crypto.high_24h} - Plow : ${crypto.low_24h} - update : ${crypto.last_updated}`);
          });
    });