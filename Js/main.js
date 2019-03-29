$(function() {
  
  // Custom Function Helper - Grader
  var user = {
    name: "Hello my name is Alec Nader. ",
    age: "I am 22 years old ",
    major:"and I am studying Information Technology - Software Development. ",
    city:"I live in Cincinnati however, originally from Cleveland, Ohio. ",
    dialogue:" Currently I am employeed at CollegeSource Inc. which is a software development company who creates and maintains higher education software. " +
    		" I have been working at CollegeSource as a development intern for a full co-op semester and will continue to work here part time until I have graduated. " +
    		" I have been actively learning development since my sophmore year of high school. ",
    dialogue2:"This is my first time using a bootstrap template and the Handlebars.js library so I am hoping it works out well." +
    		" I really enjoy playing video games it is something I have been actively involved in since I was very young. My favorite game of all time is The Witcher 3 and lately " +
    		"I have been playing a lot of the new World of Warcraft expansion.",
    gamelist:"Witcher 3, Fallout series, World of Warcraft, Old School Runescape, Dead by Daylight, Subnautica, Escape from Tarkov, No Man's Sky, Age of Empires, Civilization."
    		
    		
  };

  //var templateScriptOne = $('#header').html(); //grab the html at that location
  //var templateOne = Handlebars.compile(templateScriptOne); //call handlebars to compile a script for this template
  
 //$('.template').append(templateOne(user)); //append on the location

  var templateScriptThree = $('#student').html();
  var templateThree = Handlebars.compile(templateScriptThree);

  $('.template').append(templateThree(user));
  



});
