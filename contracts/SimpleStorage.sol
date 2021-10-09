// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
contract SimpleStorage{
       string public name = "Muzammil";
       uint public Age = 20;
       function changeName()public{
              name='MuzammilSIDDIQUI';
       }
       function changeAge()public{
              Age=50;
       }
}