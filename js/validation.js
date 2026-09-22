const form = document.getElementById("purchaseForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const paymentMethod = document.getElementById("paymentMethod").value;
    const cardNumber = document.getElementById("cardNumber").value.trim();
    const expirationDate = document.getElementById("expirationDate").value;
    const cvv = document.getElementById("cvv").value.trim();
    const terms = document.getElementById("terms");

    //nama

    if(fullName.length < 3){
        Swal.fire({
            icon: "error",
            title: "Invalid Full Name",
            text: "Full name must contain at least 3 characters."
        });
        return;
    }

    //email

    if(
        !email.includes("@gmail.com") &&
        !email.includes("@yahoo.com") &&
        !email.includes("@outlook.com")
    ){
        Swal.fire({
            icon: "error",
            title: "Invalid Email",
            text: "Email must use Gmail, Yahoo, or Outlook."
        });
        return;
    }

    //phone num

    if(phone.length < 10){
        Swal.fire({
            icon: "error",
            title: "Invalid Phone Number",
            text: "Phone number must contain at least 10 digits."
        });
        return;
    }

    //method

    if(paymentMethod === ""){
        Swal.fire({
            icon: "warning",
            title: "Payment Method Required",
            text: "Please select a payment method."
        });
        return;
    }

    //CC

    if(cardNumber.length !== 16 ||
    isNaN(cardNumber)){
        Swal.fire({
            icon: "error",
            title: "Invalid Card Number",
            text: "Credit card number must be exactly 16 digits."
        });
        return;
    }

    //CC exp date

    if(expirationDate === ""){
        Swal.fire({
            icon: "warning",
            title: "Expiration Date Required",
            text: "Please select an expiration date."
        });
        return;
    }

    //CVV

    if(cvv.length !== 3 ||
    isNaN(cvv)){
        Swal.fire({
            icon: "error",
            title: "Invalid CVV",
            text: "CVV must be exactly 3 digits."
        });
        return;
    }

    //terms

    if(!terms.checked){
        Swal.fire({
            icon: "warning",
            title: "Terms & Conditions",
            text: "You must agree to the terms and conditions."
        });
        return;
    }

    //Done

    Swal.fire({
        icon: "success",
        title: "Purchase Successful!",
        text: "Thank you for shopping at GameStoB.",
        confirmButtonText: "Continue",
        confirmButtonColor: "#7c4dff"
    });

    form.reset();

});