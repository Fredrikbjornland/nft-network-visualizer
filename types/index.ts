export type Options = {
    chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
    format?: "decimal" | "hex" | undefined;
    q: string;
    filter?: "name" | "description" | "attributes" | "global" | "name,description" | "name,attributes" | "description,attributes" | "name,description,attributes" | undefined;
    from_block?: number | undefined;
    to_block?: number | undefined;
    from_date?: string | undefined;
    to_date?: string | undefined;
    offset?: number | undefined;
    limit?: number | undefined;
}