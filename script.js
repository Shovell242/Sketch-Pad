$(document).ready(function(){
     
    $("#start").on("click",function(){
    $(".container").hide();
    $("td").remove();
    $("tr").remove();
        
    var rows = prompt("How many rows bro?");
    var columns = prompt("How many columns?");
    
    for(var k = 1;k <= rows;k++){
        $("table").append("<tr></tr>");};
    
    for(var i = 1;i <= columns;i++){
        $("tr").append("<td></td>");};
        
    $("td").width(908 / columns - ((columns * 1) / columns) + "px");
    $("td").height(908 / columns - ((columns * 1) / columns) + "px");
        
    $(".container").slideDown("fast");
    
    $("td").on("mouseenter",function(){
        $(this).addClass("highlight");
    });
        
    });
    
    $("#clear").on("click",function(){
        $("td").removeClass("highlight").css("background-color","#0200C5");

    });

    $("#random").on("click",function(){
         $("td").on("mouseenter",function(){
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            $(this).css("background-color","#"+randomColor);
        });
    });
       
});
    