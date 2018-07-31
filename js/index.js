(function () {
    //请求服务器获取 当前是第几位访问者
    loadShareNumber();

    var screenHeight = window.innerHeight;
    var now = {row: 1, col: 1}, last = {row: 0, col: 0};
    towards = {up: 1, right: 2, down: 3, left: 4};
    var isAnimating = false;

    s = window.innerHeight / 500;
    ss = 250 * (1 - s);

    $('.wrap').css('-webkit-transform', 'scale(' + s + ',' + s + ') translate(0px,-' + ss + 'px)');

    /*document.addEventListener('touchmove', function (event) {
        if (event.cancelable) {
            // 判断默认行为是否已经被禁用
            if (!event.defaultPrevented) {
                event.preventDefault();
            }
        }
    }, false);*/

    /*$(document).swipeUp(function () {
        if (isAnimating) return;
        last.row = now.row;
        last.col = now.col;
        if (last.row != 4) {
            now.row = last.row + 1;
            now.col = 1;
            pageMove(towards.up);
        }
    })*/

    /**
     * 触屏事件，页面数在这里修改
     */
    $("body").swipe({
        left: function () {
            console.log('向左运动');
        },
        right: function () {
            console.log('向右运动');
        },
        up: function () {
            if (isAnimating) return;
            last.row = now.row;
            last.col = now.col;
            if (last.row != 4) {
                now.row = last.row + 1;
                now.col = 1;
                pageMove(towards.up);
            }else {

            }
        },
        down: function () {
            if (isAnimating) return;
            last.row = now.row;
            last.col = now.col;
            if (last.row != 1) {
                now.row = last.row - 1;
                now.col = 1;
                pageMove(towards.down);
            }
        }
    });


    /**
     * 触屏调用方法
     * @param tw
     */
    function pageMove(tw) {
        var lastPage = ".page-" + last.row + "-" + last.col,
            nowPage = ".page-" + now.row + "-" + now.col;

        switch (tw) {
            case towards.up:
                outClass = 'pt-page-moveToTop';
                inClass = 'pt-page-moveFromBottom';
                break;
            case towards.right:
                outClass = 'pt-page-moveToRight';
                inClass = 'pt-page-moveFromLeft';
                break;
            case towards.down:
                outClass = 'pt-page-moveToBottom';
                inClass = 'pt-page-moveFromTop';
                break;
            case towards.left:
                outClass = 'pt-page-moveToLeft';
                inClass = 'pt-page-moveFromRight';
                break;
        }
        isAnimating = true;
        $(nowPage).removeClass("hide");

        $(lastPage).addClass(outClass);
        $(nowPage).addClass(inClass);

        setTimeout(function () {
            $(lastPage).removeClass('page-current');
            $(lastPage).removeClass(outClass);
            $(lastPage).addClass("hide");
            $(lastPage).find("img").addClass("hide");

            $(nowPage).addClass('page-current');
            $(nowPage).removeClass(inClass);
            $(nowPage).find("img").removeClass("hide");

            isAnimating = false;
        }, 600);
    }

    /**
     * 生成按钮
     */
    $("#submit").click(function () {
        console.log("处理图片");
        var name = $("#in1").val();
        if (name===""){
            alert("请输入祝福者");
            return;
        }
        $(".share_number").text(shareNumber);
        $(".render_text").text(name);
        $("#erweima").removeClass("hide");


        $(".input_container").addClass("hide");
        $("#submit").removeClass("btn");
        $("#submit").removeClass("btn-info");
        $("#submit").addClass("hide");

        $("#submit").css({
            "color":'#ffffff',
            "left":"0",
            "right": "0",
            "margin":"0 auto",
            "width":"auto",
            "text-align":"center"
        });

        var shareContent = document.getElementById("targetDom");
        var width = shareContent.offsetWidth;
        var height = shareContent.offsetHeight;
        var canvas = document.createElement("canvas");
        var scale = 2;

        canvas.width = width * scale;
        canvas.height = height * scale;
        canvas.getContext("2d").scale(scale, scale);

        var opts = {
            scale: scale,
            canvas: canvas,
            logging: true,
            width: width,
            height: height
        };
        html2canvas(shareContent,opts).then(function (canvas) {



            //document.getElementById("targetDom").appendChild(canvas);
            var imgContent = document.getElementById("img");
            var img = Canvas2Image.convertToImage(canvas, canvas.width, canvas.height);
            //$(img).addClass("zimg");
           // window.location.href = "http://zhounianqing.myhuanghai.com/img.html?data="+dataImg;
          //  window.location.href = "http://www.beidu.com";

            $(img).css({
                "width": canvas.width / 2 + "px",
                "height": canvas.height / 2 + "px"
            });


            imgContent.appendChild(img);
            $("#img").css({
                "width": canvas.width / 2 + "px",
                "height": canvas.height / 2 + "px"
            });
            $("#save_note").removeClass("hide");
            $("#save_note").addClass("flash");
        });

    });

    /*var HEIGHT = $(document).height();
    $(window).resize(function() {
        //alert(HEIGHT);
        $("#fip").height(HEIGHT);
    });*/
    $("#in1").focus(function () {
        //$("#submit").tran("hide");
       // $("#submit").addClass("hide");
        $('#submit').attr("disabled",true);
        $('#submit').text("请关闭输入法并点击页面");
        $('.page').height(screenHeight);
    });
    $("#in1").blur(function () {
        //$("#submit").removeClass("hide");
        $('#submit').attr("disabled",false);
        $('#submit').text("点击生成祝福");
    });

})();



var b = true;
var audio = document.getElementById("musicfx");
var div_img = document.getElementById("div_music");
//var audio = $('#musicfx');
//var img = $('#img_music');
/**
 * 音乐图标点击事件
 */
function musicClick() {
    //var audio = $(audio);
    if (b) {
        audio.pause();
        div_img.style.webkitAnimation = 'normal';


    } else {
        audio.play();
        div_img.style.webkitAnimation = 'circle 4s infinite linear';
    }
    b = !b;

}

var shareNumber = "123656";

/**
 * 请求 访问id 接口
 */
function loadShareNumber() {

    //  alert("haha")
    console.log("请求")
    $.ajax({
        url:'https://www.myhuanghai.com/index.php/index/index/caclsharenumber',
        data:{'name':'haha'},
        crossDomain:true,
        type:'POST',

        error:function (data) {
            console.dir(data)
        },
        success:function(data){
            console.dir(data)
            //span.hide()
            shareNumber = data.data;
            $(".share_number").text(shareNumber);
            if(data.status == '1'){
                //alert(data.data)
            } else{
                //  alert(data.data)

            }
        }
    });
}

