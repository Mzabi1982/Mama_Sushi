$(document).ready(function () {

    document.querySelector('#bte').addEventListener('click', e => {
        e.preventDefault()
    })

    $('#header').ripples({
        dropRadius: 4,
        perturbance: .1,

    });



    $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
        // other options
    });


    //   const toggler=document.querySelector('.toggler-btn');
    //   const bar1=document.querySelector('.bar1');
    //   const bar2=document.querySelector('.bar2');
    //   const bar3=document.querySelector('.bar3');

    $('.toggler-btn').click(() => {
        $('.toggler-btn').toggleClass('change')
    })


    $(window).scroll(() => {
        let position = $(this).scrollTop();
        if (position >= 718) {
            $('#nav').addClass('background-padding');
            $('#nav').addClass('fixed-top');
        } else {
            $('#nav').removeClass('');
            $('#nav').removeClass('fixed-top');
        }
    })



});