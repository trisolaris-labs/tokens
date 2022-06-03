# Aurora Token Assets

Token list for Trisolaris.

Token lists are stored in `lists` repository, they are stored in the format `<chain-id>/list.json`.

## Add Yours

Create a PR adding your token logo to the `assets` folder. Create a new folder with your token address (with properly formatted capitalization) and add a `logo.svg` file inside the directory.

Add your token metadata to the end of list.json with the following data:

```
{
"name": Token name,
"address": Token address,
"symbol": Token symbol,
"decimals": Token decimals,
"chainId": 1313161554,
"logoURI": "https://raw.githubusercontent.com/trisolaris-labs/tokens/master/assets/{TOKEN_ADDRESS}/logo.svg"
}
```

## Disclaimer

TriSolaris team allows anyone to submit new assets to this repository. However, this does not mean that we are in direct partnership with all of the projects.

TriSolaris team will reject projects that are deemed as scam or fraudulent after careful review. TriSolaris team reserves the right to change the terms of asset submissions at any time due to changing market conditions, risk of fraud, or any other factors we deem relevant.
