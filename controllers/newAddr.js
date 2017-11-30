const wrap = require('co-express');
var blocktrail = require('blocktrail-sdk');
const MY_APIKEY = '06669692bef4bd393312e8a6dcc7ef2cf59680da';
const MY_APISECRET = 'af1c1d1ed625a39d31bf1e7cb7baa4e1fc7394b9';

exports.getNewAddress = wrap(function*(req, res) {
    var userWalletName = req.query.userName + req.query.uid + new Date().toLocaleDateString().replace(/[\/]/, "");

    switch (req.query.key) {
        case "BTC":
            // 比特币钱包
            var BTCclient = blocktrail.BlocktrailSDK({ apiKey: MY_APIKEY, apiSecret: MY_APISECRET, network: "BTC", testnet: false });
            BTCclient.createNewWallet(userWalletName, randomWord(false, 6), function(err, wallet, backupInfo) {
                if (err) { res.send(err); return false; }
                wallet.getNewAddress(function(err, address) {
                    res.send(address);
                });
            });
            break;

        case "ETH":
            break;

        case "NEO":
            break
    }
})

function randomWord(randomFlag, min, max) {
    var str = "",
        range = min,
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    // 随机产生
    if (randomFlag) {
        range = Math.round(Math.random() * (max - min)) + min;
    }
    for (var i = 0; i < range; i++) {
        pos = Math.round(Math.random() * (arr.length - 1));
        str += arr[pos];
    }
    return str;
}