// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC721/IERC721.sol)

pragma solidity ^0.8.19;

import {ERC5192} from "./ERC5192.sol";

contract Token is ERC5192 {
    constructor(
        string memory _name,
        string memory _symbol,
        bool _isLocked
    ) ERC5192(_name, _symbol, _isLocked) {}
}
