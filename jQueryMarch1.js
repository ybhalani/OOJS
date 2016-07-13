/**
 * Created by aarna on 3/2/2016.
 */
/* var $ = jQuery.noConflict();//conflict prevention
 // $(function(){//conflict prevention method.can be used as aexample for closures.

 // })(jQuery);
 //on ready
 $(document).ready(function(){

 });
 //other method to write code inside
 $(function(){

 });*/
//selectors
$(document).ready(function(){
    $('#btni').click(function(){
        $('p').hide();
    });
    $('#btn2').click(function(){
        $('#pId').hide();
    });
    $('#btn3').click(function(){
        $(this).hide();
    });
    //Dom Manipulation
    $('table').hover(function(){
        $("tr:odd").css("background-color", "yellow");
        $("tr:even").css("background-color", "green");
        $("th").css("background-color", "red");
    });
    $('#divId').hover(function() {
            $("#divId").css("background-color", "purple");
            $("#divId").css("height", "100px");
        },
        function(){
            $("#divId").css("height", "30px");
        });
//get.text() get method
    $("#para1").click(function(){
        alert("Text Value Is " + $('#para1').text());
    });
//get .html() method
    $("#para2").click(function(){
        alert("Html Value Is " + $('#para2').html());
    });
//get .val()method
    $("#inputBtn").click(function(){
        alert( 'The value of input is'+$("#input3").val());

    });
//set attribute.attr()
    $("#linkId").click(function(){
        alert($("#linkId").prop('href'));
    });
    $("#newsId").click(function(){
        alert($("#newsId").attr('href'));
    });
//set attribyte
    $('#html').click(function(){
        $('#head1').html('<button>Click Html</button>')
    });
    $('#text').click(function(){
        $('#para0').text('This is the same paragraph after setting the value');
        // $('#para0').css('background color','lightgreen');
    });
    $('#btnInput').click(function(){
        $('#inputText').val('Value Changed')
    });
    //add class
    $('#btnclassId').click(function(){
        $(".someClass").addClass('newClass')
    });

//get the parent class
    $("#classBtnId").click(function(){
        alert($("#mainClassId li:first").parent().attr('class'));
    });
//children
    $("#classBtnId2").click(function(){
        var child = "";
        $("#mainClassId ").children().each(function(){
            child += $(this).text()+",";
        });
        alert(child);
    });
//siblings
    $("#classBtnId3").click(function(){
        var sib = "";
        $("#mainClassId li:first ").siblings().each(function(){
            sib += $(this).text()+",";
        });
        alert(sib);
    });
//append text
    var test = "This is a text";
    $("#apTxt").click(function(){
        $("#in").append(test);
    });
//prepend text
    $("#ppTxt").click(function(){
        $("#in").prepend(test);
    });
//after text
    $("#afTxt").click(function(){
        $("#in").after(test);
    });
//before text
    $("#bfTxt").click(function(){
        $("#in").before(test);
    });
    ////////////////////////////////////////////////
    //append
    $("#apndListId1").click(function(){
        $("#listIds").append("<li>Thursday</li>");
    });
//append to
    $("#apndListId2").click(function(){
        $("#listIds").appendTo("#appendDiv");
    });
    //  prepend
    $("#prpdListId1").click(function(){
        $("#listIds").prepend("<li>Saturday</li>");
    });
//prepend To
    $("#prpdListId2").click(function(){
        $("#listIds").prependTo("#appendDiv");
    });
//empty
    $("#emptListId").click(function(){
        $("#listIds").empty();
    });
    ///form read only
    $("#formBtnSub").click(function(){
        $(':input').attr('readonly','true');
    });
//checkbox
    $("#checkSub1").click(function(){
        $(':input').attr('checked','true');
    });
    $("#checkSub2").click(function(){
        $(':input').removeAttr('checked');
    });





});