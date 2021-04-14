module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Bitcoin icons";
                args[0].description = "Interface icons for Bitcoin applications, free to use.";
                args[0].locale = "en_US";
                args[0].canonical = "https://bitcoinicons.com";
                args[0].preview = "https://bitcoinicons.com/bitcoin-icons.jpg";
                return args;
            })
    }
}