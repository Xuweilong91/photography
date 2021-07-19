// fullpage插件初始化
$(function () {
  // 节流判断
  let isInit = true;
  init();

  function init() {
    console.log('init');
    $('#fullpage').fullpage({
      //定义锚链接
      anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
      menu: '#menu',
      afterLoad: function (anchorLink, index) {
        if (index.index == 1) {
          $('.project .item').removeClass('before-active');
        }
        if (index.index == 2) {
          $('.recommand .item .img-holder2').removeClass('mg0');
          $('.recommand .item').removeClass('mg0');
        }
        if (index.index == 3) {
          $('.about .list .item').eq(1).removeClass('beforeIn');
          $('.about .list .item .top-box').removeClass('beforeIn');
          $('.about .list .item .bottom-box').removeClass('beforeIn');
        }
        if (index.index == 4) {
          $('.contact .ipt').removeClass('beforeIn');
          $('.contact .info').removeClass('beforeIn');
          $('.contact .title').removeClass('beforeIn');
        }
      },
      onLeave: function (index, direction) {
        if (index !== 1) {
          $('.project .item').addClass('before-active');
        }
        if (index !== 2) {
          $('.recommand .item .img-holder2').addClass('mg0');
          $('.recommand .item').addClass('mg0');
        }
        if (index !== 3) {
          $('.about .list .item').eq(1).addClass('beforeIn');
          $('.about .list .item .top-box').addClass('beforeIn');
          $('.about .list .item .bottom-box').addClass('beforeIn');
        }
        if (index.index !== 4) {
          $('.contact .ipt').addClass('beforeIn');
          $('.contact .info').addClass('beforeIn');
          $('.contact .title').addClass('beforeIn');
        }
      }
    });
  }

  $(window).resize(function () {
    autoScrolling();
  });
  // 根据页面大小判断重建还是销毁fullpage
  function autoScrolling() {
    let $ww = $(window).width();

    if ($ww < 1024) {
      isInit = false;
      $.fn.fullpage.setAutoScrolling(false);
      $.fn.fullpage.destroy('all');
    } else {
      $.fn.fullpage.setAutoScrolling(true);
      if (!isInit) {
        isInit = true;
        init();
      }
    }
  }
  autoScrolling();
});


// swiper插件初始化
var swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  on: {
    init: function () {
      swiperAnimateCache(this); //隐藏动画元素 
      swiperAnimate(this); //初始化完成开始动画
    },
    slideChangeTransitionEnd: function () {
      swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
    }
  }
});