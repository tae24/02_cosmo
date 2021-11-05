'use strict';

// $(function() {
//     alert('OK!');
//   });

// メインスライダー
$(function () {
  $(".slider").slick({
    autoplay: true,
    // dots: true,
    fade: true,
    arrows: true,
    // 左右の矢印
    prevArrow: '<img src="images/header_nav.png" class="slide-arrow mainPrev-arrow">',
    responsive: [
      {
        breakpoint: 767,
        settings: "unslick",
      },
    ],
  });
});
$(window).on("resize orientationchange", function () {
  $(".slider").slick("resize");
});

// 商品一覧のスライダー
$(function(){
  function sliderSetting(){

      var width = $(window).width();

      if(width <= 750){
          $('.sliderCard').not('.slick-initialized').slick({
              autoplay: true,
              fade: true,
              dots: true,
              arrows: true,
              // 左右の矢印
              prevArrow: '<img src="images/10175r.png" class="slide-arrow productPrev-arrow">',
              nextArrow: '<img src="images/10176l.png" class="slide-arrow productNext-arrow">',
          });
      } else {
          $('.sliderCard').slick('unslick');
      }
  }

  sliderSetting();

  $(window).resize( function() {
      sliderSetting();
  });
});


// スライダーブログ

$(function() {
  $('.sliderBlog').slick({
    autoplay: true,
    dots: true,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 2,
    arrows: true,// 左右の矢印
    // 矢印のカスタマイズ // 矢印画像の時
    prevArrow: '<img src="images/10175r.png" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="images/10176l.png" class="slide-arrow next-arrow">',
    responsive: [
      {
        breakpoint: 960,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: '0px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: '0px',
          slidesToShow: 2
        }
      }
    ]
  }); 
});


// $(document).on('ready', function() {
//   $(".sliderBlog").slick({
//     dots: true, // ドットインジケーターの表示
//     infinite: true, // スライドのループを有効にするか
//     slidesToShow: 2, // 表示するスライド数を設定
//     slidesToScroll: 1 // スクロールするスライド数を設定 
//   });
// });


// $(function () {
//   $(".slider").slick({
//     autoplay: true,
//     dots: true,
//     fade: true,
//   });
// });


// ポップアップ

// $(function () {
//   if ($(".js-modal-video").length) { //クラス名js-modal-videoがあれば以下を実行
//     $(".js-modal-video").modalVideo({
//       channel: "youtube",
//       youtube: {
//         rel: 0, //関連動画の指定
//         autoplay: 0, //自動再生の指定
//       },
//     });
//   }
// })();


//アコーディオンをクリックした時の動作
$('.faq__outer').on('click', function() {//タイトル要素をクリックしたら
	var findElm = $(this).next(".faq__inner");//直後のアコーディオンを行うエリアを取得し
	$(findElm).slideToggle();//アコーディオンの上下動作
    
	if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
		$(this).removeClass('close');//クラス名を除去し
	}else{//それ以外は
		$(this).addClass('close');//クラス名closeを付与
	}
});