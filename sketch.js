var weight = [160,230,90,200,79,127];
var sum = 0;
var avg = 0;
function setup() 
{
  createCanvas(400,400);
  sum = weight[0] + weight[1] + weight[2] + weight[3] + weight[4] + weight[5]
  avg = sum/weight.length
  console.log(avg)
}

function draw() 
{
background(51);

}

