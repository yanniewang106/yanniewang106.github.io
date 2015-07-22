window.onload = function()
{
  var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  var categories;       // Array of topics
  var chosenCategory;   // Selected catagory
  var getHint;          // Word getHint
  var word;             // Selected word
  var guess;            // Guess
  var guesses = [];     // Stored guesses
  var lives;            // Lives
  var counter;          // Count correct guesses
  var space;            // Number of spaces in word '-'

  // get elements
  var showLives = document.getElementById("mylives");
  var showCatagory = document.getElementById("scatagory");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");

  // create alphabet ul
  var buttons = function ()
  {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++)
    {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
    
  // select category
  var selectCat = function()
  {
    if (chosenCategory === categories[0])
    {
      catagoryName.innerHTML = "Category: Food";
    }
    else if (chosenCategory === categories[1])
    {
      catagoryName.innerHTML = "Category: Films";
    }
    else if (chosenCategory === categories[2])
    {
      catagoryName.innerHTML = "Category: Cities";
    }
    else if (chosenCategory === categories[3])
    {
      catagoryName.innerHTML = "Category: Animals";
    }
    else if (chosenCategory === categories[4])
    {
      catagoryName.innerHTML = "Category: Famous People";
    }
    else if (chosenCategory === categories[5])
    {
      catagoryName.innerHTML = "Category: Company";
    }
  }

  // create guesses ul
   result = function()
   {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++)
    {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-")
      {
        guess.innerHTML = "-";
        space = 1;
      }
      else
      {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  // show lives
  comments = function()
  {
    showLives.innerHTML = "You have " + lives + " lives left.";
    if (lives < 1)
    {
      $('#lose')[0].play();
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < guesses.length; i++)
    {
      if (counter + space === guesses.length)
      {
        $('#win')[0].play();
        showLives.innerHTML = "You Win!";
      }
    }
  }

  // animate man
  var animate = function()
  {
    var drawMe = lives ;
    drawArray[drawMe]();
  }
  
  // hangman
  canvas = function()
  {
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#000";
    context.lineWidth = 3;
  };
  
    head = function()
    {
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.arc(60, 25, 10, 0, Math.PI*2, true);
      context.stroke();
    }
    
  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy)
  {
    
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke(); 
  }

   frame1 = function()
   {
     draw (0, 150, 150, 150);
   };
   
   frame2 = function()
   {
     draw (10, 0, 10, 600);
   };
  
   frame3 = function()
   {
     draw (0, 5, 70, 5);
   };
  
   frame4 = function()
   {
     draw (60, 5, 60, 15);
   };
  
   body = function()
   {
     draw (60, 36, 60, 70);
   };
  
   rightArm = function()
   {
     draw (60, 46, 100, 50);
   };
  
   leftArm = function()
   {
     draw (60, 46, 20, 50);
   };
  
   rightLeg = function()
   {
     draw (60, 70, 100, 100);
   };
  
   leftLeg = function()
   {
     draw (60, 70, 20, 100);
   };
  
  drawArray = [rightLeg, leftLeg, rightArm, leftArm,  body,  head, frame4, frame3, frame2, frame1];

  // onclick function
   check = function()
   {
    list.onclick = function()
    {
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++)
      {
        if (word[i] === guess)
        {
          $('#good')[0].play();
          guesses[i].innerHTML = guess;
          counter += 1;
        } 
      }
      var j = (word.indexOf(guess));
      if (j === -1)
      {
        $('#bad')[0].play();
        lives -= 1;
        comments();
        animate();
      }
      else
      {
        comments();
      }
    }
  }
  
  // play
  play = function()
  {
    categories = [
        ["HAMBURGER", "PIZZA", "FRENCH-FRIES", "ICE-CREAM", "DOUGHNUT", "APPLE-PIE", "BANANA-SPLIT"],
        ["INSURGENT", "MR-BEAN", "GLADIATOR", "FINDING-NEMO", "JAWS"],
        ["MANCHESTER", "MILAN", "MADRID", "AMSTERDAM", "SHANGHAI"],
        ["PEACOCK", "ANACONDA", "ORANG-UTAN", "KANGAROO", "OSTRICH", "BISON", "BRONTOSAUR"],
        ["ROBERT-PATTINSON", "KRISTEN-STEWARD", "LEONARDO-DA-VINCI", "ANGELINA-JOLIE", "LIONEL-MESSI"],
        ["SAMSUNG", "PANASONIC", "IKEA", "CATHAY-PACIFIC", "NEW-BALANCE"]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    guesses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  }
  play();
  
  // hint
    hint.onclick = function()
    {
      hints = [
        ["McD", "Italy", "KFC", "I scream..", "The Simpsons", "Dessert", "Many scoops.."],
        ["Trilogy", "Rowan Atkinson", "Historical drama", "Anamated Fish", "Giant great white shark"],
        ["Northern city in the UK", "Home of AC and Inter", "Spanish capital", "Netherlands capital", "The biggest city in China"],
        ["A kind of avian", "The largest snake", "Only exist in South-east Asia", "Big foot", "I can't fly", "I have 2 horns", "Not here anymore.."],
        ["Vampire", "A girl who fell in love with a vampire", "Artist", "Brad Pitt", "Argentina"],
        ["South Korean product", "Ideas for Life", "Furniture", "Hongkong Airlines", "Sports wear"]
    ];

    var catagoryIndex = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(word);
    showClue.innerHTML = "Clue: " +  hints [catagoryIndex][hintIndex];
  };

  // reset
  document.getElementById('reset').onclick = function()
  {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  }
}