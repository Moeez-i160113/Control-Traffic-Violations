import React, { Component,  useState, useEffect  } from 'react';
import logo from '../logo.jpg';
import Web3 from 'web3'
import './App.css';
import Challan from '../abis/Challan.json'
import Officer from '../abis/Officer.json'
import User from '../abis/User.json'
import Navbar from './Navbar'
import Main from './Main'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Payment from './Payment'
import './constants'
import Challans from './Challans'
import HomePage from './HomePage'
import Sidebar from './Sidebar';
import OfficerTable from './OfficerTable';
import UserTable from './UserTable';
import Table from './Table';
import LoginHomePage from './LoginHomePage';
import LoginAddChallan from './LoginAddChallan';
import LoginAddUser from './LoginAddUser';
import LoginAddOfficer from './LoginAddOfficer';
import AfterLoginHomePage from './AfterLoginHomePage';
import DailyChallans from './Dailychallans';
import DailyDeposits from './DailyDeposits';
import LoginDailyChallans from './LoginDailyChallans';
import { Redirect } from 'react-router-dom'
import AfterLoginTable from './AfterLoginTable';
import AfterLoginUserTable from './AfterLoginUserTable';
import AfterLoginOfficerTable from './AfterLoginOfficerTable';
import Spinner from './Spinner';

import PageShell from './PageShell'
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';

// import { HashRouter as Router} from 'react-router-dom';


class App extends Component {

  constructor(props) {
  super(props)
  this.state = {
    account: '',
    account1: '',
    account2: '',
    account3: '',
    privatekey1: '',
    privatekey2: '',
    privatekey3: '',
    chalanCount: 0,
    officerCount: 0,
    userCount: 0,
    chalans: [],
    users : [], 
    challan : '',
    officer : '',
    officers : [],
    display : [],
    user : '',
    Lat_long : [],
    vehicle:'',
    payment:'',
    authenticated : false,
    loading: true
  }
  this.add_Chalan = this.add_Chalan.bind(this)
  this.Login = this.Login.bind(this)
  this.createUser = this.createUser.bind(this)
  this.createOfficer = this.createOfficer.bind(this)
}


