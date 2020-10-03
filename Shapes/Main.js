let pallet = function (choice){ //Pallet Function
    switch(choice){ 
        case 1: // Rectangle
            return (drawRectangle);

        case 2: //Triangle
           return (drawTriangle);
    }

}

//Draw Rectangle
function drawRectangle(offSet,height,width){

    let rectangle = "";
    for(i = 0; i<height;i++){
        let line = "\n"; //New Line

        //Creates OffSet
        for(x = 0; x<offSet;x++){
            line += " "; //Creates offset based on input value
        }

        //Stars (Width)
        for(y = 0; y<width;y++){
            line+="*";
        }
        rectangle+=line; //updates rectangle after each completed line
    }

    console.log(rectangle);
    

}

//Draw Triangle

function drawTriangle (offSet, height) {

   

    let triangle = "";
    

    for (i = 0; i < height; i++) {
        let line = "\n";

        for(x = 0; x<offSet;x++){
            line += " "; //Creates offset based on input value
        }

        
        line += "  ".repeat(height - i);

        for (j = 0; j <= i; j++) { //stars for triangle
            line += " * ";
        }
        triangle += line;

    }
    console.log(triangle);

    

}   

//calls functions to draw rectangle
let myRectangle = pallet(1);

myRectangle(10,4,9);
myRectangle(10,9,4);
myRectangle(20,4,9);
myRectangle(20,9,4);

let myTriangle = pallet(2);

myTriangle(10, 3);
myTriangle(10, 5);
myTriangle(20, 3);
myTriangle(20, 5);

