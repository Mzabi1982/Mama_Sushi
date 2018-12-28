

$(document).ready(function () {

    $('#header').ripples({
        dropRadius: 4,
        perturbance: .1,
    
      });



    $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{
            enabled:true
        }
        // other options
      });
  });