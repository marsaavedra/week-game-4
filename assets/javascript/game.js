//javascript



    function heroine(myHealth, myAttack, myCounterAttack, myName){
        this.health = myHealth;
        this.attack = myAttack;
        this.counterAttack = myCounterAttack;
        this.name = myName; 
        
    }

    var aayla= new heroine(200, 25, 5, "ayyla");
    var padme= new heroine(150, 20, 8, "padme");
    var rey= new heroine(200, 25, 5, "rey");
    var kylo= new heroine(200, 25, 5, "kylo");
    var myJedi;

    function game() {
        //this is how we pick the fighter with the on click event
        $(".pic").on("click", function() {
            if($(this).attr("id")==="rey"){
                //crate obj with rey's stats
            } else if ($(this).attr("id")==="aayla"){
                myJedi = aayla;
            } else if ($(this).attr("id")==="padme") {
                myJedi = padme;
            } else {
               myJedi = kylo;
            }


            
        }); 
    }



