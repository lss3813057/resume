$(function(){
	$(".moveDiv").bgMove({
            selectors: [".draw"],
            maxRange: 50            
        });
    $("#fullpage").fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4','page5'],
        css3:false,
        easing:"easeInQuart",
        menu: '#menu',        
        verticalCentered: false
    });

    $(window).resize(function(){
        autoScrolling();
    });  

    function init(){
        headUnderline();
        setHeight();
        autoScrolling();
        jqShow();
    }
    
    init();

    
})

function headUnderline(){
    var lin=$(".hdRight ul>li").length;    
    var lileft = new Array();
    var liwidth= new Array();
    var linew=0;
    lileft[0]=0; 
    for(var i=0;i<lin;i++){
        var liw=$(".hdRight ul li").eq(i).outerWidth();
        liwidth.push(liw);
        linew+=liw;        
        lileft.push(linew);
    }
    $(".hdRight ul li").hover(function(){
        var i = $(this).index();
        $(".tit-line").css({
                "left":lileft[i],
                "width":liwidth[i]
            }); 
    },
    function(){        
        $(".tit-line").css("left","-100px");
    });


  
}

function setHeight(){
    var hh=$(window).height()-70;   
    if(hh>0){
        $("#top-mainBg").css("height",hh);
    }
}

function autoScrolling(){
        var $ww = $(window).width();
        if($ww < 1024){
            $.fn.fullpage.setAutoScrolling(false);
        } else {
            $.fn.fullpage.setAutoScrolling(true);
        }
    }

function jqShow(){
    $("#menu li").hover(function(){        
        $(this).find("span").toggle();
    });

    $(".zpmid li").hover(function(){        
        $(this).find(".zp-info-bg").stop(true).slideToggle("slow");
    });
}
 

$.fn.extend({
    bgMove: function () {
        function init() {
            l = {
                x: i.width() / 2,
                y: i.height() / 2
            }; 
            f = calMove(); 
            f && (i.on("mousemove", function (a) {
                chcmove(a)
            }),
            f.on("move", function () {
                addTar.call(this)
            }))
        }
        function addTar() {
            var a = $(this),
                b = [a, a.data("movLeft"), a.data("movTop")];
            m.push(b), m.length > 1 || doMove()
        }
        function doMove() {        	
            if (m.length) {
                var a = m.shift();
                a[0].css({
                    left: a[1],
                    top: a[2]
                });

                // $(a[0]).animate({
                //     left: a[1],
                //     top: a[2]
                // },"fast");
                arguments.callee()
            }
        }
        function calMove() {
            for (var a, b = g.selectors, c = ""; b.length;) {
                c = b.pop();
                var d = i.find(c);
                d && (a = a ? a.add(d) : d)
            }
            return a.each(function () {
                var a = $(this);
                a.data("maxRange", Number(a.data("mouse-move")) * g.maxRange), a.data("movLeft", parseFloat(a.css(
                    "left"))), a.data("movTop", parseFloat(a.css("top")))
            }), a
        }
        function chcmove(a) {
            var b = {
                x: a.pageX || a.offsetX - i.offset().left,
                y: a.pageY || a.offsetY - i.offset().top
            }, c = {
                    perX: (b.x - l.x) / j,
                    perY: (b.y - l.y) / k
                };
            f.each(function () {
                var a = $(this),
                    b = a.data("movLeft"),
                    d = a.data("movTop"),
                    e = a.data("maxRange"),
                    f = c.perX * e,
                    g = c.perY * e;
                a.data("movTop", d + g), a.data("movLeft", b + f)
            }), f.trigger("move", c), l = b
        }

        var f, g = "object" == typeof arguments[0] ? arguments[0] : {}, h = {
                selectors: [],
                maxRange: 500                
            }, i = this,
            j = this.width(),
            k = this.height(),
            l = {
                x: 0,
                y: 0
            }, 
            m = [];
        g = $.extend(h, g),init()
    }
});


























/*function test(){}
	test.prototype = {
		init:function(){
			this.tshow();
			this.tnew();
			alert(this.role);
		},
		tshow:function(){
			alert("this is tshow!");
		},
		tnew:function(){
			alert("this is tnew!");
		},
		role:"a role"

}*/