require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth oil punch gesture desert foster gather'; 
let testAccounts = [
"0xee238317618332c2afd4dd95150e89b7d8e2a5884c100a2dc023200c188f787b",
"0x88a28e85e1785a6973752dc5f1fcfec98550a07b8c0fb4d18a1b1a3e76ccd609",
"0x3187a8b32869fa6da7286afdf76e32c57acfd633d3feb51922e0b312bfe1bc3c",
"0x30f9004dabf1c153b8e18d3943db1751ad9191f730e65177c76677f4b0d08802",
"0x8a1cd5b85b3011cfba2a2a7ce70b776842ef22ed13855a4d318338f2466dd2cc",
"0x9c27bced38179eb6fdfe8f2ee65eaa2f273a47e22c58e2cdf253ebfe81408efc",
"0xaaa31626a328a91b05977da9ebf279f96235449e39ac38508dafd36ba33eb2df",
"0x3e88ec80bb551b72de1b8ee473ed097304fa8627ebeb5fdc5ca7dcbe7508cbb2",
"0x8a42834d20f947abb956075534be03a03e5f6f25c5ed53596c98a939d4275a8c",
"0xa16bc10e3852c364b383e67447fd5e813abdd605454ce33a077893c2c06352a7"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