  async componentWillMount() {
  await this.loadWeb3()
  //onsole.log( window.web3)
  await this.loadBlockchainData()
}


async loadBlockchainData() {

  const web3 = new Web3('https://ropsten.infura.io/v3/6a049e3fdb75458b93dce3d601d0c13c')
  const accounts = '0x418B465759Df1B517Fe12a632F3C623a7DB5652A'
  this.setState({ account: accounts})
  this.setState({ account1: '0x6Ae7E011502f1f380fe13dBde20eDD2d5116239e'})
  this.setState({ account2: '0xaB8CF58b241AE729547584C5B379fFae0a453C0C'})
  this.setState({ account3: '0xf9D6c0E3F6d0CdbCAeeeaf03b54435136e0cCd97'})
  this.setState({ privateKey1: Buffer.from('0e523854388177938c9a047f413458dd8fdad77d2ea04e346a6827412e165b36', 'hex')})
  this.setState({ privateKey2: Buffer.from('f9eecdf720d377b92e43f1384ed91131e27c75b5429f177af1178bbedec36adc', 'hex')})
  this.setState({ privateKey3: Buffer.from('ab7c171f915bc9669e48958eb46cf50f93992ba757924815d926bf6bca1f131b','hex')})
  const networkID = await web3.eth.net.getId()
  console.log(accounts)
  const networkData = await Challan.networks[networkID]
  //const networkDataO = await Officer.networks[networkID]
 // const networkDataU = await User.networks[networkID]
  //console.log(networkData)
    var ch = new web3.eth.Contract([{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":false,"inputs":[{"internalType":"string","name":"_vnp","type":"string"},{"internalType":"string","name":"_d","type":"string"},{"internalType":"uint256","name":"_vt","type":"uint256"},{"internalType":"uint256","name":"_fa","type":"uint256"},{"internalType":"string","name":"_dn","type":"string"},{"internalType":"string","name":"_dc","type":"string"},{"internalType":"string","name":"_oc","type":"string"},{"internalType":"uint256","name":"_wi","type":"uint256"},{"internalType":"string","name":"_dd","type":"string"},{"internalType":"string","name":"_cd","type":"string"},{"internalType":"uint256","name":"_aa","type":"uint256"},{"internalType":"string","name":"coordinates_filename","type":"string"}],"name":"add_Chalan","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_cn","type":"uint256"},{"internalType":"uint256","name":"_is","type":"uint256"}],"name":"add_paid_information","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"chalanCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"a","type":"string"},{"internalType":"string","name":"b","type":"string"}],"name":"compareStrings","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getChallan1","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getChallan2","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getChallan3","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_cn","type":"uint256"}],"name":"get_paid_information","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"setNull","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"cnic","type":"string"},{"internalType":"string","name":"name","type":"string"}],"name":"set_Drivers","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"dateD","type":"string"}],"name":"set_DueDate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"file","type":"string"}],"name":"set_filename","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}],'0xD08a4959973B3CA1726fFE5A064c993bb9D6949A')
    var officerr = new web3.eth.Contract([{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"_username","type":"string"},{"internalType":"string","name":"_password","type":"string"}],"name":"Login","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"OfficerCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_challanNo","type":"uint256"}],"name":"add_challan_to_warden","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"all_officers","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"CNIC","type":"string"},{"internalType":"string","name":"Address","type":"string"},{"internalType":"string","name":"designation","type":"string"},{"internalType":"string","name":"password","type":"string"},{"internalType":"string","name":"username","type":"string"},{"internalType":"uint256","name":"challan_count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"a","type":"string"},{"internalType":"string","name":"b","type":"string"}],"name":"compareStrings","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_CNIC","type":"string"},{"internalType":"string","name":"_address","type":"string"},{"internalType":"string","name":"_designation","type":"string"},{"internalType":"string","name":"_username","type":"string"},{"internalType":"string","name":"_password","type":"string"}],"name":"createOfficer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getAddress","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_officerid","type":"uint256"}],"name":"getChallanCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getCnic","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getDesignation","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getInformation","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getName","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getPassword","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getUsername","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_cno","type":"uint256"}],"name":"remove_challan","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"_address","type":"string"}],"name":"setAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"cnic","type":"string"}],"name":"setCnic","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"_designation","type":"string"}],"name":"setDesignation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"_name","type":"string"}],"name":"setName","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"_password","type":"string"}],"name":"setPassword","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"_username","type":"string"}],"name":"setUsername","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"view_challan_history_by_officer","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"}],'0xC546913bE7E9D6763D543cdf812b724A05F15C48')
    var userr = new web3.eth.Contract([{"constant":false,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"_password","type":"string"}],"name":"Login","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_challanNo","type":"uint256"}],"name":"add_challan_to_user","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_vehicleNo","type":"uint256"}],"name":"add_vehicle_to_user","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"a","type":"string"},{"internalType":"string","name":"b","type":"string"}],"name":"compareStrings","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"count","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"a1","type":"string"},{"internalType":"string","name":"a2","type":"string"},{"internalType":"string","name":"a3","type":"string"},{"internalType":"string","name":"a4","type":"string"},{"internalType":"string","name":"a5","type":"string"},{"internalType":"string","name":"a6","type":"string"}],"name":"createUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getUserChallanCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getUserChallans","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"cnic","type":"string"}],"name":"getUserIdFromCNIC","outputs":[{"internalType":"int256","name":"","type":"int256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"phone","type":"string"}],"name":"getUserIdFromPhone","outputs":[{"internalType":"int256","name":"","type":"int256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getUserInformation","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getUserVehicle","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getUserVehicleCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_uid","type":"uint256"},{"internalType":"uint256","name":"_cid","type":"uint256"}],"name":"remove_challan","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"_home","type":"string"}],"name":"setAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"_age","type":"string"}],"name":"setAge","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"_cnic","type":"string"}],"name":"setCnic","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"_password","type":"string"}],"name":"setPassword","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"_phone","type":"string"}],"name":"setPhoneNo","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"_name","type":"string"}],"name":"setUsername","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"users","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"age","type":"string"},{"internalType":"string","name":"homeaddress","type":"string"},{"internalType":"string","name":"CNIC","type":"string"},{"internalType":"string","name":"phone_no","type":"string"},{"internalType":"string","name":"password","type":"string"},{"internalType":"uint256","name":"challan_count","type":"uint256"},{"internalType":"uint256","name":"vehicle_count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}],'0xdb5e31fF53BA0824f42513C29921b68649309f20')
    var vehiclee=new web3.eth.Contract([{"constant":false,"inputs":[{"internalType":"string","name":"a1","type":"string"},{"internalType":"string","name":"a2","type":"string"},{"internalType":"string","name":"a3","type":"string"},{"internalType":"uint256","name":"a4","type":"uint256"},{"internalType":"string","name":"a5","type":"string"},{"internalType":"string","name":"a6","type":"string"},{"internalType":"string","name":"a7","type":"string"},{"internalType":"uint256","name":"oi","type":"uint256"}],"name":"addInformation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"a","type":"string"},{"internalType":"string","name":"b","type":"string"}],"name":"compareStrings","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"count","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getInformation","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"reg_no","type":"string"}],"name":"getInformation","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getOwner","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"_np","type":"string"}],"name":"getVehicleIdFromNumberPlate","outputs":[{"internalType":"int256","name":"","type":"int256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"info_table","outputs":[{"internalType":"string","name":"registration_number","type":"string"},{"internalType":"string","name":"make_name","type":"string"},{"internalType":"string","name":"color","type":"string"},{"internalType":"uint256","name":"vehicle_price","type":"uint256"},{"internalType":"string","name":"engine_no","type":"string"},{"internalType":"string","name":"chasis_no","type":"string"},{"internalType":"string","name":"model","type":"string"},{"internalType":"uint256","name":"owner_id","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"oi","type":"uint256"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}],'0xFB5faBFF26DCc2dca99958b863dA683E7022bE35')
    var paymentee=new web3.eth.Contract([{"constant":false,"inputs":[{"internalType":"string","name":"a1","type":"string"},{"internalType":"string","name":"a2","type":"string"},{"internalType":"string","name":"a4","type":"string"},{"internalType":"string","name":"a3","type":"string"}],"name":"addInformation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"count","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"string","name":"a1","type":"string"},{"internalType":"string","name":"a2","type":"string"},{"internalType":"string","name":"a3","type":"string"}],"name":"editInformation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getInformation","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}],'0x929880aC59628bc4b23007f369E12773644d0F36')
    this.setState({ challan : ch }) 
    this.setState({ officer : officerr }) 
    this.setState({ user : userr }) 
    this.setState({vehicle:vehiclee})
    this.setState({payment:paymentee})    
    const challanCount = await ch.methods.chalanCount().call()
    const OfficerCount = await officerr.methods.OfficerCount().call()
    
    
    const userCount = await userr.methods.getCount().call()
    this.setState({ chalanCount: challanCount })
    this.setState({ officerCount: OfficerCount })
    var challan_array=[]


    if (ch && officerr && userr){
          // Load products
    var coordinates =[]
    var marker =[]

    for (var i = 0; i < challanCount; i++) {
      const ch1 = await ch.methods.getChallan1(i).call()
      const ch2 = await ch.methods.getChallan2(i).call()
      const ch3 = await ch.methods.getChallan3(i).call()

      var split=ch3.split(",")
      var split_latlong=split[0].split(":")

      //window.alert(split_latlong[0])
      const lat_long=[]
      var a = parseFloat(split_latlong[0])
      var b = parseFloat(split_latlong[1])

      lat_long.push(a)
      lat_long.push(b)

      coordinates.push(lat_long)
      var temp_array=[]

      for(var a=0;a<7;a++){
        temp_array.push(ch1[a])
        if (a==1 || a==3 || a==4 || a==5){
          marker.push(ch1[a])
        }
      }
      for(var a=0;a<6;a++){
       temp_array.push(ch2[a]) 
      }
      for(var a=0;a<5;a++){
       temp_array.push(ch3[a]) 
      }

      challan_array.push(temp_array)
      temp_array=[]
      this.state.chalans.push(challan_array)
      //this.state.Lat_long.push(coordinates)

      marker = marker.toString().split(',')

      for(var a=0;a<4;a++){
       coordinates.push(marker[a]) 
       //window.alert(coordinates)
      }
      this.state.Lat_long.push(coordinates)

      marker = []
      //window.alert(this.state.Lat_long[i][0][2])
      //window.alert(this.state.Lat_long[i][0][0])
      coordinates =[]
      
      challan_array=[]
      this.state.chalans[i] = this.state.chalans[i].toString().split(',')

      //window.alert(this.state.Marker_Lat_long[i][0])
    }

    for (var i = 0; i < OfficerCount; i++) {
      const of1 = await officerr.methods.getInformation(i).call()
      this.state.officers.push(of1)
      //window.alert(of1[1]) 
    }

    for (var i = 0; i < 3; i++) {
    const us1 = await userr.methods.getUserInformation(i).call()
    this.state.users.push(us1)
    //window.alert(us1)
    this.state.users[i] = this.state.users[i].toString().split(',')
    //window.alert(this.state.users[i])
    }



    // const disp = await ch.methods.getChallan1(0).call()
    
    // const disp2 = await ch.methods.getChallan2(0).call()
    // //window.alert(disp[1])
    // const count = await ch.methods.chalanCount().call()
    
    // this.setState({ display : disp })
    //const chalanCount = await ch.methods.chalanCount().call()
    //console.log(chalanCount)
    //if (this.state.Lat_long){window.alert(this.state.Lat_long[0][0])}
    this.setState({ loading: false})
    //window.alert(disp)
  }
  
}

