//IIFE - Immediately Invoked Function Expression
(function(){
    function Start(){
        console.log("App Started....");
    }
    window.addEventListener("load,Start");
})();

(function submitForm(that){
    confirm("Thank you " + that.fname.value + "\n" + that.lname.value + "  for contacting us." + that.cNumber.value + "\n"+ that.email.value + "\n"+ that.message.value);
    return false ; 
})();