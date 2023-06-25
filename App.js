function genOtp(){
    var x=Math.random()*(9999-1000)+1000;
    var otp=Math.floor(x);
    console.log(otp);
    // document.write(otp)
    var name=document.getElementById("input").value
   document.getElementById("output").textContent="Dear "+name+" your OTP is "+otp
}