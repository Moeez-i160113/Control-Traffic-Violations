pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract User {
    uint public count = 0;
    mapping(uint => User) users;     
    struct User {
        string name;
        string age;
        string homeaddress;
        string CNIC;
        string phone_no;
        string password;
        uint challan_count;
        mapping(uint=>uint) challans;
        uint vehicle_count;
        mapping(uint=>uint) vehicles;
    }
    function Login(uint _id, string memory _password) public returns(string memory) {
        if(compareStrings(_password,users[_id].password)){
            return getUserInformation(_id);
    }else{
        return "1";
        }
    }
    function add_challan_to_user(uint _id,uint _challanNo) public {
        users[_id].challans[users[_id].challan_count]= _challanNo;
        users[_id].challan_count++;
    }
    function add_vehicle_to_user(uint _id,uint _vehicleNo) public {
        users[_id].challans[users[_id].challan_count]= _vehicleNo;
        users[_id].vehicle_count++;
    }
    function createUser(string memory a1,string memory a2,string memory a3,string memory a4,string memory a5,string memory a6) public returns(uint){
        users[count]= User(a1,a2,a3,a4,a5,a6,0,0);
        count++;
        return count-1;
    }
    
    function getUserChallans(uint _id) public returns(string memory) {
        string memory ret_val="";
        for (uint i=0;i<users[_id].challan_count;i++){
            ret_val=strConcat(ret_val,uint2str(users[_id].challans[i]));
            ret_val=strConcat(ret_val,":");
        }
        return ret_val;
    }
    function getCount()public view returns(uint){
        return count;
    }
    function getUserInformation(uint _id)public returns(string memory){
        string memory ret=strConcat(users[_id].name,users[_id].age,users[_id].homeaddress,users[_id].CNIC);
        return strConcat(ret,users[_id].phone_no);
    }
    function getUserVehicle(uint _id) public returns(string memory) {
        string memory ret_val="";
        for (uint i=0;i<users[_id].vehicle_count;i++){
            ret_val=strConcat(ret_val,uint2str(users[_id].vehicles[i]));
            ret_val=strConcat(ret_val,":");
        }
        return ret_val;
    }
    function getUserIdFromCNIC(string memory cnic) public returns(int) {
        int count1=int(count);
        for (int i=0;i<count1;i++){
            if (compareStrings(cnic,users[uint(i)].CNIC)){
                return i;
            }
        }
        return -1;
    }
    function getUserIdFromPhone(string memory phone) public returns(int) {
        int count1=int(count);
        for (int i=0;i<count1;i++){
            if (compareStrings(phone,users[uint(i)].phone_no)){
                return i;
            }
        }
        return -1;
    }
    function remove_challan(uint _uid,uint _cid)public returns(string memory){
        if (users[_uid].challan_count>0){
            return ";";
        }
        users[_uid].challans[_cid]=users[_uid].challans[users[_uid].challan_count-1];
        users[_uid].challan_count--;
        return "t";
    
    }
    function strConcat(string memory _a, string memory _b, string memory _c, string memory _d) internal returns (string memory){
        bytes memory _ba = bytes(_a);
        bytes memory _bb = bytes(_b);
        bytes memory _bc = bytes(_c);
        bytes memory _bd = bytes(_d);
        bytes memory _bcomma = bytes(",");
        string memory abcd = new string(_ba.length + _bb.length + _bc.length + _bd.length+3 );
        bytes memory babcde = bytes(abcd);
        uint k = 0;
        for (uint i = 0; i < _ba.length; i++) babcde[k++] = _ba[i];
        babcde[k++]=_bcomma[0];
        for (uint i = 0; i < _bb.length; i++) babcde[k++] = _bb[i];
        babcde[k++]=_bcomma[0];
        for (uint i = 0; i < _bc.length; i++) babcde[k++] = _bc[i];
        babcde[k++]=_bcomma[0];
        for (uint i = 0; i < _bd.length; i++) babcde[k++] = _bd[i];
        return string(babcde);
    }
    function strConcat(string memory _a, string memory _b) internal returns (string memory){
        bytes memory _ba = bytes(_a);
        bytes memory _bb = bytes(_b);
        bytes memory _bcomma = bytes(",");
        string memory abcd = new string(_ba.length + _bb.length+1);
        bytes memory babcde = bytes(abcd);
        uint k = 0;
        for (uint i = 0; i < _ba.length; i++) babcde[k++] = _ba[i];
        babcde[_ba.length]=_bcomma[0];
        for (uint i = 0; i < _bb.length; i++) babcde[k++] = _bb[i];
        
        return string(babcde);
    }
    function uint2str(uint _i) internal pure returns (string memory _uintAsString) {
        if (_i == 0) {
            return "0";
        }
        uint j = _i;
        uint len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint k = len - 1;
        while (_i != 0) {
            bstr[k--] = byte(uint8(48 + _i % 10));
            _i /= 10;
        }
        return string(bstr);
    }
    function compareStrings (string memory a, string memory b) public view returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))) );
    }
}

