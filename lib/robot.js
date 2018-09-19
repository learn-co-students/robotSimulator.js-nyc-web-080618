class Robot {
	constructor(coordinates, bearing){
    this.coordinates = [0, 0],
    this.bearing = 'north'
  }


  setCoordinates(x, y) {
    this.coordinates = [x, y];
  }

  setBearing(bearing){
    let bearingArray = ['north', 'east', 'south', 'west']
    if (bearingArray.includes(bearing)) {
      this.bearing = bearing
    }
    else {
      throw new Error("Invalid Robot Bearing")
    }
  }

  place(object) {
    this.setCoordinates(object.x, object.y);
    this.setBearing(object.direction);
  }

/// the % 4 is a module -> it will tell the array to start back over at zero
  turnRight(){
    let bearingArray = ['north', 'east', 'south', 'west']
    let index = bearingArray.indexOf(this.bearing);
    this.bearing = bearingArray[(index + 1) % 4]
  }

/// the % 4 is a module -> it will tell the array to start back over at zero
  turnLeft(){
    let bearingArray = ['north', 'east', 'south', 'west']
    let index = bearingArray.indexOf(this.bearing);
    this.bearing = bearingArray[(index + 3) % 4]
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
