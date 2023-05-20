function sendmail(){
    var temParams = {
        name: document.querySelector("#name").value,
        emailAddress : document.querySelector("#emailAddress").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value
    }
    emailjs.send("service_8wvlac3","template_0h0776k", temParams)
	.then(function(response) {
	    alert('Successfully sent!');
	}, function(err) {
	    alert('Oops! There is an error in your message.');
	});
}
