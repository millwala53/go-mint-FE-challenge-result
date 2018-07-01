export default {
  url: 'https://api.coinmarketcap.com/v1/ticker/',
  fields:[
    {label: 'Rank', value: 'rank'},
    {label: 'Name', value: 'name'},
    {label: 'Price', value: 'price_usd', },
    {label: 'Price Change (24h)', value: 'percent_change_24h'},
    {label: 'Market Cap', value: 'market_cap_usd'},
    {label: 'Volume (24h)', value: '24h_volume_usd'},
  ]	

}

