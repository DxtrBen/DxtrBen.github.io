function hideAlert() {
    //wait 1 second and make the alert to top -100px and a line at 100% width at the same time
    setTimeout(function() {
        document.getElementById("toUpp").style.top = "-100px";
        document.getElementById("closingLine").style.width = "100%";
    }, 1000);
    
}
hideAlert();