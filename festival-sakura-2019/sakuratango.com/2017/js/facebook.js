// JavaScript Document
    $(window).load(function () {
        var htmlStr = $('#pageplugin').html();
        var timer = false;
        $(window).resize(function () {
            if (timer !== false) {
                clearTimeout(timer);
            }
            timer = setTimeout(function() {
                $('#pageplugin').html(htmlStr);
                window.FB.XFBML.parse();
            }, 200);
        });
    });
