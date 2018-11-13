document.createElement('details');
document.createElement('summary');
$(function() { 
 
  $('details').each(
    function() {
 
      // configuration
      $(this).attr('open', true);
      var action = $(this).find('summary'),
          expand = $(this).find('section'),         
          timer  = 950,
          ex_e   = '▲',
          ex_c   = '▼';
 
      // set marker & force expands
      action.append('<i>' + ex_c + '</i>');
      action.toggle(
        function() {
          action.addClass('expand').find('i').text( ex_e );                                                                                                 
          expand.show(timer);       
          return false;                            
        },
        function() {           
          action.removeClass('expand').find('i').text( ex_c );
          expand.hide(timer);
          return false;
        }
      );     
    }
  );
 
});