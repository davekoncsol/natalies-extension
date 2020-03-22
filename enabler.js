console.log("enabler.js");








(function ($) {

   // intervalReplaceImages = window.setInterval(replaceImages, 10000);


    function initialURLCheck() {
        var url = window.location.pathname;
        if (url.includes("assessment")) {
            console.log("uploads");
            intervalChangeContainer = window.setInterval(findContainer, 1000);
        }
    }

    //// listen for url change
    //$(window).bind('hashchange', function () {
    //});


    //function hashHandler() {
    //    this.oldHash = window.location.pathname;
    //    this.Check;
    //    var that = this;
    //    var detect = function () {
    //        if (that.oldHash != window.location.pathname) {
    //            console.log('url changed')
    //            initialURLCheck();
    //            that.oldHash = window.location.pathname;
    //        }
    //    };
    //    this.Check = setInterval(function () { detect() }, 100);
    //}

    //var hashChanged = new hashHandler();

    //window.addEventListener("hashchange", hashChanged);

    function replaceBackground() {
        $("body").css("background", "black")
        $("body").css("color", "white!important")
        clearInterval(intervalReplaceBackground);

    }

    function findContainer() {
        $("#container").css("background", "black");
        $("#container").css("color", "white");
        $(".cf").each(function () {
            $(this).css("color", "white!important")
            console.log($(this))
        })
        clearInterval(intervalChangeContainer);
    }
  // intervalReplaceBackground = window.setInterval(replaceBackground, 2000);

    
   // initialURLCheck();
 
})(jQuery);