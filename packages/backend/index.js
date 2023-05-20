const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { ethers, BigNumber, utils } = require("ethers");

const contracts = {
    250: {
        diamond: "0x1a0635dE080b525e23A6835730DCa2240d347E14",
    },
};