add_Chalan(c_no, _vnp, _d, _vt, _fa, _dn, _dc, _oc, _wi, _dd, _cd, _aa) {
    this.setState({ loading: true })


    var Tx = require('ethereumjs-tx').Transaction;
    const web3 = new Web3('https://ropsten.infura.io/v3/6a049e3fdb75458b93dce3d601d0c13c')
    const account1 = '0x418B465759Df1B517Fe12a632F3C623a7DB5652A' // Your account address 1
    const privateKey1 = Buffer.from('4F8B0C7082F2427806D6774CD6350643DB3566CB7E2DF1964756AAF7CA967338', 'hex')
    web3.eth.getTransactionCount(account1,'pending', (err, txCount) => {

    const txObject = {
      nonce:    web3.utils.toHex(txCount),
      gasLimit: web3.utils.toHex(400000), // Raise the gas limit to a much higher amount
      gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
      to: '0xe60cf7782B010dF8c892048fD3D5c0197a91c31E',
      data: this.state.challan.methods.add_Chalan(c_no, _vnp, _d, _vt, _fa, _dn, _dc, _oc, _wi, _dd, _cd, _aa).encodeABI()
    }

   // const tx = new Tx(txObject)
    var tx = new Tx(txObject, {'chain':'ropsten'});


    tx.sign(privateKey1)

    const serializedTx = tx.serialize()
    const raw = '0x' + serializedTx.toString('hex')

    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
      console.log('err:', err, 'txHash:', txHash)
      // Use this txHash to find the contract on Etherscan!
      window.alert(txHash)
    })
  })

    this.setState({ loading: false })
    window.alert("done")

   
}

