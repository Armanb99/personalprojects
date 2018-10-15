var counter = 0;

// Check Off Specific Todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//Click trash to delete the Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
        counter++;
        $("#number").text(counter);
    });
    event.stopPropagation();
});

//Add new Todo list one
$("input[type='text']").first().keypress(function(event){
    if(event.which === 13){
        //grabs new todo
       var todoText = $(this).val();
        $(this).val("");
       //create a new li and add to the ul
       $("ul").first().append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>"); 
    }
});

//Add new Todo list two
$("input[type='text']").last().keypress(function(event){
    if(event.which === 13){
        //grabs new todo
       var todoText = $(this).val();
        $(this).val("");
       //create a new li and add to the ul
       $("ul").last().append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>"); 
    }
});

//Toggle New Todo 
$(".fa-plus-square").first().click(function(){
    $("input[type='text']").first().fadeToggle(250);
});

//Toggle New Todo Week
$(".fa-plus-square").last().click(function(){
    $("input[type='text']").last().fadeToggle(250);
});