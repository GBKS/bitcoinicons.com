module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Bitcoin icons";
                args[0].description = "Interface icons for Bitcoin applications, free to use.";
                args[0].locale = "en_US";
                args[0].canonical = "https://bitcoin-icons.com";
                args[0].preview = "https://bitcoin-icons.com/bitcoin-icon-set.jpg";
                return args;
            })
    }
}