const fetchStockPrice = async(stockName = AAPL) => {
    fetch(`https://investors-exchange-iex-trading.p.rapidapi.com/stock/${stockName}/book`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "bd07a264aemsh6a2c106dd27fc55p1cf614jsn85f08ce4e567",
                "x-rapidapi-host": "investors-exchange-iex-trading.p.rapidapi.com"
            }
        })
        .then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
        })
        .catch(err => {
            console.error(err);
        });

}

document.querySelector('#stockName').addEventListener('input', (e) => {
    fetchStockPrice(document.querySelector('#stockName').value);
})



fetchStockPrice();