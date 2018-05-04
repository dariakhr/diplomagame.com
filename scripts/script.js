$(document).ready(function() {
  var part_one = $('.part-one');

  part_one.click(function() {
    var wrap = $('#wrapper'),
    modal = $('.cover, .modal, .content');
    part_one.on('click', function() {
      modal.fadeIn();
    });
    // close modal
    $('.modal').click(function() {
      wrap.on('click', function(event) {
        var select = $('.content');
        if ($(event.target).closest(select).length)
        return;
        modal.fadeOut();
        wrap.unbind('click');
      });
    });
  });
});
