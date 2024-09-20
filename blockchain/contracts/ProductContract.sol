// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProductContract {
    struct Product {
        string name;
        string description;
        uint price;
        string ipfsHash;
    }

    mapping(uint => Product) public products;
    uint public productCount;

    function addProduct(string memory _name, string memory _description, uint _price, string memory _ipfsHash) public {
        products[productCount] = Product(_name, _description, _price, _ipfsHash);
        productCount++;
    }

    function getProduct(uint _id) public view returns (string memory, string memory, uint, string memory) {
        Product memory p = products[_id];
        return (p.name, p.description, p.price, p.ipfsHash);
    }
}
