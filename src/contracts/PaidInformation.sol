pragma solidity ^0.5.0;
contract PaidInformation {
    uint public count = 0;
    mapping(uint => information) info_table;
    
    struct information{
        string date_submitted;
        string challan_no;
        string bank_name;
    }
    function getCount()public view returns(uint){
        return count;
    }
    function getInformation(uint index) public view returns(string memory,string memory,string memory){
        require(index<count);
        return (info_table[index].date_submitted,info_table[index].challan_no,info_table[index].bank_name);
    }
    function editInformation(uint index,string memory a1,string memory a2,string memory a3) public returns(uint) {
        info_table[index].date_submitted=a1;
        info_table[index].challan_no=a2;
        info_table[index].bank_name=a3;
        return (1);
    }

    function addInformation(string memory a1,string memory a2,string memory a3) public returns  (uint){
        info_table[count] = information(a1,a2,a3);
        count++;
        return count-1;
        
    }
    
}

    
