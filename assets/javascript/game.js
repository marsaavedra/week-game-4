//javascript


    //here is the general stats that are chosen heroine will have (kylo can also be a heroine)
    function heroine(myHealth, myAttack, myCounterAttack, myName){
        this.health = myHealth; //we are defining the myHealth and putting it back in the brackets because this property will change with each character
        this.attack = myAttack;
        this.counterAttack = myCounterAttack;
        this.name = myName; 
        
    }
    //all of the properties here are defined specifically to each character in our game
    var aayla = new heroine(200, 25, 5, "#aayla"); //using the hashtag so that it matches the id in the html that we will need to call with jquery so we can move it to a specific section in the game
    var padme = new heroine(150, 20, 8, "#padme");
    var rey = new heroine(200, 25, 5, "#rey");
    var kylo = new heroine(200, 25, 5, "#kylo");
    //myJedi variable will be called inside of the game () function, when the user picks a specific character's picture
    //for ex: when clicked on rey's pic the myJedi variable is assigned the rey variable that we also defined globally
    //along with all of her new heroine stats and places inside of the if statement, if clicked on her pic
    //also we can also use this spell: myJedi.myAttack, to make things way clearer, less complicated and with less code  
    var myJedi;

    var myDefender;
    //this array was created to be able to move the characters to the enemies section when the user picks a heroine
    var jedis = [aayla, padme, rey, kylo];

    var enemies = [];
    //here we are calling the game function so the game can actually run
    game();

    //Ive created this variable to switch the fucntionality of the on click function 
    var jediHasBeenSelected = false;

    var defenderHasBeenSelected = false;

    
    function game() {
        //this is how we pick your jedi with the on click event
        
            $(".pic").on("click", function() {
                if((jediHasBeenSelected ===false) && (defenderHasBeenSelected ===false) ) {
                    if($(this).attr("id")==="rey"){ //if this (.pic) has an attribute (in this case the id) that is set to "rey"..
                        //then make myJedi rey
                        myJedi= rey;//both of these variables were defined globally
                    } else if ($(this).attr("id")==="aayla"){
                        myJedi = aayla;
                    } else if ($(this).attr("id")==="padme") {
                        myJedi = padme;
                    } else {
                       myJedi = kylo; //we don't have to say ($(this).attr("id")==="kylo") becuase he is the last one left
                    }
                    //run this loop to go through the jedis (plural) array so we can grab all of them
                    for (var i = 0; i < jedis.length; i++) {
                        //move all jedis to the enemies section in HTML
                        
                        $("#enemies").append($(jedis[i].name));//to do this, the name of my Jedis must match the name of the section where they are in html (and also successfully grap the emelent in JS)..that's why the names have '#'                        
                    } 
                    //move the character that you picked back to the your character section in HTML
                    $("#yourCharacter").append($(myJedi.name));//why move it back? because its easier, and less steps to move all of them first and then move my herione back then move all of the other three individaully
                     
                    $(myJedi.name).unbind("click");

                    jediHasBeenSelected = true;//now the jedi has been selected and now we can go on to switch the on click functionality
                    $("#yourFight").append(myJedi.health);
                    
                }

                else if (jediHasBeenSelected) { //dont have to set it equal to true because ive already defined the false in the global
                    if($(this).attr("id")==="rey"){ //if this (.pic) has an attribute (in this case the id) that is set to "rey"..
                        //then make myJedi rey
                        myDefender= rey;//both of these variables were defined globally
                    } else if ($(this).attr("id")==="aayla"){
                        myDefender = aayla;
                    } else if ($(this).attr("id")==="padme") {
                        myDefender = padme;
                    } else {
                       myDefender = kylo; //we don't have to say ($(this).attr("id")==="kylo") becuase he is the last one left
                    }
                    if(!defenderHasBeenSelected) {
                    $("#defender").append($(myDefender.name));
                    defenderHasBeenSelected = true;
                    $("#yourOpponent").append(myDefender.health);
                    }
                } 
                

            })

        
    };


