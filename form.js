class Form{
    constructor(){

    }
    display(){
        var title = createElement("H1")
        title.position(200,50)
        title.html("car racing game")
        var input= createInput()
        input.position(200,100)
        var button= createButton("play")
        button.position(200,200)
        button.mousePressed(function(){
            var name = input.value()
            var greeting = createElement("H3")
            greeting.html("hello "+ name)
        })
    }
}