// Free CoinGecko API - no key needed for basic endpoints
const CRYPTO_IDS = ['bitcoin', 'ethereum', 'ripple'];
const CRYPTO_SYMBOLS = {
  'bitcoin': 'BTC',
  'ethereum': 'ETH', 
  'ripple': 'XRP'
};

async function fetchCryptoPrices() {
  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple&vs_currencies=usd&include_24hr_change=true'
    );
    const data = await response.json();
    
    // Update prices
    Object.entries(data).forEach(([id, info]) => {
      const symbol = CRYPTO_SYMBOLS[id];
      const priceElement = document.getElementById(`${symbol.toLowerCase()}-price`);
      const changeElement = document.getElementById(`${symbol.toLowerCase()}-change`);
      
      if (priceElement) {
        priceElement.textContent = '$' + info.usd.toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
      }
      
      if (changeElement) {
        const change = info.usd_24h_change;
        const isUp = change >= 0;
        changeElement.textContent = (isUp ? '+' : '') + change.toFixed(2) + '%';
        changeElement.className = 'crypto-change ' + (isUp ? 'up' : 'down');
      }
    });
  } catch (error) {
    console.error('Crypto fetch error:', error);
    // Fallback
    document.querySelectorAll('.crypto-price').forEach(el => {
      if (el.textContent === 'Loading...') el.textContent = '--';
    });
  }
}

// Fetch on load and every 60 seconds
fetchCryptoPrices();
setInterval(fetchCryptoPrices, 60000);
