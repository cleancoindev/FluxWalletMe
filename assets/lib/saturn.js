var jsonURL = "https://ticker.saturn.network/api/v2/tokens/show/etc/0x6Eb1846Bb70356bbbe66185608ae5d5258eFB3E2.json";

$(document).ready(function(){
    $.getJSON(jsonURL, function(result){
        $("#bestBuyOrder").text(result.best_buy_order);
        $("#bestBuyPrice").text(result.best_buy_price.substr(0,9));
        $("#bestSellOrder").text(result.best_sell_order);
        $("#bestSellPrice").text(result.best_sell_price.substr(0,9));
        $("#totalSupply").text(result.total_supply);
        $("#volume24h").text(result.volume24hr.substr(0,4));
        $("#price24h").text(result.price24hr.substr(0,9));
        $("#currentPrice").text(result.dashboard_price.substr(0,9));
        $("#changePercent").text(result.change_pct.substr(0,3));
    });
});