//Check off specific todos by clicking
$("ul").on("click", "li", function(){
    // //if li is grey
    // if($(this).css("color") === "rgb(128, 128, 128)"){
    //     //turn it black
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"
    //     });
    // }
    // else {
    //     //else
    //     $(this).css({
    //         color: "grey",
    //         textDecoration: "line-through"
    //     });
    // }

    //totally the same function as above
    $(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){       //"this" refer to span
        $(this).remove();           //"this" refet to li not span
    });
    event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
    if (event.which === 13){
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val();
        //creat a new li and add to ul
        //make sure the quote mark doesn't affect the result
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>") 
    }
});

$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle();
});