//javascript



    function heroine(myHealth, myAttack, myCounterAttack, myName){
        this.health = myHealth;
        this.attack = myAttack;
        this.counterAttack = myCounterAttack;
        this.name = myName; 
        
    }

    var aayla = new heroine(200, 25, 5, "#aayla");
    var padme = new heroine(150, 20, 8, "#padme");
    var rey = new heroine(200, 25, 5, "#rey");
    var kylo = new heroine(200, 25, 5, "#kylo");
    var myJedi;

    var jedis = [aayla, padme, rey, kylo];
    game();

    function game() {
        //this is how we pick the fighter with the on click event
        $(".pic").on("click", function() {
            if($(this).attr("id")==="rey"){
                myJedi= rey;
            } else if ($(this).attr("id")==="aayla"){
                myJedi = aayla;
            } else if ($(this).attr("id")==="padme") {
                myJedi = padme;
            } else {
               myJedi = kylo;
            }
            for (var i = 0; i < jedis.length; i++) {
                //move all jedis to the enemies section in HTML
                $("#enemies").append($(jedis[i].name));
            } 
            //move the character that you picked back to the your character section in HTML
            $("#yourCharacter").append($(myJedi.name));
            


            
        }); 
    }



