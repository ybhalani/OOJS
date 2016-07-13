/**
 * Created by aarna on 3/6/2016.
 */
//load method
$(document).ready(function() {
    $("#loadBtnId").click(function () {
        $("#loadId").load("Resources/Content/content1.html", function () {
            alert("Load was performed.");
        });
    });
//.ajax() for btn2

    function getContent2() {
        $.ajax({
            url: "Resources/Content/content2.html",
            type:"GET",
            datatype:'html',
            beforeSend:function(){
              alert("getting the data")
            },
            success:function(response,textStatus,xhr){
                $("#divLoadId").html(response);
            },
            error:function(xhr,textStatus,textMessage){
                $("#divLoadId").html(textStatus + " : " + textMessage);
            }
        });
    }
    $("#loadContent2").click(function(e){
        getContent2();
    });

//btn3
    function getContent3() {
        $.ajax({
            url: "Resources/Content/content3.html",
            type:"GET",
            datatype:'html',
            success:function(response,textStatus,xhr){
                $("#divLoadId").html(response);
            },
            error:function(xhr,textStatus,textMessage){
                $("#divLoadId").html(textStatus + " : " + textMessage);
            }
        });
    }
    $("#loadContent3").click(function(e){
        getContent3();
    });
///btn 4
    function getContent4() {
        $.ajax({
            url: "Resources/Content/content4.html",
            type:"GET",
            datatype:'html',
            beforeSend:function(){
                $("#loadContent4").click(function (){
                    $("#loadContent4").css("background-color", "red")
                });
            },
            success:function(response,textStatus,xhr){
                $("#divLoadId").html(response);
                $("#divLoadId").css("border"," 2px solid seagreen");
            },
            error:function(xhr,textStatus,textMessage){
                $("#divLoadId").html(textStext + " : " + textMessage);
            }
        });
    }

$("#loadContent4").click(function(e){
    getContent4();
});
//cross domain call
function getCrossCall(){
    $.ajax({
      url:"http://www.cnn.com/",
        type:"GET",
        datatype:"",
        success:function(response,textStatus,xhr){
            $("#crossAjexDivId").html(response);
        },
        error:function(xhr,textStatus,textMessage){
            $("#crossAjexDivId").html(textStext + " : " + textMessage);
        }


    }) ;
}
    $("#crossAjexId").click(function(){
        getCrossCall();
    })
//get json geo

    $("#jsonBtnId").click(function(){
        $.getJSON("Resources/Data/geoData.json",function(data){
            var list = "";
            var docs = data.response.docs;
            for(var i = 0; i <docs.length; i++){
                list +=docs[i].id +"."+ docs[i].description+"\n";
            }
            $("#geoJsonId").html(list);
        });
    });




//country json call

    $("#loadJsonIdId").click(function(){
        $.getJSON("Resources/Data/country.json",function(data){
            var list = "";
            var docs = data;
            for(var i = 0; i <array.length; i++){
                list +="<td>" + [i].country +"."+ [i].alternate_name+"."+[i].fifa_code+"."+[i].group_id+"</td>";
            }
            $("#tableLoadId").html(list);
        });
    });
//submitting the form
    $("#submitAjaxId").click(function(){
var $inputs = $('input');
    })











});