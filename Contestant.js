class Contestant{
    constructor(){
        this.name=null;
    }
    getCount(){
        var contestantCountRef = database.ref('playerCount');
             contestantCountRef.on("value",(data)=>{
                 contestant = data.val();
             })
        
    }

    uppdateCount(count){
        database.ref('/').update({
        contestantCount:count
        })
    }
}