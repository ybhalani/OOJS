/**
 * Created by aarna on 3/4/2016.
 */
$(document).ready(function(){

$("#textInput").keypress(function(event){
var keycode = (event.keyCode ?
 event.keyCode : event.which);
    if(keycode=='13'){
        alert("You Pressed a Enter Key In TextBox");
    }
    event.stopPropagation();
});

//keyprees in body
    $(document).keypress(function(event){
        var keycode = (event.keyCode ?
            event.keyCode : event.which);
        if(keycode=='13'){
            alert("You Pressed a Enter Key In Document");
        }
    });

    //keyup
    $("#textInput").keyup(function(event){
       $("#keyupId").html
       ('keyUp()triggered,' +
           'keycode = '
        + event.keyCode + " which = " + event.which)
    });
//keydown
    $("#textInput").keydown(function(event){
        $("#keydownId").html('keyDown()triggered,keycode = '
       + event.keyCode + " which = " + event.which)
    });
//keypress
    $("#textInput").keypress(function(event){
        $("#keypressId").html('keyPress()triggered,keycode = '
       + event.keyCode + " which = " + event.which)
    });
//clone( clone will clone only html element)
    $("#eventId li.eventClass button").click(function(){
        var $parent = $(this).parent();
        $parent.clone().insertAfter($parent);
    });
//clone the  clone
    $("#eventId1 li.eventClass1 button").click(function(){
        var $parent = $(this).parent();
        $parent.clone(true).append("I am a Clone Of clone")

            .insertAfter($parent);
    });










});