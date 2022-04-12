
function compute()
{
    var amount = document.getElementById("principal").value;
    /*
        Add validation for "Principal" input box. If the user enters zero or negative values, 
        show an alert "Enter a positive number"
    */ 
    if(amount<0 || amount==0){
        
      alert("Enter a positive number");
      /*Once the user clicks on the alert "OK" button, take the user back to the "Principal" 
      input box, by setting the focus on this box. 
      */
      document.getElementById("principal").value =" ";
      document.getElementById("principal").focus();
    }else{
      var rate = document.getElementById("rate").value;
      var years = document.getElementById("years").value;
      var interest = amount * years * rate /100;
      var year = new Date().getFullYear()+parseInt(years);


      document.getElementById("result").innerHTML = 
      'If you deposit  <mark>'+ amount +'</mark>,<br>'+
      'at an interest rate of  <mark>'+ rate +'% </mark>. <br>'+
      'You will receive an amount of  <mark>'+ interest +'</mark>,<br>'+
      'in the year  <mark>'+ year +'</mark>';  
    }
    
      
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+" %";
}
