require(["gitbook"], function(gitbook) {

    // start事件
    gitbook.events.bind("start", function(e, pluginConfig) {
        // 拿到配置文件
        var config = pluginConfig.d4test || {};
        console.log(pluginConfig);
        // token不为空
        if (!config.token) {
            throw "Need to option 'token' for Google ads plugin";
        }
        // 获取<head>标签
        let head = document.getElementsByTagName('head')[0];
        // 创建<script>元素
        let script = document.createElement('script');
        script.async = true;
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + config.token;
        script.crossOrigin = "anonymous";

        // 将<script>元素添加到<head>标签中
        head.appendChild(script);
    });

    // page.change事件
    gitbook.events.bind("page.change", function() {
        console.log("test");
    });

});