import React from "react";
import { useMoralisWeb3Api } from "react-moralis";
import { Options } from "../types";

export const Network = () => {

    const Web3Api = useMoralisWeb3Api();

    const fetchSearchNFTs = async () => {
        const options: Options = { q: "Pancake", chain: "bsc", filter: "name" };
        const NFTs = await Web3Api.token.searchNFTs(options);
        console.log(NFTs);
    };
    fetchSearchNFTs()
    return (
        <div>adas</div>
    )
}