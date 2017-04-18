jQuery(function($){
    $('.poster').bxSlider({
        //pager:false,
        controls:false
    });
     var flag=false;
    $('#menu').on('click',function(){
       /* $('#drawer').animate({
            left:0
        })*/
        /* reveal */
       
        if(flag==true){
           $('.wrap').animate({
            left:0
            },function(){
               flag=false;
                //$('#menu').removeClass('on')
           })
        }
        else{
           $('.wrap').animate({
            left:320
            },function(){
               flag=true;
            }) 
        }
        
    });
    $('#drawer .btn-close').on('click',function(){
        $(this).parent().animate({
            left:-320
        })
    });
})