Reveal.addEventListener( 'ready', () => {
    Reveal.slide(1,0);
} );

Reveal.addEventListener( 'anim-slide', function() {
    var obj = document.getElementById('star');
    TweenMax.from(obj, 1, { scale: 100, delay: '200ms' });
    // TweenMax.from(obj, 1, { width:'2000px', height: '2000px', delay: '200ms'} );
} );

Reveal.addEventListener( 'atom', function() {
    console.log('atom');
    var obj = document.getElementById('atom');
    TweenMax.from(obj, 1, { scale: 100, delay: '200ms' });
    // TweenMax.from(obj, 1, { width:'2000px', height: '2000px', delay: '200ms'} );
} );