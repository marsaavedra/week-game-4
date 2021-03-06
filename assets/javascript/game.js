//javascript


    //here is the general stats that are chosen heroine will have (kylo is also heroine)
    function heroine(myHealth, myAttack, myCounterAttack, myName){
        this.health = myHealth; //we are defining the myHealth and putting it back in the paranthesis because this property will change with each character
        this.attack = myAttack;
        this.counterAttack = myCounterAttack;
        this.name = myName;
        this.newAttack = 0; 
        
    }
    //all of the properties here are defined specifically to each heroine in our game
    var aayla = new heroine(100, 10, 10, "#aayla"); //using the hashtag so that it matches the id in the html that we will need to call with jquery so we can move the character to a specific section in the game
    var padme = new heroine(180, 18, 18, "#padme");
    var rey = new heroine(140, 14, 14, "#rey");
    var kylo = new heroine(160, 16, 16, "#kylo");
    //myJedi (below) variable will be called inside of the game () function, when the user picks a specific character's picture
    //for ex: when clicked on rey's pic the myJedi variable is assigned the rey variable that we also defined globally
    //along with all of her new heroine stats and places inside of the if statement, if clicked on her pic
    //also we can also use this spell: myJedi.attack, to make things way clearer, less complicated and with less code  
    var myJedi;

    var myDefender;

    var numberOfAttacks = 0;

    //sound effects
    var lightsaber = new Audio();
    lightsaber.src = "assets/sound/lightsaber.wav";

    var dual = new Audio();
    dual.src = "assets/sound/dual.wav";

    var coolsaber = new Audio();
    coolsaber.src = "assets/sound/coolsaber.wav";


    //since we know how many enemies we will have in this case: 3 (or if in the future we have 1000 characters we can always subract the number of characters by 1)
    //we will use this variable to perform a specific action once it turns 0
    var enemiesRemaining = 3;    
    //this array was created to be able to move the characters to the enemies section when the user picks a heroine
    var jedis = [aayla, padme, rey, kylo];

    //here we are calling the game function so the game can actually run
    game();

    //Ive created these variables to switch fucntionality of an on click function 
    var jediHasBeenSelected = false;

    var defenderHasBeenSelected = false;

    var myDefenderWon = false;

    var myJediWon = false;


    
    function game() {
        //this is how we pick your jedi with the on click event
        
            $(".pic").on("click", function() {
                if(!jediHasBeenSelected) {
                    if($(this).attr("id")==="rey"){ //if this (.pic) has an attribute (in this case the id) that is set to "rey"..
                        //then make myJedi: rey
                        myJedi= rey;//both of these variables were defined globally
                    } else if ($(this).attr("id")==="aayla"){
                        myJedi = aayla;
                    } else if ($(this).attr("id")==="padme") {
                        myJedi = padme;
                    } else {
                       myJedi = kylo; //we don't have to say ($(this).attr("id")==="kylo") becuase he is the last one left
                    }
                    lightsaber.play();
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
                    //here im pusing myJedi into the myJediArray so I can access it later to fight the defender
                    console.log("myJedi:", myJedi);
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

                    if(!defenderHasBeenSelected) { //I have used this statement to only allow 1 pick for a defender and disable the on click functions for the other enemies
                        $("#defender").empty();//this is to clear out the text inside of the defender div
                        $("#defender").append($(myDefender.name));//
                        defenderHasBeenSelected = true;
                        $("#yourOpponent").text(myDefender.health);
                        lightsaber.play();
                    }
                    
                    
                    console.log("myDefender:", myDefender);
                    console.log(myDefender.health);
                    
                }//end of else if   

            })//end on of onclick function of picking your player and initial opponent
    
                //now its time to fight
            $(".btn").on("click", function () {



                if(defenderHasBeenSelected) {

                    numberOfAttacks++; //this is used in the line below to increase the base attack power of myJedi

                    myJedi.newAttack = (numberOfAttacks * myJedi.attack);
                    
                    myJedi.health -= myDefender.counterAttack 
                    $("#yourFight").text(myJedi.health);
                    console.log("myJedi.health", myJedi.health);
                    
                    myDefender.health -= myJedi.newAttack; 
                    $("#yourOpponent").text(myDefender.health);
                    console.log("myDefender.health:", myDefender.health);

                    dual.play();
                    
                    console.log("myJedi.attack", myJedi.newAttack);
                    console.log("numberOfAttacks", numberOfAttacks);
                    console.log("numberOfAttacks * myJedi.attack", numberOfAttacks * myJedi.attack); 

                    if (myJedi.health <1) {
                        //make myJedi dissapear
                        $(myJedi.name).remove();
                        //display the lose message
                        $("#yourCharacter").text("You have lost the game! Restart the page to play again!");
                        $(".btn").off("click");

                    }   else if(myDefender.health < 1) {
                            //make myDefender dissappear
                            $(myDefender.name).remove();
                            //New message 
                            $("#defender").text("Pick another Defender from the Enemies' List")
                            coolsaber.play();
                            //enable onClick function for the enemies 
                            defenderHasBeenSelected = false;
                            //here we decrease the amount of enemies available..so that when it reaches zero in the if-statement below, myJedi wins the game
                            enemiesRemaining--;

                    }

                    if (enemiesRemaining < 1) {
                        //myJedi has won the game
                        //display this win message 
                        $("#yourCharacter").text("You have won the game! Restart the page to play again!");
                        coolsaber.play();
                        //remove message: "pick another enemy from the defender section"
                        $("#defender").empty(); 
                    }

                }
                     
            })
                

        
    };//end of game


