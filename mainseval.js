const createOffset = function (offset) {
    let string = "";
    for (i = 0; i < offset; i++) {
        string += " "
    }

    return string;
};

var choice;
function pallet(choice){  //choice=1 for rectangle,  choice=2 for triangle
    if (choice==1){

        function myrectangle(offset, length,width) {

            let offsetSpace = createOffset(offset);
                    
            let rectangle = "";

            for (i = 0; i < length; i++) {
                rectangle += "\n" + offsetSpace;
                for (j = 0; j < width; j++) {
                    rectangle += " * ";
                }
            }
                    
            return rectangle;
        }
                    
                console.log(myrectangle(10, 4, 9));
                console.log(myrectangle(10, 9, 4));
                console.log(myrectangle(20, 4, 9));
                console.log(myrectangle(20, 9, 4));


    }else if (choice==2){

        function myTriangle (offset, height) {

            let offsetSpace = createOffset(offset);
    
            let triangle = "";
    
            for (i = 0; i < height; i++) {
    
                triangle += "\n" + offsetSpace;
    
                triangle += "  ".repeat(height - i);
    
                for (j = 0; j <= i; j++) {
                    triangle += " * ";
                }
    
            }
    
            return triangle;
        }   
                console.log(myTriangle(10, 3));
                console.log(myTriangle(10, 5));
                console.log(myTriangle(20, 3));
                console.log(myTriangle(20, 5));     
        
    }
                 
 
}

console.log(pallet(1));
console.log(pallet(2));

 