require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remain modify good process swallow ski'; 
let testAccounts = [
"0x7ddd2264a31f5253fb1fb7cf49a52a1e093144dd7388da719631602b563da301",
"0xcf465510a302d44d3c6b9127aa3b47d3badc024d3c689c1fe9972476fa6f030f",
"0xd64895c53acdc5ab1dea9c2423ef455528cfad04194519a7a499b703f6d046bd",
"0x17ca75bc1730b662499adcd0bd5140b5482dbc196cb32c2aa475330d6a25a0f6",
"0x8e1036b99d7f2d3ac223c64a5e1a0f9d4090b8a8b8bc58224d68973d92d4d5b5",
"0xcbb2675590315697112a522d9d196f654c92fb0fe1db6bd1c35d67cc5fdeb99b",
"0xda31abf2a7bb841547cab3bd955b0e4a24b5430c3957ff58fc8c966cc438de26",
"0x325573c3877548ac167f0629c9dd46d4b9c5dc667168eed3666ac9c31b68bf88",
"0x274ca1d3ec733233b6b6019c36321e170920eb01a4cb0edd96bb2afa60679610",
"0xeca9c183eff224f88e807c2494750118965cee5638c924564022eac95207f744"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
