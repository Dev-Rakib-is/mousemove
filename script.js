document.querySelectorAll('.box').forEach(function(box) {
    function moveEffect(x, y) {
        document.querySelectorAll('span').forEach(function(span){
            span.style.left = x + 'px';
            span.style.top = y + 'px';

        })
    }
//Desktop mouse Move
box.addEventListener('mousemove',function (e) {
    let x = e.pageX - box.offsetLeft;
    let y = e.pageY - box.offsetTop;
    moveEffect(x, y)
})

//Mobile Touch Move
box.addEventListener('touchmove',function (e) {
    e.preventDefault();


    let Touch = e.touches[0]
    let x = Touch.pageX - box.offsetLeft;
    let y = Touch.pageY - box.offsetTop;
    moveEffect(x, y);
    console.log("Touch Move: ", x, y);
})
})





