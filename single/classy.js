//classy.js

$(document).ready(function(){
	hh=$(window).height();
	ww=$(window).width();
	$(".section div").css({"height":hh});
	$(".section .about, .dress, .studio, .event, .location").css({"width":ww});
	$(".section ul li").css({"height":hh});

	if (ww<480)
	{
	
		$(".gnb").hide();
	};

$(window).on("load resize",function(){
	hh=$(window).height();
	ww=$(window).width();
	$(".section div").css({"height":hh});
	$(".section .about, .dress, .studio, .event, .location").css({"width":ww});
	$(".section ul li").css({"height":hh});

	docpos=new Array(0,hh,hh*2,hh*3,hh*4);
	sidepos=new Array(0,hh,hh*2,hh*3,hh*4);


	$("#map").css({"height":"50%"});


//메뉴 클릭시 이동
	$(".header .topgnb li a").on({"click":function(){
		idx=$(".header .topgnb li a").index($(this));
		console.log(idx);
		$(this).parent().addClass("aactive").siblings().removeClass("aactive");
		$("html,body").animate({scrollTop:docpos[idx]});
	}}); //on click

	$(".header .gnb li a").on({"click":function(){
		idx=$(".header .gnb li a").index($(this));
		console.log(idx);
		$(this).parent().addClass("active").siblings().removeClass("active");
		$("html,body").animate({scrollTop:docpos[idx]});
	}}); //on click

	$(".page li a").on({"click":function(){
		idx=$(".page li a").index($(this));
		console.log(idx);
		$(this).parent().addClass("active1").siblings().removeClass("active1");
		$("html,body").animate({scrollTop:docpos[idx]});
	}}); //on click

	$(".sidenav a").on({"click":function(){
		idx=$(".sidenav a").index($(this));
		console.log(idx);
		//$(this).parent().addClass("active1").siblings().removeClass("active1");
		$("html,body").animate({scrollTop:sidepos[idx]});
	}}); //on click

// slider 
	$(".bxslider").bxSlider({
	  mode: 'horizontal',
	  auto: true,
	  autoControls:  false,
	  stopAutoOnClick: true,
	  pager: false,
	  slideWidth: 600,
	  pause : 1400,
	  responsive : true,
	  nextSelector : 'null'
	});

//모달창 위치
	$(".bigbox").css({"position":"fixed","top":"6%","height":"90%","margin":"0 auto"});
	
//이미지교체	
	$(".studio ul li img").click(function(){
		bb1=$(this).width();
		bb2=-(bb1/2);
		$(".bigbox").css({"position":"fixed","left":"0px","top":"6%","height":"90%","width":bb1,left:"50%","margin-left":bb2});
		
		aa=$(this).attr("data-bi");//나올이미지
		$(".bigbox .bigimg").attr("src", aa);
		$(".blackbox, .bigbox").fadeIn(0.2);

	}); //click

	$(".bigbox .bigimg, .bigbox .close").click(function(){
		$(".blackbox, .bigbox").fadeOut(0.2);
	}); //bigimg click
	
//sidenav 	
	$("#close").hide();
	$(".slidebtn").click(function(){
		$("#close").css({"z-index":"9999"});
		$("#close").show();
		$(this).css({"display":"none"})
	});

	$("#close").click(function(){
		$(".slidebtn").css({"z-index":"9999"});
		$(".slidebtn").show();
		$(this).hide();
	});

// pagenation /topgnb	
	$(window).scroll(function(){
		if ($(this).scrollTop()>=hh*4)
		{
			$(".header .topgnb li").eq(4).addClass("aactive").siblings().removeClass("aactive");
			$(".page li:last-child").addClass("active1").siblings().removeClass("active1");
		} else if ($(this).scrollTop()>=hh*3 && $(this).scrollTop()<hh*4)
		{
			$(".header .topgnb li").eq(3).addClass("aactive").siblings().removeClass("aactive");
			$(".page li:nth-child(4)").addClass("active1").siblings().removeClass("active1");
			$(".ebox").css({"top":"58%","left":"70px"});
		} else if ($(this).scrollTop()>=hh*2 && $(this).scrollTop()<hh*3)
		{
			$(".header .topgnb li").eq(2).addClass("aactive").siblings().removeClass("aactive");
			$(".page li:nth-child(3)").addClass("active1").siblings().removeClass("active1");
			$(".ebox").css({"top":"58%","left":"-550px","transition":"1s"});
		} else if ($(this).scrollTop()>=hh && $(this).scrollTop()<hh*2)
		{
			$(".header .topgnb li").eq(1).addClass("aactive").siblings().removeClass("aactive");
			$(".page li:nth-child(2)").addClass("active1").siblings().removeClass("active1");
		} else {
			$(".header .topgnb li").eq(0).addClass("aactive").siblings().removeClass("aactive");
			$(".page li:nth-child(1)").addClass("active1").siblings().removeClass("active1");
			
		}; //if
	}); //scroll top
	
// width 480 이하 일때 ebox 위치조정	
	$(window).scroll(function(){
		if ($(this).scrollTop()>=hh*3 && $(this).scrollTop()<hh*4 && $(this).width()<=480)
		{

			$(".ebox").css({"top":"20%","left":"28px"});
		} else if ($(this).scrollTop()>=hh*2 && $(this).scrollTop()<hh*3 && $(this).width()<=480)
		{

			$(".ebox").css({"top":"20%","left":"-550px","transition":"1s"});
		}; //if	
	}); //scroll top	

//topgnb 나타남
	$(window).scroll(function(){
			if (($(this).scrollTop() >=50) && ($(this).width()>480))
			{	
				$(".header .gnb, .side").css({"display":"none"})
				$(".header .topgnb").css({"display":"block"})
				
				
			}else if (($(this).scrollTop() >=50) && ($(this).width()<=480)){
				$(".header .gnb, .side").css({"display":"none"})
				$(".header .topgnb").css({"display":"none"})
				
			};
//topdnb 색상변경	
	});//window scroll
	$(window).scroll(function(){
			if ($(this).scrollTop() >=hh)
			{	
				$(".header .topgnb li a").css({"color":"#444"})
				//$(".header .topgnb li.aactive a").css({"border-bottom":" 2px solid #444"});
				
			}else {
				$(".header .topgnb li a").css({"color":""})
				//$(".header .topgnb li.aactive a").css({"border-bottom":" 2px solid #eeecec"});
				
			}

	});//window scroll

//map
	var map = new naver.maps.Map('map', {
        scaleControl: false,
        logoControl: false,
        mapDataControl: false,
        zoomControl: true,
        minZoom: 1
    });  
	  
	 //var map = new naver.maps.Map('map');
      var myaddress = '강남구 신사동 630-13';// 도로명 주소나 지번 주소만 가능 (건물명 불가!!!!)
      naver.maps.Service.geocode({address: myaddress}, function(status, response) {
          if (status !== naver.maps.Service.Status.OK) {
              return alert(myaddress + '의 검색 결과가 없거나 기타 네트워크 에러');
          }
          var result = response.result;
          // 검색 결과 갯수: result.total
          // 첫번째 결과 결과 주소: result.items[0].address
          // 첫번째 검색 결과 좌표: result.items[0].point.y, result.items[0].point.x
          var myaddr = new naver.maps.Point(result.items[0].point.x, result.items[0].point.y);
          map.setCenter(myaddr); // 검색된 좌표로 지도 이동
          // 마커 표시
          var marker = new naver.maps.Marker({
            position: myaddr,
            map: map
          });
          // 마커 클릭 이벤트 처리
          naver.maps.Event.addListener(marker, "click", function(e) {
            if (infowindow.getMap()) {
                infowindow.close();
            } else {
                infowindow.open(map, marker);
            }
          });
          // 마크 클릭시 인포윈도우 오픈
          var infowindow = new naver.maps.InfoWindow({
              content: '<h4> [CLASSY WEDDING]</h4><a href="https://developers.naver.com" target="_blank"><img src="img/LOGO.png" width="236" height="202" border="0" alt=""></a>' //아이콘 바꾸는곳 닷홈에 올려줘야함!!
          });
      }); //map

}); //resize
}); //doc