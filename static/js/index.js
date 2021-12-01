const num_sections = 3;
let parallax_level = 0;
update_parallax_pos();

//* Load in fullpage JS
$(document).ready(() => {
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'left',
        anchors: ['top', 'about', 'interests', 'portfolio', 'contact'],
        scrollingSpeed: 1200,
        dragAndMove: true,
        verticalCentered: false,
        onLeave: (origin, destination, direction) => 
        {
            // Update the position of the parallax elements in the background
            parallax_level = destination.index;
            update_parallax_pos();
            apply_animations(destination.item);
        },
    });
});

function update_parallax_pos() 
{
    // get all parallax elements and move them
    let elements = document.getElementsByClassName('bg-image');

    for (let e of elements) 
    {
        let speed = e.getAttribute('speed');
        let offset = parallax_level * speed * 4;
        let max_offset = speed * 4 * num_sections;

        e.style.marginTop = (max_offset - offset) + 'vh';
    }
}

function apply_animations(parent)
{
    const delayMultiplier = 150;

    $(parent).find('.fade-left').each((i, obj) => {

        let delay = $(obj).attr('delay');
        
        // apply a fade-from-left animations
        $(obj).css({
            marginLeft: '-100%',
            opacity: '0'
        });

        $(obj).delay(delay*delayMultiplier).animate({
            marginLeft: '0px',
            opacity: '1'
        }, 1200, 'swing');

    });

    $(parent).find('.fade-pop').each((i, obj) => {

        let delay = $(obj).attr('delay');
        
        // apply a fade-pop animation (need to do something odd since jquery doesn't let you use transform in the animate function)
        $(obj).delay(delay*delayMultiplier).addClass('fade-pop-animate').on('animationend', () => { $(obj).removeClass('fade-pop-animate') });

    });
}

//* Load in Parallax JS
/*
const scenes = document.querySelectorAll('[id^=scene]');
for (let scene of scenes)
{
    const parallaxInstance = new Parallax(scene);
}
*/

//* Animations from anime.js
