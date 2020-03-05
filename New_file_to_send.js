var Tx= require('ethereumjs-tx').Transaction
const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/6a049e3fdb75458b93dce3d601d0c13c')

const account1 = '0x418B465759Df1B517Fe12a632F3C623a7DB5652A' // Your account address 1
const privateKey1 = Buffer.from('4F8B0C7082F2427806D6774CD6350643DB3566CB7E2DF1964756AAF7CA967338', 'hex')

// Read the deployed contract - get the addresss from Etherscan
const contractAddress = '0x35288974E5766047505402b29920a29BE732681A'  //Enter your smart contract address
const contractABI = [{"constant":true,"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getChallan2","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_lan","type":"uint256"},{"internalType":"uint256","name":"_lad","type":"uint256"},{"internalType":"uint256","name":"_lon","type":"uint256"},{"internalType":"uint256","name":"_lod","type":"uint256"},{"internalType":"string","name":"_f","type":"string"}],"name":"add_Cordinates","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getChallan3","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"c_no","type":"uint256"},{"internalType":"string","name":"_vnp","type":"string"},{"internalType":"string","name":"_d","type":"string"},{"internalType":"uint256","name":"_vt","type":"uint256"},{"internalType":"uint256","name":"_fa","type":"uint256"},{"internalType":"string","name":"_dn","type":"string"},{"internalType":"string","name":"_dc","type":"string"},{"internalType":"string","name":"_oc","type":"string"},{"internalType":"uint256","name":"_wi","type":"uint256"},{"internalType":"string","name":"_dd","type":"string"},{"internalType":"string","name":"_cd","type":"string"},{"internalType":"uint256","name":"_aa","type":"uint256"}],"name":"add_Chalan","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getChallan1","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"a","type":"string"},{"internalType":"string","name":"b","type":"string"}],"name":"compareStrings","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_cn","type":"uint256"},{"internalType":"uint256","name":"_is","type":"uint256"}],"name":"add_paid_information","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"chalanCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
//Contract abi above


const contract = new web3.eth.Contract(contractABI, contractAddress)



//For Functions that change the state of smart contract use this code example adding data 





// console.log(contract)
// web3.eth.getTransactionCount(account1, (err, txCount) => {

//   const txObject = {
//     nonce:    web3.utils.toHex(txCount),
//     gasLimit: web3.utils.toHex(400000), // Raise the gas limit to a much higher amount
//     gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
//     to: contractAddress,
//     data: contract.methods.add_Chalan(0,"ABC-123","6/12/2019",1,100,"","37405-1112233-1","37405-1112233-1",0,"7/12/2019","Bike Copy",1).encodeABI()
//   }

//  // const tx = new Tx(txObject)
//   var tx = new Tx(txObject, {'chain':'ropsten'});

//   tx.sign(privateKey1)

//   const serializedTx = tx.serialize()
//   const raw = '0x' + serializedTx.toString('hex')

//   web3.eth.sendSignedTransaction(raw, (err, txHash) => {
//     console.log('err:', err, 'txHash:', txHash)
//     // Use this txHash to find the contract on Etherscan!
//   })
// })




//For functions that get variabless, dont change state,Use this code.





// contract.methods.getChallan2(0).call({from: account1}, function(error, result){
//     console.log(error)
//     console.log(result)
// });