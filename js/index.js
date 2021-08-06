$(function () {

   $("#accordionExample1").slideUp(0);

   $("#dropdownMenuButton3").click(function () {
      $("#accordionExample1").slideToggle(300);
   });


   $(".logos a").hover(function () {
      let src = $(this).children().eq(0).attr('src').split("");
      src.splice(-4, 0, "_hover");
      src = src.join('');
      $(this).children().eq(0).attr('src', src);
   }, function () {
      let src = $(this).children().eq(0).attr('src').split("");
      src.splice(-10, 6);
      src = src.join('');
      $(this).children().eq(0).attr('src', src);
   });

   $(".svg").hover(function () {
      $(this).children('path').css("color", "")

   }, function () {
      // out
   });

   let items = document.querySelectorAll('.carusel .carousel .carousel-item')

   items.forEach((el) => {
      const minPerSlide = 4
      let next = el.nextElementSibling
      for (var i = 1; i < minPerSlide; i++) {
         if (!next) {
            // wrap carousel by using first child
            next = items[0]
         }
         let cloneChild = next.cloneNode(true)
         el.appendChild(cloneChild.children[0])
         next = next.nextElementSibling
      }
   })

   let items2 = document.querySelectorAll('.partners .carousel .carousel-item')

   items2.forEach((el) => {
      const minPerSlide2 = 4
      let next2 = el.nextElementSibling
      for (var i = 1; i < minPerSlide2; i++) {
         if (!next2) {
            // wrap carousel by using first child
            next2 = items2[0]
         }
         let cloneChild2 = next2.cloneNode(true)
         el.appendChild(cloneChild2.children[0])
         next2 = next2.nextElementSibling
      }
   })

   //   let w = $('.red-layer').css('height');
   //   $('.red-layer').css({
   //      'width': w,
   //   });
   //   
   //   $(window).resize(function () { 
   //      let w = $('.red-layer').css('height');
   //      $('.red-layer').css({
   //         'width': w,
   //      });
   //   });



   $(window).resize(function () { 
      $('.card-img-overlay').each(function () {
         let pw = $(this).prev().find('.parent').css('width');
      pw = parseFloat(pw) / 2;
      let w = $(this).prev().find('.red-layer').css('height');
      $(this).prev().find('.red-layer').css('width', w);
      w = parseFloat(w) / 2;
      let result = pw - w + 'px';
      $(this).prev().find('.red-layer').css({
         'right': result,
      });
         
      });
   });

   $('.card-img-overlay').hover(function () {
      let pw = $(this).prev().find('.parent').css('width');
      pw = parseFloat(pw) / 2;
      let w = $(this).prev().find('.red-layer').css('height');
      $(this).prev().find('.red-layer').css('width', w);
      w = parseFloat(w) / 2;
      let result = pw - w + 'px';
      $(this).prev().find('.red-layer').css({
         'right': result,
         'opacity': '1',
      });
      

      
   }, function () {
      $(this).prev().find('.red-layer').css({
         'opacity': '0',
      });
   });



});