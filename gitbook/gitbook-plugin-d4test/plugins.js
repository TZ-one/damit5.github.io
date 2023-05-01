require(["gitbook"], function(gitbook) {

    // start事件
    gitbook.events.bind("start", function(e, pluginConfig) {
        // 获取<head>标签
        let head = document.getElementsByTagName('head')[0];
        // 创建<script>元素
        let script = document.createElement('script');
        script.async = true;
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9261110029983076";
        script.crossOrigin = "anonymous";

        // 将<script>元素添加到<head>标签中
        head.appendChild(script);
        console.log("google ads test");
    });

    // page.change事件
    gitbook.events.bind("page.change", function() {
        // 获取<head>标签
        let head = document.getElementsByTagName('head')[0];
        // 创建<script>元素
        let script = document.createElement('script');
        script.async = true;
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9261110029983076";
        script.crossOrigin = "anonymous";

        // 将<script>元素添加到<head>标签中
        head.appendChild(script);
        console.log("google ads test");
    });

});