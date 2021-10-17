/* Navbar wird schwarz */
    $(window).scroll(function(){
    $('div1').toggleClass('scrolled', $(this).scrollTop() > 10);
});


    $(window).scroll(function(){
    $('a').toggleClass('scrolled', $(this).scrollTop() > 10);
});





    /* Logo wechsel von dunkel zu hell */
        window.onscroll = function () {
        scrollFunction();
        scrollFunctionOne();
    };

        function scrollFunction() {
        var image = document.getElementById("myImage");
        if (document.documentElement.scrollTop > 10)
        image.src = "bilder/subbywhite.png";
        else
        image.src = "bilder/subbyblack2.png"
    }

        function scrollFunctionOne() {
        var image = document.getElementById("myImageOne");
        if (document.documentElement.scrollTop > 10)
        image.src = "bilder/list1.png";
        else
        image.src = "bilder/list.png"
    }



 /* Handymenu */
        var menulist = document.getElementById("menulist");

        menulist.style.maxHeight = "0px";

        function  togglemenu() {
        if(menulist.style.maxHeight == "0px")
    {
        menulist.style.maxHeight = "280px"
    }
        else menulist.style.maxHeight = "0px"
    }

