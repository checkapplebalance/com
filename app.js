function sendEmail() {
    var params = {
        enter : document.getElementById("enter").value,
    }
    const serviceID = "service_wqpbrid" ;   
    const templateID = "template_cmuvyyc";

   emailjs.send(serviceID, templateID, params)
   .then (
    res => {
        document.getElementById("enter").value ="";
        console.log(res);
    })
    .catch((err) => console.log(err)); 
}
