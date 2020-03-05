
pragma solidity ^0.5.0;
contract Challan {
    uint public chalanCount = 0;
    mapping(uint => Chalan) all_challans;
    
    constructor () public {
    }

    struct Chalan {
      string vehicle_number_plate;
      string date_time;
      
      uint violation_type;
      uint fine_amount;
      
      string driver_name;
      string driver_cnic;
      string owner_cnic;
      uint warden_id;
      
      string due_date;
      uint paid_information;
      
      string confiscated_document;
      uint available_at;
  
      string filename;
    }
    function add_Chalan(string memory _vnp,string memory _d,uint _vt,uint _fa,string memory _dn,string memory _dc,string memory _oc,uint _wi,string memory _dd,string memory _cd,uint _aa,string memory coordinates_filename) public returns  (uint){
        uint _pi=0;
        all_challans[chalanCount] = Chalan(_vnp,_d,_vt,_fa,_dn,_dc,_oc,_wi,_dd,_pi,_cd,_aa,coordinates_filename);
        chalanCount++;
        return chalanCount;
    }
    function set_filename(uint _id,string memory file) public {
        all_challans[_id].filename=file;
    }
    function getChallan1(uint index) public view returns(uint,string memory,string memory,uint,uint,string memory,string memory) {
        return (index,all_challans[index].vehicle_number_plate,all_challans[index].date_time,all_challans[index].violation_type,all_challans[index].fine_amount,all_challans[index].driver_name,all_challans[index].driver_cnic);
    }
    function getChallan2(uint index) public view returns(string memory,uint,string memory,uint,string memory,uint) {
        return (all_challans[index].owner_cnic,all_challans[index].warden_id,all_challans[index].due_date,all_challans[index].paid_information,all_challans[index].confiscated_document,all_challans[index].available_at);
    }
    function getChallan3(uint index) public view returns(string memory) {
        return (all_challans[index].filename);
    }

    function add_paid_information(uint _cn,uint _is) public {
        require(_cn<=chalanCount);
        require(_cn>0);
        all_challans[_cn].paid_information=_is;
    }
    function get_paid_information(uint _cn) public returns (uint){
        return all_challans[_cn].paid_information;
    }
    function compareStrings (string memory a, string memory b) public view 
       returns (bool) {
    return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))) );

     }
    
    enum violation_types { TL, OS, NH, NNP, BW, NSB }
    // TL = Traffic Light
    // OS = OverSpeeding
    // NH = No Helmet 
    // NNP = No Number Plate
    // BW = Black Windows
    // NSB = No Seat Belt
    
    function strConcat(string memory _a, string memory _b) internal returns (string memory){
        bytes memory _ba = bytes(_a);
        bytes memory _bb = bytes(_b);
        bytes memory _bcomma = bytes(":");
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

    
