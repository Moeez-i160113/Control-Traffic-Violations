import React, { PureComponent,  useState, useEffect, Suspense } from 'react';
import logo from '../logo.jpg';
import Web3 from 'web3'
import './App.css';

import { Redirect } from 'react-router-dom';
import  {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';
import PageShell from './PageShell';
import  { render } from 'react-dom';
import { ProtectedRoute } from "./protected.route";
import auth from "./auth";
import history from './history';
// import { withRouter } from 'react-router-dom'
// import Challan from '../abis/Challan.json'
// import Officer from '../abis/Officer.json'
// import User from '../abis/User.json'
// import Navbar from './Navbar'
const Navbar = React.lazy(() => import("./Navbar"));
// import Main from './Main'
const Main = React.lazy(() => import("./Main"));

// const ProtectedRoute = React.lazy(() => import("./protected.route"));
// import SignIn from './SignIn'
const SignIn = React.lazy(() => import("./SignIn"));

// import SignUp from './SignUp'
// const auth = React.lazy(() => import("./auth"));

// import Payment from './Payment'
const Payment = React.lazy(() => import("./Payment"));
// import Challans from './Challans'
// const Challans = React.lazy(() => import("./Challans"));

const SearchChallanTable = React.lazy(() => import("./SearchChallanTable"));

const SearchVehicleTable = React.lazy(() => import("./SearchVehicleTable"));

const SearchOfficerTable = React.lazy(() => import("./SearchOfficerTable"));
const UpdateOfficer = React.lazy(() => import("./UpdateOfficer"));

// SearchChallanTable
// import HomePage from './HomePage'
const HomePage = React.lazy(() => import("./HomePage"));
// import Details from './Details'
// const Details = React.lazy(() => import("./Details"));
//importSidebar from './Sidebar';
// const Sidebar = React.lazy(() => import("./Sidebar"));
//importOfficerTable from './OfficerTable';
const OfficerTable = React.lazy(() => import("./OfficerTable"));
//importUserTable from './UserTable';
const UserTable = React.lazy(() => import("./UserTable"));
//importTable from './Table';
const Table = React.lazy(() => import("./Table"));
const VehicleTable = React.lazy(() => import("./VehicleTable"));
//importLoginHomePage from './LoginHomePage';
const LoginHomePage = React.lazy(() => import("./LoginHomePage"));
//importLoginAddChallan from './LoginAddChallan';
const LoginAddChallan = React.lazy(() => import("./LoginAddChallan"));
//importLoginAddUser from './LoginAddUser';
const LoginAddUser = React.lazy(() => import("./LoginAddUser"));
//importLoginAddOfficer from './LoginAddOfficer';
const LoginAddOfficer = React.lazy(() => import("./LoginAddOfficer"));
//importAfterLoginHomePage from './AfterLoginHomePage';
//importDailyChallans from './Dailychallans';
const DailyChallans = React.lazy(() => import("./DailyChallans"));
//importDailyDeposits from './DailyDeposits';
const DailyDeposits = React.lazy(() => import("./DailyDeposits"));
//importLoginDailyChallans from './LoginDailyChallans';
const LoginDailyChallans = React.lazy(() => import("./LoginDailyChallans"));

// //importAfterLoginTable from './AfterLoginTable';
// const AfterLoginTable = React.lazy(() => import("./AfterLoginTable"));
// //importAfterLoginUserTable from './AfterLoginUserTable';
// const AfterLoginUserTable = React.lazy(() => import("./AfterLoginUserTable"));
// //importAfterLoginOfficerTable from './AfterLoginOfficerTable';
// const AfterLoginOfficerTable = React.lazy(() => import("./AfterLoginOfficerTable"));

// const AfterLoginVehicleTable = React.lazy(() => import("./AfterLoginVehicleTable"));
//importSpinner from './Spinner';
const Spinner = React.lazy(() => import("./Spinner"));


var count = 0 ;
const LoadingPage = () => <span></span>;
class App extends React.Component {

  constructor(props) {
  super(props)
  this.state = {
    account: '',
    reloading : true,
    account1: '',
    account2: '',
    account3: '',
    privatekey1: '',
    privatekey2: '',
    privatekey3: '',
    chalanCount: 0,
    officerCount: 0,
    vehicleCount: 0,
    userCount: 0,
    chalans: [],
    users : [], 
    challan : '',
    officer : '',
    officers : [],
    vehicles : [],
    display : [],
    user : '',
    Lat_long : [],
    vehicle:'',
    payment:'',
    redirect : false,
    authenticated : true,
    challanselected : 0,
    daily_array :[],
    daily_count :[],
    daily_amount : [],
    monthly_array : [],
    monthly_count : [],
    monthly_amount : [],
    annual_amount: 0,
    loading: true
  }
  this.add_Chalan = this.add_Chalan.bind(this)
  this.Login = this.Login.bind(this)
  this.createUser = this.createUser.bind(this)
  this.createOfficer = this.createOfficer.bind(this)
  this.Addpaymentinformation = this.Addpaymentinformation.bind(this)
  this.setDesignation = this.setDesignation.bind(this)
  this.setName = this.setName.bind(this)
  this.setCnic = this.setCnic.bind(this)
  this.setAddress = this.setAddress.bind(this)
}


  // async shouldComponentUpdate(nextProps, nextState) {
    // if (this.props.authenticated !== nextProps.authenticated) {
    //   // window.alert("New Props: " + nextState.authenticated + " Old Props: "+ this.state.authenticated  )
    //   return true
    // }
    // return false
    // if (reloaddata > 20){
    //   window.alert("reload data: " + reloaddata + " True")
    //   reloaddata = 0
    //   return true;
    // }
    // else{
    //   window.alert("reload data: " + reloaddata + " False")
    //   reloaddata = reloaddata + 1
    //   return false;
    // }

    // if (this.state.reloading == true){
    //   window.alert("YES!! New State: " + this.state.reloading)
    //   reloaddata = 0
    //   // this.state.reloading = false
    //   return true;
    // }
    // else{
    //   window.alert("NO!! New State: " + this.state.reloading)
    //   reloaddata = reloaddata + 1
    //   return false;
    // }



    // window.alert("New Props: " + newProps + " Old Props: "+ this.props )
    // return newProps !== this.props
  //  }

  async LoadRopstenConnections(){
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
  }


  async componentWillMount() {

  if (sessionStorage.getItem('this.state.vehicles'))
  {

    // window.alert("Using Local Storage")
    await this.loadWeb3()
    await this.LoadRopstenConnections()
    this.setState({
      chalanCount: sessionStorage.getItem('challanCount'),
      officerCount: sessionStorage.getItem('OfficerCount'),
      vehicleCount: sessionStorage.getItem('vehicleCount'),
      chalans: JSON.parse(sessionStorage.getItem('this.state.chalans')),
      Lat_long: JSON.parse(sessionStorage.getItem('this.state.Lat_long')),
      officers: JSON.parse(sessionStorage.getItem('this.state.officers')),
      users: JSON.parse(sessionStorage.getItem('this.state.users')),
      daily_array: JSON.parse(sessionStorage.getItem('this.state.daily_array')),
      monthly_array: JSON.parse(sessionStorage.getItem('this.state.monthly_array')),
      daily_count: JSON.parse(sessionStorage.getItem('this.state.daily_count')),
      daily_amount: JSON.parse(sessionStorage.getItem('this.state.daily_amount')),
      monthly_amount: JSON.parse(sessionStorage.getItem('this.state.monthly_amount')),
      annual_amount: sessionStorage.getItem('this.state.annual_amount'),
      monthly_count: JSON.parse(sessionStorage.getItem('this.state.monthly_count')),
      vehicles: JSON.parse(sessionStorage.getItem('this.state.vehicles')),    
  })
  }

}

async componentDidMount (){
  if (!sessionStorage.getItem('this.state.monthly_count')){
    // window.alert("Using IBC Storage")
    await this.loadWeb3()
    await this.loadBlockchainData()
  }
  else {
    // window.alert("Comp did mount : using Local Storage")
  }

}


async loadBlockchainData() {  
    await this.LoadRopstenConnections()
    const challanCount = await this.state.challan.methods.chalanCount().call()
    const OfficerCount = await this.state.officer.methods.OfficerCount().call()
    const userCount = await this.state.user.methods.getCount().call()
    const vehicleCount = await this.state.vehicle.methods.getCount().call()
    
    // Setting it all in sessionStorage
    
    sessionStorage.setItem('challanCount', challanCount)

    sessionStorage.setItem('OfficerCount', OfficerCount)
    sessionStorage.setItem('userCount', userCount)
    sessionStorage.setItem('vehicleCount', vehicleCount)



    this.setState({ chalanCount: challanCount })
    this.setState({ officerCount: OfficerCount })
    this.setState({ vehicleCount: vehicleCount })


    var challan_array=[]
    var daily_array=[]
    var daily_count=[]
    var daily_amount=[]
    var monthly_array=[]
    var monthly_count=[]
    var monthly_amount=[]

    var monthly_arr=[]
    var daily_arr = []



    if (this.state.challan && this.state.officer && this.state.user && this.state.reloading){
    // reloaddata = 0
    // Load products
    var coordinates =[]
    var marker =[]

    for (var i = 0; i < challanCount; i++) {
      const ch1 = await this.state.challan.methods.getChallan1(i).call()
      const ch2 = await this.state.challan.methods.getChallan2(i).call()
      const ch3 = await this.state.challan.methods.getChallan3(i).call()

      var split=ch3.split(",")
      var split_latlong=split[0].split(":")
      //window.alert(split_latlong)

      //window.alert(split_latlong[0])
      const lat_long=[]
      var a = parseFloat(split_latlong[0])
      var b = parseFloat(split_latlong[1])

      lat_long.push(a)
      lat_long.push(b)

      // if (i > 30 && i < 40){window.alert(a + ' : ' + b)}

      coordinates.push(lat_long)
      // if (i > 30){window.alert(coordinates) }
      var temp_array=[]

      for(var a=0;a<7;a++){
        temp_array.push(ch1[a])
        //window.alert(a + ' : ' + ch1[a])
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
      coordinates.push(i)
      this.state.Lat_long.push(coordinates)
      // if (i > 30){window.alert(this.state.Lat_long[i])}

      marker = []
      //window.alert(this.state.Lat_long[i][0][2])
      //window.alert(this.state.Lat_long[i][0][0])
      coordinates =[]
      
      challan_array=[]
      this.state.chalans[i] = this.state.chalans[i].toString().split(',')

      //window.alert(this.state.Marker_Lat_long[i][0])
    }
    sessionStorage.setItem('this.state.chalans', JSON.stringify(this.state.chalans))
    // console.log(this.state.chalans[0])
    sessionStorage.setItem('this.state.Lat_long', JSON.stringify(this.state.Lat_long))
    

    for (var i = 0; i < OfficerCount; i++) {
      const of1 = await this.state.officer.methods.getInformation(i).call()
      this.state.officers.push(of1)
      //window.alert(of1[1]) 
    }
    console.log(this.state.officers)
    sessionStorage.setItem('this.state.officers', JSON.stringify(this.state.officers))

    for (var i = 0; i < userCount; i++) {
    const us1 = await this.state.user.methods.getUserInformation(i).call()
    //window.alert('before: ' + us1)
    us1 = us1.toString().split(',')
    //window.alert('After: ' + us1)
    this.state.users.push(us1)
    //window.alert(us1)
    //this.state.users[i] = this.state.users[i].toString().split(',')
    //window.alert(this.state.users[i])
    }
    sessionStorage.setItem('this.state.users', JSON.stringify(this.state.users))


    
    //window.alert(challan_array)
    for (var i = 0; i < challanCount; i++) {
      daily_arr.push(this.state.chalans[i])
      monthly_arr.push(this.state.chalans[i])
    }

    var count = 0;
    var amount = 0 
    

    // for (var i=monthly_array.length-1; i>=0; --i) {
      while (daily_arr.length>0) {
      var f= daily_arr.length-1
      var listI = daily_arr[f];
      // console.log("NEXT VALUE------------------------------- i: " + i + " Daily Array length: " + daily_arr.length + " listI: " + listI[1] + " listI[2]: "+listI[2])
      loopJ: for (var j=daily_arr.length-1; j>=0; --j) {
          var listJ = daily_arr[j];
          // console.log("j: " + j + " listJ: " + listJ[1] + " listJ[2]: "+listJ[2])
          // console.log("listJ[2]: "+listJ[2])
          if (listI[2] == listJ[2]) {
            // console.log("MATCH => listJ: " + listJ[2] + " listI: " + listI[2])
            count = count + 1
            var a = parseInt(listJ[4]);
            amount = amount + a
          
          }; //Ignore itself
          // console.log("count: "+ count)
          
            if (listJ[2] != listI[2]) {
              // console.log("NO MATCH => listJ: " + listJ[2] + " listI: " + listI[2])
              continue loopJ;
            }
          
          // At this point, their values are equal.
          daily_arr.splice(j, 1);
      }
      daily_array.push(listI[2])
      // daily_count.push(count)
      daily_count.push({
        day : listI[2],
        offenses : count,
        amount : amount,
        amt : amount
         } )
      daily_amount.push(amount)
      count = 0
      amount = 0
    }
    // console.log ("Array Before: " + daily_array)
    // var z = [... new Set(daily_array) ]
    // console.log("Z: " + z)
    // daily_array = Array.from(z)
    // console.log ("Array After from z: " + daily_array)

    // sessionStorage.setItem('daily_array', daily_array)
    // sessionStorage.setItem('daily_count', daily_count)
    // sessionStorage.setItem('daily_amount', daily_amount)
    

    count = 0
    amount = 0

    // console.log(daily_count)

    var i = monthly_arr.length-1
    // for (var i=monthly_array.length-1; i>=0; --i) {
      while (monthly_arr.length>0) {
      var f= monthly_arr.length-1
      var listI = monthly_arr[f];
      //window.alert("listI[2]"+listI[2])
      var split1=listI[2].split("/")
      split1=listI[2].split("/")

      // console.log("NEXT VALUE------------------------------- i: " + i + " Monthly Array length: " + monthly_array.length + " listI: " + listI[1] + " listI[2]: "+listI[2])
      loopJ: for (var j=monthly_arr.length-1; j>=0; --j) {
          var listJ = monthly_arr[j];
          //window.alert("listJ[2]: "+listJ[2])

          var split2=listJ[2].split("/")
          split2=listJ[2].split("/")
          //window.alert(split1[1] + split2[1])
          // console.log("j: " + j + " listJ: " + listJ[1] + " listJ[2]: "+listJ[2])
          
          if (split1[1] == split2[1]) {
            // console.log("MATCH => splitI: " + split1[1] + " splitJ: " + split2[1])
            count = count + 1
            var a = parseInt(listJ[4]);
            amount = amount + a
          }; //Ignore itself
          //window.alert("count: "+ count)
          
          if (split1[1] != split2[1]) {
            // console.log("NO MATCH => splitI: " + split1[1] + " splitJ: " + split2[1])
            continue loopJ;
          }
          
          // At this point, their values are equal.
          monthly_arr.splice(j, 1);

      }

      // const data = [
      //   {
      //     name: 'Sunday', uv: 3490, pv: 4300, amt: 2100,
      //   },
      // ];
      
      if (split1[1]=="2"){      
        monthly_count.push({
              month : "Feb",
              offenses : count,
              amount : amount,
              amt : amount
         })
        }
      else if (split1[1]=="1"){      
          monthly_count.push({
                month : "Jan",
                offenses : count,
                amount : amount,
                amt : amount
           })
          }
      else if (split1[1]=="3"){      
            monthly_count.push({
                  month : "Mar",
                  offenses : count,
                  amount : amount,
                  amt : amount
             })
         }
      else if (split1[1]=="4"){      
          monthly_count.push({
                month : "Apr",
                offenses : count,
                amount : amount,
                amt : amount
           })
          } 
      else if (split1[1]=="5"){      
            monthly_count.push({
                  month : "May",
                  offenses : count,
                  amount : amount,
                  amt : amount
             })
            } 
      else if (split1[1]=="6"){      
              monthly_count.push({
                    month : "Jun",
                    offenses : count,
                    amount : amount,
                    amt : amount
               })
          }  
      else if (split1[1]=="7"){      
            monthly_count.push({
                  month : "July",
                  offenses : count,
                  amount : amount,
                  amt : amount
             })
            }
      else if (split1[1]=="8"){      
              monthly_count.push({
                    month : "Aug",
                    offenses : count,
                    amount : amount,
                    amt : amount
               })
      }      
      else if (split1[1]=="9"){      
        monthly_count.push({
              month : "Sept",
              offenses : count,
              amount : amount,
              amt : amount
         })
        } 
      else if (split1[1]=="10"){      
          monthly_count.push({
                month : "Oct",
                offenses : count,
                amount : amount,
                amt : amount
           })
          }
      else if (split1[1]=="11"){      
            monthly_count.push({
                  month : "Nov",
                  offenses : count,
                  amount : amount,
                  amt : amount
             })
            }  
      else if (split1[1]=="12"){      
              monthly_count.push({
                    month : "Dec",
                    offenses : count,
                    amount : amount,
                    amt : amount
               })
              }      
      monthly_array.push(split1[1])

      monthly_amount.push(amount)
      count = 0
      amount = 0
    }

    // console.log(daily_array)
    // console.log(monthly_count)
    



    var annual_amount = 0

    for (var i=0; i<daily_array.length; i++) {
      this.state.daily_array.push(daily_array[i])
    }
    for (var i=0; i<monthly_array.length; i++) {
      this.state.monthly_array.push(monthly_array[i])
    }
    for (var i=0; i<daily_count.length; i++) {
      this.state.daily_count.push(daily_count[i])
    }
    for (var i=0; i<daily_amount.length; i++) {
      this.state.daily_amount.push(daily_amount[i])
    }
    for (var i=0; i<monthly_amount.length; i++) {
      //window.alert("Monthly amount: "+ monthly_amount[i])
      this.state.monthly_amount.push(monthly_amount[i])
      annual_amount = annual_amount +  monthly_amount[i]
    }
    for (var i=0; i<monthly_count.length; i++) {
      //window.alert("Monthly amount: "+ monthly_amount[i])
      this.state.monthly_count.push(monthly_count[i])
      //window.alert(monthly_count[i])
    }
    this.setState({ annual_amount: annual_amount })
    
    sessionStorage.setItem('this.state.daily_array', JSON.stringify(this.state.daily_array))
    sessionStorage.setItem('this.state.monthly_array', JSON.stringify(this.state.monthly_array))
    sessionStorage.setItem('this.state.daily_count', JSON.stringify(this.state.daily_count))
    sessionStorage.setItem('this.state.daily_amount', JSON.stringify(this.state.daily_amount))
    sessionStorage.setItem('this.state.monthly_amount', JSON.stringify(this.state.monthly_amount))
    sessionStorage.setItem('this.state.annual_amount', annual_amount)
    sessionStorage.setItem('this.state.monthly_count',  JSON.stringify(this.state.monthly_count))



    for (var i = 0; i < vehicleCount; i++) {
      const of1 = await this.state.vehicle.methods.getInformation(i).call()
      this.state.vehicles.push(of1)
      //window.alert(of1[1]) 
    }
    sessionStorage.setItem('this.state.vehicles', JSON.stringify(this.state.vehicles))



    // const disp = await ch.methods.getChallan1(0).call()
    
    // const disp2 = await ch.methods.getChallan2(0).call()
    // //window.alert(disp[1])
    // const count = await ch.methods.chalanCount().call()
    
    // this.setState({ display : disp })
    //const chalanCount = await ch.methods.chalanCount().call()
    //console.log(chalanCount)
    //if (this.state.Lat_long){window.alert(this.state.Lat_long[0][0])}
    this.setState({ reloading: false})
    this.setState({ loading: false})

    return true;
    //window.alert(disp)
  }
  // else {reloaddata = reloaddata + 1 }
  
}


add_Chalan(c_no, _vnp, _d, _vt, _fa, _dn, _dc, _oc, _wi, _dd, _cd, _aa) {
    this.setState({ loading: true })


    var Tx = require('ethereumjs-tx').Transaction;
    const web3 = new Web3('https://ropsten.infura.io/v3/6a049e3fdb75458b93dce3d601d0c13c')
    const account1 = '0x6Ae7E011502f1f380fe13dBde20eDD2d5116239e'
    const privateKey1=  Buffer.from('0e523854388177938c9a047f413458dd8fdad77d2ea04e346a6827412e165b36', 'hex')
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
    // if (this.state.officer.methods.Login()){window.alert('Yes')}
    var ab=''
    var a = await this.state.officer.methods.Login(_num, _id,_password).call({from:this.state.account},function(err,res){
      // window.alert("Result: " + res)

      ab='T'

    })
    console.log("Output: "  + a + " ,ID: " + _id + " ,Number: " + _num + " and Password: " + _password)

    // window.alert("Returned a: " + a)

    if(ab=='T'){
      // window.alert(this.state.authenticated)
      auth.login();
      // window.alert("Auth: "+ auth.isAuthenticated())
      history.push('/loginhomepage')
      // location.reload()
      // history.replace(history.location.pathname)
      history.go(0)
        // const history = useHistory();
        // history.push("/loginhomepage"); 
       //   this.setState({ authenticated:true })
    //   this.setState({ redirect:true })
     
    //   window.alert(this.state.authenticated)
    //   // this.setState({ state: this.state });       // Components re - render kai liye
    //   //this.forceUpdate();
    //  // this.render(<LoginHomePage />)

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
    // window.alert("done")

}


async Addpaymentinformation(challan,datesubmitted,transactionid,bankname){
  this.setState({ loading: true })
  const account1 = '0x6Ae7E011502f1f380fe13dBde20eDD2d5116239e'
  const privateKey1=  Buffer.from('0e523854388177938c9a047f413458dd8fdad77d2ea04e346a6827412e165b36', 'hex')
  var Tx = require('ethereumjs-tx').Transaction;
  const web3 = new Web3('https://ropsten.infura.io/v3/6a049e3fdb75458b93dce3d601d0c13c')

  // if (this.state.payment.methods.addInformation){window.alert("fffffffffffffffffffff")}
  //window.alert(this.state.account1)
  var count=0
  //window.alert(this.state.payment.methods.getCount())
  count =await this.state.payment.methods.getCount().call({from:account1});
  // window.alert("Count: " + count)
    //window.alert("res"+res)
    web3.eth.getTransactionCount(account1,(err, txCount) => {

    const txObject = {
      nonce:    web3.utils.toHex(txCount),
      gasLimit: web3.utils.toHex(400000), // Raise the gas limit to a much higher amount
      gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
      to:   '0x929880aC59628bc4b23007f369E12773644d0F36',
      data: this.state.payment.methods.addInformation(datesubmitted,challan,transactionid,bankname).encodeABI()
    }

    var tx = new Tx(txObject, {'chain':'ropsten'});
    // window.alert(tx)


    tx.sign(privateKey1)

    const serializedTx = tx.serialize()
    const raw = '0x' + serializedTx.toString('hex')

    web3.eth.sendSignedTransaction(raw, (err, txHash) => {

  
  
    
    console.log('err:', err, 'txHash:', txHash)
    // Use this txHash to find the contract on Etherscan!
   
    // window.alert(txHash)

  })
})
  web3.eth.getTransactionCount(account1,(err, txCount) => {

    const txObject = {
      nonce:    web3.utils.toHex(txCount),
      gasLimit: web3.utils.toHex(400000), // Raise the gas limit to a much higher amount
      gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
      to: '0xD08a4959973B3CA1726fFE5A064c993bb9D6949A'  ,
      data: this.state.challan.methods.add_paid_information(challan,count).encodeABI()
    }
  
  // const tx = new Tx(txObject)
    var tx = new Tx(txObject, {'chain':'ropsten'});
  
  
    tx.sign(privateKey1)
  
    const serializedTx = tx.serialize()
    const raw = '0x' + serializedTx.toString('hex')
  
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
      
        window.alert(txHash)
      console.log('err:', err, 'txHash:', txHash)
      // Use this txHash to find the contract on Etherscan!
      window.alert(txHash)
    })
  
})


  this.setState({ loading: false })
  // window.alert("done")

}

createOfficer( _name,  _CNIC,  _designation, _username,  _password) {
    this.setState({ loading: true })
    var Tx = require('ethereumjs-tx').Transaction;
    const web3 = new Web3('https://ropsten.infura.io/v3/6a049e3fdb75458b93dce3d601d0c13c')
    const account1 = '0x6Ae7E011502f1f380fe13dBde20eDD2d5116239e'
    const privateKey1=  Buffer.from('0e523854388177938c9a047f413458dd8fdad77d2ea04e346a6827412e165b36', 'hex')
    web3.eth.getTransactionCount(account1, (err, txCount) => {

    const txObject = {
      nonce:    web3.utils.toHex(txCount),
      gasLimit: web3.utils.toHex(400000), // Raise the gas limit to a much higher amount
      gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
      to: '0x50B4f4C306cFb2c83DF4457899Fa12cd638A16e8',
      data: this.state.officer.methods.createOfficer( _name,  _CNIC,  _designation, _username,  _password).encodeABI()
   }

  //   const tx = new Tx(txObject)
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
  //  window.alert("done")
}

setDesignation( _id, _designation) {
  this.setState({ loading: true })
  var Tx = require('ethereumjs-tx').Transaction;
  const web3 = new Web3('https://ropsten.infura.io/v3/6a049e3fdb75458b93dce3d601d0c13c')
  const account1 = '0x6Ae7E011502f1f380fe13dBde20eDD2d5116239e'
  const privateKey1=  Buffer.from('0e523854388177938c9a047f413458dd8fdad77d2ea04e346a6827412e165b36', 'hex')
  web3.eth.getTransactionCount(account1, (err, txCount) => {

  const txObject = {
    nonce:    web3.utils.toHex(txCount),
    gasLimit: web3.utils.toHex(400000), // Raise the gas limit to a much higher amount
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
    to: '0x50B4f4C306cFb2c83DF4457899Fa12cd638A16e8',
    data: this.state.officer.methods.setDesignation( _id, _designation).encodeABI()
 }

//   const tx = new Tx(txObject)
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

setAddress(_id, _address)  {
  this.setState({ loading: true })
  var Tx = require('ethereumjs-tx').Transaction;
  const web3 = new Web3('https://ropsten.infura.io/v3/6a049e3fdb75458b93dce3d601d0c13c')
  const account1 = '0x6Ae7E011502f1f380fe13dBde20eDD2d5116239e'
  const privateKey1=  Buffer.from('0e523854388177938c9a047f413458dd8fdad77d2ea04e346a6827412e165b36', 'hex')
  web3.eth.getTransactionCount(account1, (err, txCount) => {

  const txObject = {
    nonce:    web3.utils.toHex(txCount),
    gasLimit: web3.utils.toHex(400000), // Raise the gas limit to a much higher amount
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
    to: '0x50B4f4C306cFb2c83DF4457899Fa12cd638A16e8',
    data: this.state.officer.methods.setAddress( _address).encodeABI()
 }

//   const tx = new Tx(txObject)
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

setName(_id, _name) {
  this.setState({ loading: true })
  var Tx = require('ethereumjs-tx').Transaction;
  const web3 = new Web3('https://ropsten.infura.io/v3/6a049e3fdb75458b93dce3d601d0c13c')
  const account1 = '0x6Ae7E011502f1f380fe13dBde20eDD2d5116239e'
  const privateKey1=  Buffer.from('0e523854388177938c9a047f413458dd8fdad77d2ea04e346a6827412e165b36', 'hex')
  web3.eth.getTransactionCount(account1, (err, txCount) => {

  const txObject = {
    nonce:    web3.utils.toHex(txCount),
    gasLimit: web3.utils.toHex(400000), // Raise the gas limit to a much higher amount
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
    to: '0x50B4f4C306cFb2c83DF4457899Fa12cd638A16e8',
    data: this.state.officer.methods.setName(_id, _name).encodeABI()
 }

//   const tx = new Tx(txObject)
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

setCnic(_id, _cnic)  {
  this.setState({ loading: true })
  var Tx = require('ethereumjs-tx').Transaction;
  const web3 = new Web3('https://ropsten.infura.io/v3/6a049e3fdb75458b93dce3d601d0c13c')
  const account1 = '0x6Ae7E011502f1f380fe13dBde20eDD2d5116239e'
  const privateKey1=  Buffer.from('0e523854388177938c9a047f413458dd8fdad77d2ea04e346a6827412e165b36', 'hex')
  web3.eth.getTransactionCount(account1, (err, txCount) => {

  const txObject = {
    nonce:    web3.utils.toHex(txCount),
    gasLimit: web3.utils.toHex(400000), // Raise the gas limit to a much higher amount
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
    to: '0x50B4f4C306cFb2c83DF4457899Fa12cd638A16e8',
    data: this.state.officer.methods.setCnic(_id, _cnic).encodeABI()
 }

//   const tx = new Tx(txObject)
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

    const isLoggedIn = this.state.authenticated;
     if (this.state.redirect && this.state.authenticated) {
       this.state.redirect = false
       window.alert(this.state.redirect)
       return <Redirect to='/loginhomepage' />
     }
      //const disp = this.state.challan.methods.getChallan1(0).call()
      //window.alert(isLoggedIn)
    return (
      <div>
            <Suspense fallback={<LoadingPage  />}>
                <Router history={history}>
                    <div>
                    <Switch>
                     <Route path="/" exact
                        render={(routeProps) => (<HomePage {...routeProps} Lat_long={this.state.Lat_long} Marker_Lat_long={this.state.Marker_Lat_long} />)}
                     />
                    <ProtectedRoute 
                            exact path="/loginadduser" 
                            component={PageShell(LoginAddUser)}
                            createUser={this.createUser}         
                     /> 

                    <ProtectedRoute 
                            exact path="/logindailychallans" 
                            component={PageShell(LoginDailyChallans)}
                            daily_amount = {this.state.daily_amount} 
                            monthly_count = {this.state.monthly_count} 
                            annual_amount = {this.state.annual_amount} 
                            monthly_amount = {this.state.monthly_amount} 
                            monthly_array = {this.state.monthly_array} 
                            daily_count = {this.state.daily_count} 
                            daily_array = {this.state.daily_array} 
                            
                     />



                    <ProtectedRoute 
                            exact path="/loginaddofficer" 
                            component={PageShell(LoginAddOfficer)} 
                            createOfficer={this.createOfficer}
                          
                     />

                    <ProtectedRoute 
                            exact path="/loginhomepage"  
                            component={PageShell(LoginHomePage)}
                    />

                     <Route exact path="/main" component={PageShell(Main)}/>
                     
                    <Route exact path="/officertable" 
                            render={(routeProps) => (<OfficerTable {...routeProps} 
                            officers={this.state.officers} 
                            officerCount = {this.state.officerCount}/>)}
                     />
                     <Route exact path="/searchofficertable" 
                            render={(routeProps) => (<SearchOfficerTable {...routeProps} 
                            officers={this.state.officers} 
                            officerCount = {this.state.officerCount}/>)}
                     />

                     <Route exact path="/signin" 
                     render={(routeProps) => (<SignIn {...routeProps} Login={this.Login} />)}
                     />
                     <Route exact path="/payment" 
                            render={(routeProps) => (<Payment {...routeProps}
                            Addpaymentinformation = {this.Addpaymentinformation} />)}
                     />

                    <Route exact path="/updateofficer" 
                            render={(routeProps) => (<UpdateOfficer {...routeProps}
                            setAddress = {this.setAddress}
                            setCnic = {this.setCnic}
                            setName = {this.setName}
                            setDesignation = {this.setDesignation}
                            />)}
                     />

                     <Route exact path="/table" 
                          render={(routeProps) => (<Table {...routeProps} 
                          chalans={this.state.chalans} 
                          Addpaymentinformation = {this.Addpaymentinformation} 
                          chalanCount = {this.state.chalanCount} />)}
                     />

                    <Route exact path="/searchchallantable" 
                          render={(routeProps) => (<SearchChallanTable {...routeProps} 
                          chalans={this.state.chalans} 
                          Addpaymentinformation = {this.Addpaymentinformation} 
                          chalanCount = {this.state.chalanCount} />)}
                     />

                    <Route exact path="/vehicletable" 
                     render={(routeProps) => (<VehicleTable {...routeProps} vehicles={this.state.vehicles} vehicleCount = {this.state.vehicleCount} />)}
                     />
                    <Route exact path="/searchvehicletable" 
                     render={(routeProps) => (<SearchVehicleTable {...routeProps} vehicles={this.state.vehicles} vehicleCount = {this.state.vehicleCount} />)}
                     />

                     
                    <Route path="*" component={() => "404 NOT FOUND"} />   

                     {/* <ProtectedRoute path="/afterloginusertable" 
                     render={(routeProps) => (isLoggedIn ?<AfterLoginUserTable {...routeProps} users={this.state.users} userCount = {this.state.userCount}/>: <Redirect to='/signin' />)}
                     /> */}
                  

                    {/* <Route path="/usertable" 
                     render={(routeProps) => (<UserTable {...routeProps} users={this.state.users} userCount = {this.state.userCount}/>)}
                     /> */}


                     {/* <Route path="/loginaddchallan" 
                     render={(routeProps) => (isLoggedIn ?<LoginAddChallan {...routeProps} add_Chalan={this.add_Chalan}/>: <Redirect to='/signin' />)}
                     /> */}

                     
                     {/* <ProtectedRoute path="/loginaddchallan" 
                     render={(routeProps) => (isLoggedIn ? <LoginAddChallan {...routeProps} /> : <Redirect to='/signin' />)}
                     /> */}

                     {/* <ProtectedRoute path="/loginadduser" 
                     render={(routeProps) => (isLoggedIn ? <LoginAddUser {...routeProps} /> : <Redirect to='/signin' />)}
                     /> */}
                   </Switch>
                </div> 
          </Router>
          
        </Suspense>
          
      </div>
    );
  }
}

export default App;
