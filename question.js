class Question{
    constructor(){
      this.input=createInput("Your Answer");
      this.button=createButton("submit");

    }

    hide(){
        this.input.hide();
        this.button.hide();
    }
    display(){
        var title = createElement('h3');
        title.html("Who is the richest person in the world?");
        title.position(width/2,40);

        this.input.position(200,350);
    }
}