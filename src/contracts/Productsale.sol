pragma solidity >=0.5.0 <0.6.0;

contract Productsale{
    uint public productCount =0;
    struct Product{
        uint pid;
        string pname;
        address payable owner;
        uint price;
        bool purchased;
    }

    event Productadded(
        uint pid,
        string pname,
        address payable owner,
        uint price,
        bool purchased
    );

    event ProductPurchased(
        uint pid,
        string pname,
        address payable owner,
        uint price,
        bool purchased
    );

    mapping(uint => Product) public Products;

    
    function addProduct(string memory _pname,uint _price) public{
        productCount++;
        require(_price>0);
        require(bytes(_name).length>0);
        Products[productCount]= Products(productCount,_name,_price,msg.sender,false);
        emit Productadded(productCount, _pname, msg.sender, _price, false);


    }


    function buyProduct(uint _pid) public payable{

        
        Product memory _product = Products[_pid];
        address payable _seller =_product.owner;
        require(_pid>0 && _pid <productCount);
        require(msg.value>=_product.price);
        _product.owner =msg.sender;
        _product.purchased = true;
        Products[id] = _product;
        address(_seller).transfer(msg.value);
        emit ProductPurchased(_product.pid, _product.pname, _product.owner, msg.sender, true);
    }


}