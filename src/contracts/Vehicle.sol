pragma solidity ^0.5.0;
contract Vehicle {
    uint public count = 0;
    mapping(uint => information) info_table;
    
    struct information{
        string registration_number;
        string make_name;
        string color;
        uint vehicle_price;
        
        string engine_no;
        string chasis_no;
        string model;
        uint owner_id;        
        
    }
    function getCount()public view returns(uint){
        return count;
    }
    function getOwner(uint index) public view returns(uint) {
        return info_table[index].owner_id;
        
    }
    function addInformation(string memory a1,string memory a2,string memory a3,uint a4,string memory a5,string memory a6,string memory a7,uint oi) public returns  (uint){
        info_table[count] = information(a1,a2,a3,a4,a5,a6,a7,oi);
        count++;
        return count-1;
    }
    function setOwner(uint index,uint oi) public{
        info_table[index].owner_id=oi;
    }
    function getInformation(uint index) public view returns(string memory,string memory,string memory,uint,string memory,string memory,string memory) {
        return (info_table[index].registration_number,info_table[index].make_name,info_table[index].color,info_table[index].vehicle_price,info_table[index].engine_no,info_table[index].chasis_no,info_table[index].model);
    }
    
    
    function getInformation(string memory reg_no) public view returns(string memory,string memory,string memory,uint,string memory,string memory,string memory){
        for(uint i=0;i<count;i++){
            if (compareStrings(reg_no,info_table[i].registration_number)){
                return (info_table[i].registration_number,info_table[i].make_name,info_table[i].color,info_table[i].vehicle_price,info_table[i].engine_no,info_table[i].chasis_no,info_table[i].model);
            }
        }
        
    }
    
    function compareStrings (string memory a, string memory b) public view returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))) );
    }   
}

    
