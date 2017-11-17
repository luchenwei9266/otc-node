const wrap = require('co-express');
var blocktrail = require('blocktrail-sdk');
const MY_APIKEY = '06669692bef4bd393312e8a6dcc7ef2cf59680da';
const MY_APISECRET = 'af1c1d1ed625a39d31bf1e7cb7baa4e1fc7394b9';

client = blocktrail.BlocktrailSDK({ apiKey: MY_APIKEY, apiSecret: MY_APISECRET, network: "BTC", testnet: false });

exports.getNewAddress = wrap(function*(req, res) {
    client.createNewWallet("testOtcWallet152534525", "123456", function(err, wallet, backupInfo) {
        if (err) {
            console.log(err);
            return false;
        }
        console.log(wallet);
        wallet.getNewAddress(function(err, address) {
            res.send(address);
        });
        // console.log(backupInfo);
    });
})