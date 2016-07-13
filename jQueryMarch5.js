/**
 * Created by aarna on 3/5/2016.
 */

$(document).ready(function(){
//fade in out method
$("#fade1").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
});
//credit card
$("#creditCardBtn").click(function(){
$("#showFormId").fadeIn();
});
//wire transfer
    $("#wireBtnId").click(function(){
        $("#transferCreditId").fadeIn();
    });
//form validation
    $('#validateSubmitBtn').click(function(){
if($("#validatefname").val()==""){
    $("#validatefname").addClass("requiredValidation").val("Please Fill");
}
        if($("#validatelname").val()==""){
            $("#validatelname").addClass("requiredValidation").val("Please Fill");
        }
        if($("#validateEmail").val()==""){
            $("#validateEmail").addClass("requiredValidation").val("Please Fill");
        }
        if($("#validatePassword").val()==""){
            $("#validatePassword").addClass("requiredValidation").val("Please Fill");
        }
    });









    });