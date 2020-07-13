
function scrollMenu(){
   $(window).scroll(function(event) {
      var pos_body = $('html,body').scrollTop();
      // console.log(pos_body);
      if(pos_body>50){
         $('.menu').addClass('background-color');
      }
      else {
         $('.menu').removeClass('background-color');
      }
   });
 }
function fillLatestWork()
{
   $('.list-project').isotope({
      itemSelector: '.project'
   });
   $('.works .menu-work ul li').click(function(event) {
      // var type = $(this).attr('data-type');
      var type = $(this).data('type');
      console.log(type);
      
      type = '.'+type;
      $('.list-project').isotope({
         filter:type
      });
   });
}
 $(document).ready(function() {
   scrollMenu();
   fillLatestWork();
});
