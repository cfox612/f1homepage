$(function() {
  var $searchlink = $('#searchlink');
  $searchlink.on('mouseover', function(){
    $(this).addClass('open');
  }).on('mouseout', function(){
    $(this).removeClass('open');
  });
});