
const createOffset = function (offset) {
    let string = "";
    for (i = 0; i < offset; i++) {
        string += " "
    }

    return string;
};

  
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
                       
