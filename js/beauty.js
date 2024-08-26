$(function () {
    $('.category').mouseover(function () {
        $(this).children('.category_in').stop().slideDown(0);
    }).mouseout(function () {
        $('.category_in').stop().slideUp(0)
    });
});

$ (function () {
    $('.category_menus').mouseover(function () {
        $('.slideright').stop().animate({ marginLeft: 250 }, 400)
    });
    $('.category_menus').mouseout(function () {
        $('.slideright').stop().animate({ marginLeft: 0 }, 400)
    });
});

$(function () {
    let intervalId;
    let intervalTime = 5000;
    let resetTimer;

    function resetIntervalTime() {
        intervalTime = 5000;
        clearInterval(intervalId);
        intervalId = setInterval(slider, intervalTime);
    }

    function prev() {
        if (intervalTime < 10000) {
            intervalTime += 3000;
            clearInterval(intervalId);
            intervalId = setInterval(slider, intervalTime);
        }

        clearTimeout(resetTimer);
        resetTimer = setTimeout(resetIntervalTime, 5000);

        $('.slidewrap li:last').prependTo('.slidewrap');
        $('.slidewrap').css('margin-left', -1900);
        $('.slidewrap').stop().animate({ marginLeft: 0 }, 800);
    }

    function next() {
        if (intervalTime < 10000) {
            intervalTime += 3000;
            clearInterval(intervalId);
            intervalId = setInterval(slider, intervalTime);
        }

        clearTimeout(resetTimer);
        resetTimer = setTimeout(resetIntervalTime, 5000);

        $('.slidewrap').stop().animate({ marginLeft: -1900 }, function () {
            $('.slidewrap li:first').appendTo('.slidewrap');
            $('.slidewrap').css({ marginLeft: 0 });
        });
    }

    function slider() {
        $('.slidewrap').stop().animate({ marginLeft: -1900 }, function () {
            $('.slidewrap li:first').appendTo('.slidewrap');
            $('.slidewrap').css({ marginLeft: 0 });
        });
    }

    intervalId = setInterval(slider, intervalTime);

    $('.prev').click(function () {
        prev();
    });

    $('.next').click(function () {
        next();
    });
});

$(function () {

    $.ajax({
        url: "./json/beauty_section.json",
        dataType: "json",

        success: function (data) {

            if (data.length > 0) {

                for (var i in data) {
                    $(".box").eq(i).append('<div class="article_img">' + "<img src='img/beauty_kurly_img/" + data[i].url + "'>" + '</div>');
                    $(".box").eq(i).append("<div><button><img src='img/"+data[i].add+'</button></div>');
                    $(".box").eq(i).append('<h3>' + data[i].title + "</h3>");
                    $(".box").eq(i).append('<span><del>' + data[i].price_del + '</del></span>');
                    $(".box").eq(i).append('<div>' + data[i].price_sale + '</span>' + data[i].price_won + '</span></div>');

                    var count_2 = Math.floor(Math.random() * 30000);
                    if (count_2 > 9999) {count = "9,999+"}
                    $(".box").eq(i).append('<img src="img/review.png" class="review_icon"><span>' + count_2 + '</span>');
                    
                }
            }
        }
    });
});

$(function () {

    $.ajax({
        url: "./json/beauty_category.json",
        dataType: "json",


        success: function (data) {

            if (data.length > 0) {

                for (var i in data) {
                    var category_img_2 = data[i].category_menu_img;
                    var category_text_2 = data[i].category_menu_text;

                    $(".category_menu_box").eq(i).append("<img src='img/category_img/category_menu_purple_2_img/" + category_img_2 + "class='category_menu_img'>");
                    $(".category_menu_box").eq(i).append('<span class="category_menu_text">' + category_text_2 + '</span>');
                    
                }
            }
        }
    });
});