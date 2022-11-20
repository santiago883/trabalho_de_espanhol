    var b1 = document.querySelector('#i1');
    var plato = document.querySelector('#plato1')

   
  b1.addEventListener('click', function(plato){
        var p1 = document.querySelector('#p1');
        var h1 = document.querySelector('#h1');
        if (document.querySelector('#p1').style.display == 'block'){
            p1.style.display = 'none';
            h1.style='margin.top', '20pxpx';
            }else{
            p1.style.display = 'block';
            h1.style.margin = '15px';
            }
  });