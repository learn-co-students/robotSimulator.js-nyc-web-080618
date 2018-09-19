const directions = ["north","east","south","west"];
class Robot {
	constructor() {
    this.coordinates = [0,0]
    this.bearing = "north"
  }
  setCoordinates(x,y) {
    this.coordinates = [x,y]
  }
  setBearing(bearing) {
    if (directions.includes(bearing)) {
      this.bearing = bearing
    } else {
      throw Error("Invalid Robot Bearing")
    }
  }
  place(obj) {
    debugger
    this.setCoordinates(obj.x,obj.y)
    this.setBearing(obj.direction)
  }
  turnRight() {
    let dirId = directions.indexOf(this.bearing)
    if (dirId === 3) {
      this.bearing = directions[0]
    } else {
      this.setBearing(directions[++dirId])
    }

  }
  turnLeft() {
    let dirId = directions.indexOf(this.bearing)
    if (dirId === 0) {
      this.bearing = directions[3];
    } else {
      this.setBearing(directions[--dirId])
    }
  }
  advance() {
    switch(this.bearing) {
      case "north":
        this.coordinates[1] += 1
        break;
      case "south":
        this.coordinates[1] -= 1
        break;
      case "east":
        this.coordinates[0] += 1
        break;
      case "west":
        this.coordinates[0] -= 1
    }
  }
  translateInstructions(instructions) {
    let nav = instructions.split("")
    for (const x of nav) {
      switch (x) {
        case "L":
          this.turnLeft()
          break;
        case "R":
          this.turnRight()
          break;
        case "A":
          this.advance()
      }
    }

  }

}
