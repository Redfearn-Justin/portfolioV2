$(document).ready(function() {

    // Initialize Firebase
    //=======================================================
    // var config = {
    //     apiKey: process.env.FIREBASE_API_KEY,
    //     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    //     databaseURL: process.env.FIREBASE_DATABASE_URL,
    //     projectId: process.env.FIREBASE_PROJECT_ID,
    //     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    //     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
    // };

    var config = {
        apiKey: "AIzaSyCUc2p24x8ASUskcbEeIbhNyeh7jxriZoY",
        authDomain: "portfolio-intel.firebaseapp.com",
        databaseURL: "https://portfolio-intel.firebaseio.com",
        projectId: "portfolio-intel",
        storageBucket: "portfolio-intel.appspot.com",
        messagingSenderId: "725334943993"
    };

    firebase.initializeApp(config);

    //variables
    //=======================================================

    var database = firebase.database();


    
    
    //functions
    //=======================================================

    function hideNavBar() {
        $("nav").hide();
    }

    function clearFields() {

        $("input").each(function() {
    
          $(this).val("");
    
        });

        $("textarea").each(function() {
    
            $(this).val("");
      
        });
    
    }

    // function formValidation(name, email, message) {

    // }

    //on-functions
    //=======================================================

    $("#formSubmitButton").on("click", function() {

        event.preventDefault();
    
        // Local variables
    
        var userName = $("#nameInput").val().trim();
    
        var userEmail = $("#emailInput").val().trim();
    
        var userMessage = $("#messageInput").val().trim();

        // formValidation(userName, userEmail, userMessage);
    
        // object to house user input; subsequently send to firebase
    
        var totalUserInput = {
    
          Name: userName,
          Email: userEmail,
          Message: userMessage,
    
        };
    
        //upload object to firebase
    
        DB.ref().push(totalUserInput);
    
    
        //function to clear fields after user input
    
        clearFields();
    
    
    });

    // Add smooth scrolling to anchors
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            $('html, body').animate({

                scrollTop: $(hash).offset().top
            }, 800, function(){
        
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });

    //Scroll effects for "title" text

    $(window).on("scroll", function() {

        if ( $(this).scrollTop() < 270) {

            $(".headerText").slideDown("slow");

        } 
        
        else {

            $(".headerText").slideUp("slow");
        }
    });


    $(window).on("scroll", function() {

        if ( $(this).scrollTop() > 250) {

            $("nav").fadeIn(400);

        } 
        
        else {

            $("nav").fadeOut(400);
        }

    });



    //function calls
    //=======================================================

    hideNavBar();



});