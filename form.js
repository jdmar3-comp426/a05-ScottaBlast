function CreateAccount() {
    //creates a new XMLHttpRequest
    var sendRequest = new XMLHttpRequest();
    //parses the data into a readable format
    var signupInfo = new URLSearchParams(new FormData( createForm ));
    //alerts sent as pop-ups if request makes it to server or not
    sendRequest.addEventListener( "load", function( event ) {
        alert( "Your account was successfully created!");
    });
        
     sendRequest.addEventListener( "error", function (event) {
        alert( "Submission unsuccessful, Please try again." );
    });

    //the POST request is opened to the respective endpoint 
    sendRequest.open( "POST", "http://localhost:5000/app/new/user", true); //end point is address
    //the request is sent with the data to the database
    sendRequest.send( signupInfo );
}
//accesses the Create Account element from the html.
const createForm = document.getElementById("signup");
//adds listener to the button in createForm
createForm.addEventListener("submit", function (event) {
    event.preventDefault();
    CreateAccount();
});