function prikazi_rezultate(query) {
    if(query === '') {
        $('.pretraga-rezultati').hide();
        $('.prazna-pretraga').show();
    } else {
        $('.prazna-pretraga').hide();
        $('.pretraga-rezultati').show();
        
        $('.pretraga_rijec').text(query);
    }
}


var $pretraga_input = $('#pretraga_rijeci');

$('#pretraga_rijeci').keyup(function () {
    var value = $(this).val();
    prikazi_rezultate(value);
}); 

$pretraga_input.on('focus', function () {
    $('.pretraga-popup').fadeIn(150);
});

$pretraga_input.on('blur', function () {
    $('.pretraga-popup').fadeOut(150);
});



(function($){
  $(function(){  
    var scroll = $(document).scrollTop();
    var headerHeight = $(".topbar").outerHeight();
    
    $(window).scroll(function() {
      var scrolled = $(document).scrollTop();
        if (scrolled > scroll){
            if (scrolled > headerHeight){
                $('.topbar').addClass('nav-up');
              } else {
                $('.topbar').removeClass('nav-up');
              }
        } else {
        $('.topbar').removeClass('nav-up');
        }             
      scroll = $(document).scrollTop();  
     });
       
   });
})(jQuery); 