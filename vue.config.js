module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Bitcoin icon set";
                args[0].description = "An open-design set of icons made for Bitcoin centric applications.";
                args[0].locale = "en_US";
                args[0].canonical = "https://bitcoinicons.com";
                args[0].preview = "https://bitcoinicons.com/bitcoin-icon-set.jpg";
                return args;
            })
    }
}