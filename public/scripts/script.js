console.log('js sourced');

$(document).ready(function() {
  //click function for operators buttons
  //add button operator
  $('.clearBtn').on('click', function() {
    $('#result').toggle();
    $('#value1').val("");
    $('#value2').val("");
  });

  $('.addBtn').on('click', function() {
    console.log('Add cliked');

    var sendObj = {
      number1: $('#value1').val(),
      number2: $('#value2').val()
    }; // end of obj to add
    console.log(sendObj);
    //Ajax POST to add inputs
    $.ajax({
      type: 'POST',
      url: '/toAdd',
      data: sendObj,
      success: function(response) {
        console.log(response);
        $('#result').append('<p id=number>' + response.result + '</p>');

      } //end of success function

    }); //end of Ajax POST

  }); //end of sendObj

  $('.subBtn').on('click', function() {
    console.log('Subtract cliked');

    var sendObj = {
      number1: $('#value1').val(),
      number2: $('#value2').val()
    }; // end of obj to subtract
    console.log(sendObj);
    //Ajax POST to subtract inputs
    $.ajax({
      type: 'POST',
      url: '/toSubtract',
      data: sendObj,
      success: function(response) {
        console.log(response);
        $('#result').append('<p id=number>' + response.result + '</p>');

      } //end of success function

    }); //end of Ajax POST

  }); //end of sendObj

  $('.mulBtn').on('click', function() {
    console.log('Multiply cliked');

    var sendObj = {
      number1: $('#value1').val(),
      number2: $('#value2').val()
    }; // end of obj to multiply
    console.log(sendObj);
    //Ajax POST to multiply inputs
    $.ajax({
      type: 'POST',
      url: '/toMultiply',
      data: sendObj,
      success: function(response) {
        console.log(response);
        $('#result').append('<p id=number>' + response.result + '</p>');

      } //end of success function

    }); //end of Ajax POST

  }); //end of sendObj

  $('.divBtn').on('click', function() {
    console.log('Divide cliked');

    var sendObj = {
      number1: $('#value1').val(),
      number2: $('#value2').val()
    }; // end of obj to divide
    console.log(sendObj);
    //Ajax POST to divide inputs
    $.ajax({
      type: 'POST',
      url: '/toDivide',
      data: sendObj,
      success: function(response) {
        console.log(response);
        $('#result').append('<p id=number>' + response.result + '</p>');

      } //end of success function

    }); //end of Ajax POST

  }); //end of sendObj

}); //end of $(document)ready function
