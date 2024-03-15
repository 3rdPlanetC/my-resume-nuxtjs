import tokens from "./tokens.js";

interface TokenMappingITF {
    colors: {
        [x: string]: {
            value: string,
            name: string
        }
    }
}

const tokensMapping: TokenMappingITF = {
    colors: {
        "color-text-primary":
        {
            "value": tokens.colorTextPrimary,
            "name": "text-primary"
        }
    }
}

export default tokensMapping