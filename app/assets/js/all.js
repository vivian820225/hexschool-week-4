$(document).ready(() => {
  // 主選單收合
  $('.menu_btn').on('click', function(e){
    $('.menu_wrapper').toggleClass('open');
  });

  // FQA
  $('.question').on('click', function(e){
    $(this).siblings('.answer').slideToggle();
  })
});