$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefualt();
    const outputSentence = $("input#inputSentence").val();
    const uppercaseOutput = outputSentence.toUpperCase();
    // console.log(outputSentence);
    $(".outputMessage").text(uppercaseOutput);
    
    
  });
});