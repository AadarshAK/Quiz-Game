class Quiz{
    constructor(){
       this.gameState;
       
    }
    getState(){
        this.gameState=database.ref('gameState');
    }

    update(){
        this.gameState=state;
    }

    async start(){
        
    }
}