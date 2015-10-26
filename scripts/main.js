function writeToFile(){
    if (window.XMLHttpRequest) {
        xmlhttp=new XMLHttpRequest();
    }
    else {// IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("POST","subscribers.txt",false);
    xmlhttp.send();
    xmlDoc=xmlhttp.responseText;
}

function validateEmail(){
    $("#email").validate({
      rules: {
        field: {
          required: true,
          email: true
        }
      }
    });
}