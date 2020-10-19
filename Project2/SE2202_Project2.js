// SE2202A 001 // Mini-Project 2
//Group 16


// // Constructor function for Point objects
function Point(x,y,z)
{
    this.x = x;
    this.y = y;
    this.z = z;

    this.calcDistance = function (p){
        let a= p.x - x;
        let b= p.y - y;
        let c= p.z - z;

    distance=Math.sqrt(a*a+b*b+c*c);
    return console.log("The distance between two points: ",distance)
    }
}

// create point objects
let point1 = new Point (0,0,0);
let point2 = new Point (3,4,12);

console.log("Coordinates of point1:", "x:", point1.x, "y:", point1.y,"z:", point1.z)
console.log("Coordinates of point2:", "x:", point2.x, "y:", point2.y,"z:", point2.z)


// calculate Distance
point1.calcDistance(point2)
