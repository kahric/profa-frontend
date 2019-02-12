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


app.ready(function() {
        //
        // Typeahead
        //
        var countries = new Bloodhound({
          datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
          queryTokenizer: Bloodhound.tokenizers.whitespace,
          prefetch: {
            url: '../assets/countries.json',
            filter: function(list) {
              return $.map(list, function(cityname) {
                return { name: cityname }; });
            }
          }
        });
        countries.initialize();

        $('#sample-typeahead').tagsinput({
          typeaheadjs: {
            name: 'countries',
            displayKey: 'name',
            valueKey: 'name',
            source: countries.ttAdapter()
          }
        });
    
    $("#clanarina").change(function(){
        $("#posao-select").css('display', $(this).val() === 'premium' ? 'block' : 'none');
    });

});