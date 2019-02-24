window.onload=function () {
    var buttons=document.getElementById('buttons').getElementsByTagName('span');
    var index = 1;
    var list=document.getElementById('list');

    for (var i=0;i<buttons.length;i++){
        buttons[i].onclick=function () {
            if (this.className == 'on'){
                return;
            }
            var myIndex = parseInt(this.getAttribute('index'));
            var offset = -900 * (myIndex - index );
            animate(offset);
            index=myIndex;
            showButtons();
        }
    }

    function showButtons() {
        for (var i=0;i<buttons.length;i++){
            if (buttons[i].className == 'on'){
                buttons[i].className = '';
                break;
            }
        }
        buttons[index - 1].className = 'on';
    }

    function animate(offset) {
        var newLeft = parseInt(list.style.left)+offset;
        list.style.left = newLeft + 'px';
        return;
    }

     var timer=null;
     function autoPlay() {
         timer=setInterval(function () {
             next_pic();
         },5000);
     }
     autoPlay();


    function next_pic() {
      var newLeft;
      if (list.style.left === '-1800px'){
          newLeft = 0;
    }else{
          newLeft = parseInt(list.style.left)-900;
      }
      list.style.left = newLeft + 'px';
      index++;
      if (index>3){
          index=1;
      }
      showButtons();

    }

    var stop = document.getElementById('buttons');
    stop.onmouseenter = function () {
        clearInterval(timer);
    stop.onmouseleave = function () {
            autoPlay();

    }
    }
}