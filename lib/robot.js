class Robot {
	//your solution here
  constructor (coordinates, bearing){
    this.coordinates = [0, 0];
    this.bearing = "north"
  }

  setCoordinates(x, y){
    this.coordinates = [x, y];
  }

  setBearing(bearing){
    let bearingArr = ["north", "east", "south", "west"];
      if (bearingArr.includes(bearing)){
      this.bearing = bearing
    }else{
      throw "Invalid Robot Bearing"
    }
  }

  place(obj){
    this.setCoordinates(obj.x, obj.y)
    this.setBearing(obj.direction)
  }

  turnRight(){
    const bearingArr = ["north", "east", "south", "west"];
    let index = bearingArr.indexOf(this.bearing);
    this.bearing = bearingArr[(index + 1) % 4]
  }

  turnLeft(){
    const bearingArr = ["north", "east", "south", "west"];
    let index = bearingArr.indexOf(this.bearing);
    this.bearing = bearingArr[(index + 3) % 4]
  }

  advance(){
    let dir = this.bearing;
    let xPosition = this.coordinates[0];
    let yPosition = this.coordinates[1];
    if(dir === "north"){
      this.coordinates = [xPosition, yPosition + 1];
    }else if(dir === "east"){
      this.coordinates = [xPosition + 1, yPosition];
    }else if(dir === "south"){
      this.coordinates = [xPosition, yPosition -1];
    }else{
      this.coordinates = [xPosition - 1, yPosition];
    }
  }

  translateInstructions(instruction){
    let instrArr = instruction.split("");
    instrArr.forEach(el => {
      if(el === "R"){
        this.turnRight()
      }else if(el === "L"){
        this.turnLeft()
      }else if(el === "A"){
        this.advance()
      }else{
      }
    })

  }


}
