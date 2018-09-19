let directions = ["north", "south", "east", "west"]

class Robot {
	//your solution here


  constructor(){
    this.coordinates = [0,0]
    this.bearing = "north"
  }

  setCoordinates(x,y){
    this.coordinates = [x,y]
  }

  setBearing(bearing){
    if (directions.includes(bearing)){
    this.bearing = bearing

    }else{

    throw new Error("Invalid Robot Bearing")
    }
  }

  place(obj){
    this.coordinates = [obj.x, obj.y]
    this.bearing = obj.direction
  }

  turnRight(){
    if (this.bearing === "north"){
      this.bearing = "east"
    }else if (this.bearing === "east"){
      this.bearing = "south"
    }else if (this.bearing === "south"){
      this.bearing = "west"
    }else{
      this.bearing = "north"
    }
  }

  turnLeft(){
    if (this.bearing === "north"){
      this.bearing = "west"
    }else if (this.bearing === "west"){
      this.bearing = "south"
    }else if (this.bearing === "south"){
      this.bearing = "east"
    }else{
      this.bearing = "north"
    }
  }

  advance(){
    if (this.bearing === "north"){
      this.coordinates = [this.coordinates[0], this.coordinates[1]+1]
    }else if (this.bearing === "west"){
      this.coordinates = [this.coordinates[0]-1, this.coordinates[1]]
    }else if (this.bearing === "south"){
      this.coordinates = [this.coordinates[0], this.coordinates[1]-1]
    }else{
      this.coordinates = [this.coordinates[0]+1, this.coordinates[1]]
    }

  }

  translateInstructions(arg){
    if (arg === "L"){
      this.turnLeft()
    }else if (arg === "R"){
      this.turnRight()
    }else if (arg === "A"){
      this.advance()
    }else{
      for (var i = 0; i < arg.length; i++) {
        this.translateInstructions(arg[i])
      }
    }




  }


















} //end class
