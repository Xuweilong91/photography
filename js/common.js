$('.open-btn').click(()=>{
    $('.header-m .list').slideToggle("slow");
    $('.header-m .open-btn .line.one').toggleClass('active');
    $('.header-m .open-btn .line.two').toggleClass('active');
    $('.header-m .open-btn .line.three').toggleClass('active');
})