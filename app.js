new Vue({
    el: '#app',
    data: {
      loading: true,
      tokens: []
    },
    mounted() {
      axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd',
          ids: 'ethereum,bitcoin,cardano,matic'
        }
      })
        .then(response => {
          this.tokens = response.data;
          this.loading = false;
        })
        .catch(error => {
          console.error('Error fetching data from CoinGecko API');
        });
    }
  });
  