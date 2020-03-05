
pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract Officer {
    
    uint public OfficerCount = 0;
    
    mapping(uint => Officers) all_officers;     
    
    constructor() public {
                
    }
    struct Officers {
        uint id;
        string name;
        string CNIC;
        string Address;
        string designation;
        string password;
        string username;
        mapping(uint=>uint) challans;
        uint challan_count;
        
    }
    function Login (uint _id, string memory _username, string memory _password) public returns(string memory) {
        if(compareStrings(all_officers[_id].username , _username) && compareStrings(all_officers[_id].password ,_password)){
            return strConcat(all_officers[_id].name,all_officers[_id].CNIC,all_officers[_id].Address,all_officers[_id].designation);
        }else{
            return "1";
        }
    }
    function getCount()public view returns(uint){
        return OfficerCount;
    }
    function getInformation(uint id)public view returns(uint ,string memory,string memory,string memory,string memory,string memory,string memory){
        
        return (all_officers[id].id,all_officers[id].name,all_officers[id].CNIC,all_officers[id].Address,all_officers[id].designation,all_officers[id].password,all_officers[id].username);
    }
    function view_challan_history_by_officer(uint _id) public returns(string memory) {
        string memory ret_val="";
        for (uint i=1;i<=all_officers[_id].challan_count;i++)
        {
            ret_val=strConcat(ret_val,uint2str(all_officers[_id].challans[i]));
            ret_val=strConcat(ret_val,":");
        }
        return ret_val;
    }
    function remove_challan(uint _id,uint _cno) public returns(string memory){
        if(all_officers[_id].challan_count>0){
            return ";";
        }
        all_officers[_id].challans[_cno]=all_officers[_id].challans[all_officers[_id].challan_count];
        all_officers[_id].challan_count--;
        return "t";
        
    }
    function add_challan_to_warden(uint _id,uint _challanNo) public {
        
        all_officers[_id].challans[all_officers[_id].challan_count]= _challanNo;
        all_officers[_id].challan_count++;

    }
    function createOfficer(string memory _name, string memory _CNIC, string memory _designation,string memory _username, string memory _password) public returns(uint){
        require(bytes(_name).length > 0);
        require(bytes(_CNIC).length > 12);
        all_officers[OfficerCount] = Officers(OfficerCount, _name, _CNIC, "",_designation,_password,_username,0);
        OfficerCount ++;
        return OfficerCount-1;
    } 
    
    function compareStrings (string memory a, string memory b) public view
       returns (bool) {
    return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))) );

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
}