async Login(_num,_id,_password) {
    this.setState({ loading: true })
    if (this.state.officer.methods.Login()){window.alert('Yes')}
    var ab=''
    var a = await this.state.officer.methods.Login(_num, _id,_password).call({from:this.state.account},function(err,res){
      window.alert(res)

      ab='T'
    })
    if(ab=='T'){
      window.alert(this.state.authenticated)
      this.setState({ authenticated:true })
      window.alert(this.state.authenticated)
      this.setState({ loading: false })
      

    }
  

}

createUser(a1, a2, a3, a4, a5, a6)  {
    this.setState({ loading: true })
    var Tx = require('ethereumjs-tx').Transaction;
    const web3 = new Web3('https://ropsten.infura.io/v3/6a049e3fdb75458b93dce3d601d0c13c')
    const account1 = '0x418B465759Df1B517Fe12a632F3C623a7DB5652A' // Your account address 1
    const privateKey1 = Buffer.from('4F8B0C7082F2427806D6774CD6350643DB3566CB7E2DF1964756AAF7CA967338', 'hex')
    web3.eth.getTransactionCount(account1, (err, txCount) => {

    const txObject = {
      nonce:    web3.utils.toHex(txCount),
      gasLimit: web3.utils.toHex(400000), // Raise the gas limit to a much higher amount
      gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
      to: '0x5293515Ec5128d1B4cCD95221938E4fc49eD4b3F',
      data: this.state.user.methods.createUser(a1, a2, a3, a4, a5, a6).encodeABI()
    }

   // const tx = new Tx(txObject)
    var tx = new Tx(txObject, {'chain':'ropsten'});


    tx.sign(privateKey1)

    const serializedTx = tx.serialize()
    const raw = '0x' + serializedTx.toString('hex')

    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
      console.log('err:', err, 'txHash:', txHash)
      // Use this txHash to find the contract on Etherscan!
      window.alert(txHash)
    })
  })

   // this.state.user.methods.createUser(a1, a2, a3, a4, a5, a6).send({ from: this.state.account })
    this.setState({ loading: false })
    window.alert("done")

}

