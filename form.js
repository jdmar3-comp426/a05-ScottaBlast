const form = document.getElementById("signup");

window.addEventListener( 'load', function () {
    function sendData() {
        const sendRequest = new XMLHttpRequest();

        const signupInfo = new FormData( form );

        sendRequest.addEventListener( "error", function (event) {
            alert( "Submission unsuccessful, Please try again." );
        });

        sendRequest.addEventListener( "load", function( event ) {
            alert( "Your account was created!");
        });

        sendRequest.open( "POST", "http://localhost:5000/app/new/user" ); //end point is address

        sendRequest.send( signupInfo );
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        sendData();
    });
});














