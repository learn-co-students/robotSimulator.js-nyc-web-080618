class Robot {
 constructor(coordinates = [0,0],bearing = "north"){
   this.coordinates = coordinates
   this.bearing = bearing
 }
 //
 setCoordinates(x,y){
   this.coordinates = [x,y]
 }
 //
 setBearing(newDirection){
   const directions = ["north", "south", "east", "west"];
   if(directions.includes(newDirection)){
     this.bearing = newDirection
   }else{
     throw '/Invalid Robot Bearing/i';
   }
 }
 //
 place(hash){
   this.coordinates = [hash.x,hash.y]
   this.bearing = hash.direction
 }
 //
 turnRight(){
   if(this.bearing === 'north'){
     this.bearing = 'east'
   }else if(this.bearing === 'east'){
     this.bearing = 'south'
   }else if(this.bearing === 'south'){
     this.bearing = 'west'
   }else if(this.bearing === 'west'){
     this.bearing = 'north'
   }
 }
 //
 turnLeft(){
   if(this.bearing === 'north'){
     this.bearing = 'west'
   }else if(this.bearing === 'west'){
     this.bearing = 'south'
   }else if(this.bearing === 'south'){
     this.bearing = 'east'
   }else if(this.bearing === 'east'){
     this.bearing = 'north'
   }
 }
 //
 advance(){
   if(this.bearing === 'north'){
     this.coordinates[1]++
   }else if(this.bearing === 'east'){
     this.coordinates[0]++
   }else if(this.bearing === 'south'){
     this.coordinates[1]--
   }else if(this.bearing === 'west'){
     this.coordinates[0]--
   }
 }

 translateInstructions(string){
   for(let i=0;i<string.length;i++){
     if(string[i]=== 'L'){
       this.turnLeft()
     }else if(string[i]=== 'R'){
       this.turnRight()
     }else if(string[i]=== 'A'){
       this.advance()
     }
   }
 }
}
