

let canvas;
let ctx;

//PARAMETERS
const FPS = 50;
const columns = 50;
const rows = 50; 
let matrix;
let tileWidth;
let tileHeight;



//COLORS
const colors = {
    wall: '#000',
    free: '#777'
}


//GROUND TYPES 

const ground_types = {
    wall: 1,
    ground: 0
}
function generate2DArray(rows, columns){
    let obj = new Array(rows);
    obj = obj.map(row => new Array(columns));
    return obj;
}

function initialize(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');

    //Calc size tile (proportional to the canvas size)

    tileWidth = parseInt(canvas.width / columns);
    tileHeight = parseInt(canvas.height / rows);


    //creating the matrix
    let scene = generate2DArray(rows,columns);
    console.log(scene);

    for(i = 0 ; i < columns; i ++){
        for( j = 0 ; j < rows; j ++){
            scene[i][j] = new Cell(i,j);
        }
    }

    //main function
    setInterval(function(){main();}, 1000/FPS);
}

class Cell{

    Cell(x,y){
        this.x = x;
        this.y = y;
    
        let random = Math.floor(Math.random()*5);
        this.ground_type= (random == 1)? ground_types.wall: ground_types.ground;
    
        //weights
        this.total_cost = 0; 
        this.steps = 0;
        this.heuristic = 0;
    
        this.neighbors = [];
        this.father = null;
    
        this.draw = () => {
            let color = (this.ground_type == ground_types.wall )? colors.wall : colors.free;
            ctx.fillStyle = color; 
            ctx.fillRect(this.x*tileWidth, this.y*tileHeight, tileWidth, tileHeight);
        };
    }
}


function drawScene(){
    for(i = 0 ; i < columns ; i ++){
        
    }
}


function main(){
    
}