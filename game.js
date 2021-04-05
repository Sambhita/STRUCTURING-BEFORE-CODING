class Game{
    constructor(){

    }
    getState(){
        var gameStateRef =database.ref("gameState")
        gameStateRef.on("value",function(data){
            gameState = data.val()
        })
    }
    updateState(value){
        var dbRef = database.ref("/")
        dbRef.update({
            gameState: value
        })
    }
    start(){
        if (gameState === 0){
            form = new Form()
            form.display()
        }
    }
}