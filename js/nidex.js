window.onload=function(){
	let nav=document.getElementsByTagName("nav")[0];
	let nam=nav.getElementsByClassName("nam");
	let lst=nav.getElementsByTagName("li");
	let sybox=nav.getElementsByClassName("sybox")[0];
	let ydbox=nav.getElementsByClassName("ydbox")[0];
	let lxbox=nav.getElementsByClassName("lxbox")[0];
	let xwbox=nav.getElementsByClassName("xwbox")[0];
	let wmbox=nav.getElementsByClassName("wmbox")[0];
	console.log(lst,sybox);
	// 关于我们
	lst[1].onmouseenter=function(){
		sybox.style.height="82px";
		lst[1].style.borderBottom="1px solid #dd9933"
	}
	lst[1].onmouseleave=function(){
		sybox.style.height="0";
		lst[1].style.borderBottom="none"
	}
	// 康藤营地
	lst[2].onmouseenter=function(){
		ydbox.style.height="106px";
		lst[2].style.borderBottom="1px solid #dd9933"
	}
	lst[2].onmouseleave=function(){
		ydbox.style.height="0";
		lst[2].style.borderBottom="none"
	}
	// 康藤路线
	lst[3].onmouseenter=function(){
		lxbox.style.height="56px";
		lst[3].style.borderBottom="1px solid #dd9933"
	}
	lst[3].onmouseleave=function(){
		lxbox.style.height="0";
		lst[3].style.borderBottom="none"
	}
	// 康藤新闻
	lst[4].onmouseenter=function(){
		xwbox.style.height="82px";
		lst[4].style.borderBottom="1px solid #dd9933"
	}
	lst[4].onmouseleave=function(){
		xwbox.style.height="0";
		lst[4].style.borderBottom="none"
	}
	// 联系我们
	lst[5].onmouseenter=function(){
		wmbox.style.height="56px";
		lst[5].style.borderBottom="1px solid #dd9933"
	}
	lst[5].onmouseleave=function(){
		wmbox.style.height="0";
		lst[5].style.borderBottom="none"
	}
	//轮播图
    let mySwiper = new Swiper ('.swiper-container', {
        autoplay:true,
        autoplay: {
            disableOnInteraction: false,
        },
        speed:1000,
        direction: 'horizontal',

        loop: true,
        // effect : 'coverflow',
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        //     hideOnClick: true,
        //     hiddenClass: 'my-button-hidden',
        // },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            hideOnClick: true,
            hiddenClass: 'my-button-hidden',
            // disabledClass: 'my-button-disabled',
        },

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            clickable :true,
        },
    })
    $(".swiper-button-prev").removeClass("block").addClass("none");
    $(".swiper-button-next").removeClass("block").addClass("none");
    mySwiper.el.onmouseover = function(){
        mySwiper.autoplay.stop();
        $(".swiper-button-prev").removeClass("none").addClass("block");
        $(".swiper-button-next").removeClass("none").addClass("block");
    },
	mySwiper.el.onmouseleave= function(){
		mySwiper.autoplay.start();
		// console.log($(".swiper-button-prev")[0]);
		$(".swiper-button-prev").removeClass("block").addClass("none");
		$(".swiper-button-next").removeClass("block").addClass("none");
	}
   // $("mySwiper.el").triggerHandler("onmouseleave");

}