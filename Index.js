var $ = jQuery.noConflict();
//get all language
$(document).ready(function(){
    $("#btn1").click(function(){
        alert($("#languagelist li").text());


    });
//get language by class
    $("#btn4").click(function(){
        var languageName = '';
        $("#languagelist li").each(function(){
            languageName += $(this).text() + ",";
        });
        alert(languageName);
    });
//get first language
    $("#btn2").click(function(){
        alert($("#languagelist li:first").html());
    });
//get last language
    $("#btn3").click(function(){
        alert($("#languagelist li:last").html());
    });
//get 3rd to last
    $("#btn5").click(function(){
        var languageName = '';
        $("#languagelist  li:gt(1)").each(function(){
            languageName += $(this).text() + ",";
        });
        alert(languageName);
    });
    //get link
    $("#getlink").click(function(){
        alert($("#googlelink").attr("href"));
    });
    //set or changing link
    $("#setlink").click(function(){
        $("#googlelink").attr("href",
            "https://angularjs.org/")
            .html("Angular Home Page");
    });
//adding class
    $("#addclass").click(function(){
        $("body").addClass("tilt");
    });
    //removing class
    $("#removeclass").click(function(){
        $("body").removeClass("tilt");
    });
//getting input field value
    $("#getinput").click(function(){
        alert($("#inputfield").val());
    });
//setting input field value
    $("#setinput").click(function(){
        $("#inputfield").val("New Value");
    });
//find parent class from first item.
    $("#getparentclassbychild").click(function(){
        alert("Parent class name is"+
            $("li.languageName:first").parent().attr("class"));
    });



});