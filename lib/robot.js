class Robot {
	constructor(coordinates = [0,0], bearing= 'north'){
    this.coordinates = coordinates;
    this.bearing = bearing;
  }

  setCoordinates(x, y){
    this.coordinates = [x,y]
  }

  setBearing(direction){
    let directions = ["north", "south", "east", "west"];
    if (directions.includes(direction)){
      this.bearing = direction
    } else {
      throw new Error("Invalid Robot Bearing");
    }
  }

  place(obj){
    this.setCoordinates(obj.x, obj.y)
    this.setBearing(obj.direction)
  }

  turnRight(){
    switch(this.bearing){
      case "north":
        this.bearing = "east"
        break;
      case "east":
        this.bearing = "south"
        break;
      case "south":
        this.bearing = "west"
        break;
      case "west":
        this.bearing = "north"
        break
    }
  }

  turnLeft(){
    switch(this.bearing){
      case "north":
        this.bearing = "west"
        break;
      case "east":
        this.bearing = "north"
        break;
      case "south":
        this.bearing = "east"
        break;
      case "west":
        this.bearing = "south"
        break
    }
  }

  advance(){
    switch(this.bearing){
      case "north":
        let northY = ++this.coordinates[1]
        let northX = this.coordinates[0]
        this.setCoordinates(northX, northY)
        break
      case "east":
        let eastY = this.coordinates[1]
        let eastX = ++this.coordinates[0]
        this.setCoordinates(eastX, eastY)
        break
      case "south":
        let southY = --this.coordinates[1]
        let southX = this.coordinates[0]
        this.setCoordinates(southX, southY)
        break
      case "west":
        let westY = this.coordinates[1]
        let westX = --this.coordinates[0]
        this.setCoordinates(westX, westY)
        break
    }
  }

  translateInstructions(command){
    for (let i=0; i<command.length; i++){
      switch(command[i]){
        case "L":
          this.turnLeft()
          break
        case "R":
          this.turnRight()
          break
        case "A":
          this.advance()
          break
      }
    }
  }

}
