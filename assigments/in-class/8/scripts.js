$(document).ready(function() {

    // Data picker
    $("#birthday").datepicker();

    // Data for autocomplete For languges
    var programmingLanguages = [
        "ActionScript", "AppleScript", "Asp", 
        "BASIC", "C", "C++", "Clojure", "COBOL", 
        "ColdFusion", "Erlang", "Fortran", "Groovy", 
        "Haskell", "Java", "JavaScript", "Lisp", 
        "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"
    ];

    // Initialize autocomplete
    $("#programming").autocomplete({
        source: programmingLanguages
    });


});
