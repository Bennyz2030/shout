$(document).ready(function() {
  $("#input").submit(function() {
    event.preventDefault();
    const outputSentence = $("input#inputSentence").val();
    const uppercaseOutput = outputSentence.toUpperCase();
    // console.log(outputSentence);
    $(".outputMessage").text(uppercaseOutput);
    
    
  });
});