createOfficer( _name,  _CNIC,  _designation, _username,  _password) {
    // this.setState({ loading: true })
    // var Tx = require('ethereumjs-tx').Transaction;
    // const web3 = new Web3('https://ropsten.infura.io/v3/6a049e3fdb75458b93dce3d601d0c13c')
    // const account1 = '0x418B465759Df1B517Fe12a632F3C623a7DB5652A' // Your account address 1
    // const privateKey1 = Buffer.from('4F8B0C7082F2427806D6774CD6350643DB3566CB7E2DF1964756AAF7CA967338', 'hex')
    // web3.eth.getTransactionCount(account1, (err, txCount) => {

    // const txObject = {
    //   nonce:    web3.utils.toHex(txCount),
    //   gasLimit: web3.utils.toHex(400000), // Raise the gas limit to a much higher amount
    //   gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
    //   to: '0x50B4f4C306cFb2c83DF4457899Fa12cd638A16e8',
    //   data: this.state.officer.methods.createOfficer( _name,  _CNIC,  _designation, _username,  _password).encodeABI()
   // }

   // const tx = new Tx(txObject)
    // var tx = new Tx(txObject, {'chain':'ropsten'});


    // tx.sign(privateKey1)

    // const serializedTx = tx.serialize()
    // const raw = '0x' + serializedTx.toString('hex')

    // web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    //   console.log('err:', err, 'txHash:', txHash)
    //   // Use this txHash to find the contract on Etherscan!
    //   window.alert(txHash)
    // })
  //})
 //   this.setState({ loading: false })
  //  window.alert("done")
}


  async loadWeb3() {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum)
    await window.ethereum.enable()
  }
  else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider)
  }
  else {

    window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
  }
}

  render() {
   //const disp = this.state.challan.methods.getChallan1(0).call()
    return (
      <div>
            
              { this.state.loading
                ? <div className="center"><Spinner /></div>
                : <Router>
                    <div>
                    <Switch>
                     <Route path="/" exact
                        render={(routeProps) => (<HomePage {...routeProps} Lat_long={this.state.Lat_long} Marker_Lat_long={this.state.Marker_Lat_long} />)}
                     />
                     <Route path="/main" component={PageShell(Main)}/>
                     <Route path="/challans" component={PageShell(Challans)}/>
                     <Route path="/signup" component={PageShell(SignUp)}></Route>


                     <Route path="/signin" 
                     render={(routeProps) => (<SignIn {...routeProps} Login={this.Login} />)}
                     />
                     <Route path="/payment" 
                     render={(routeProps) => (<Payment {...routeProps} />)}
                     />
                     
                     <Route path="/table" 
                     render={(routeProps) => (<Table {...routeProps} chalans={this.state.chalans} chalanCount = {this.state.chalanCount} />)}
                     />
                    
                    <Route path="/logindailychallans" 
                     render={(routeProps) => (<LoginDailyChallans {...routeProps} />)}
                     />

                    <Route path="/afterlogintable" 
                     render={(routeProps) => (this.state.authenticated ?<AfterLoginTable {...routeProps} chalans={this.state.chalans} chalanCount = {this.state.chalanCount}/> : <Redirect to='/signin' />)}
                     />

                     <Route path="/officertable" 
                     render={(routeProps) => (<OfficerTable {...routeProps} officers={this.state.officers} officerCount = {this.state.officerCount}/>)}
                     />
                    <Route path="/afterloginofficertable" 
                     render={(routeProps) => (this.state.authenticated ?<AfterLoginOfficerTable {...routeProps} officers={this.state.officers} officerCount = {this.state.officerCount}/>: <Redirect to='/signin' />)}
                     />

                    <Route path="/afterloginusertable" 
                     render={(routeProps) => (this.state.authenticated ?<AfterLoginUserTable {...routeProps} users={this.state.users} userCount = {this.state.userCount}/>: <Redirect to='/signin' />)}
                     />

                    <Route path="/usertable" 
                     render={(routeProps) => (<UserTable {...routeProps} users={this.state.users} userCount = {this.state.userCount}/>)}
                     />


                     <Route path="/loginaddchallan" 
                     render={(routeProps) => (this.state.authenticated ?<LoginAddChallan {...routeProps} add_Chalan={this.add_Chalan}/>: <Redirect to='/signin' />)}
                     />

                    <Route path="/loginadduser" 
                     render={(routeProps) => (this.state.authenticated ? <LoginAddUser {...routeProps} createUser={this.createUser}/>: <Redirect to='/signin' />)}
                     />

                    <Route path="/loginaddofficer" 
                     render={(routeProps) => (this.state.authenticated ? <LoginAddOfficer {...routeProps} createOfficer={this.createOfficer}/>: <Redirect to='/signin' />)}
                     />

                     <Route path="/loginhomepage" 
                     render={(routeProps) => (this.state.authenticated ? <LoginHomePage {...routeProps}/> : <Redirect to='/signin' />)}
                     />

                     <Route path="/loginaddchallan" 
                     render={(routeProps) => (this.state.authenticated ? <LoginAddChallan {...routeProps} /> : <Redirect to='/signin' />)}
                     />

                     <Route path="/loginadduser" 
                     render={(routeProps) => (this.state.authenticated ? <LoginAddUser {...routeProps} /> : <Redirect to='/signin' />)}
                     />

                      <Route path="/afterloginhomepage" 
                     render={(routeProps) => (this.state.authenticated ? <AfterLoginHomePage {...routeProps} Lat_long={this.state.Lat_long} /> : <Redirect to='/signin' />)}
                     />                      

                   </Switch>
                </div> 
          </Router>
          
        }
          
      </div>
    );
  }
}

export default App;
