const directions = ["north", "south", "east", "west"]

class Robot {
	//your solution here

  constructor(coordinates, bearing) {
    this.coordinates = [0,0]
    this.bearing = "north"
  }


  setCoordinates(x,y) {
    this.coordinates = [x,y]
  }

  setBearing(bearing) {
      if(directions.includes(bearing)){
      this.bearing = bearing
      }
      else {

      throw new Error("Invalid Robot Bearing")
      }
  } //end of function

//x: -2, y: 1, direction: "east"
    place(obj) {
      this.coordinates = [obj.x, obj.y]
      this.bearing = obj.direction
    }

//directions = ["north", "south", "east", "west"]
    turnRight() {
      if(this.bearing === "north")
        this.bearing  = "east"
      else if (this.bearing === "east") {
        this.bearing = "south"
      }
      else if (this.bearing === "south") {
        this.bearing = "west"
      }
      else if (this.bearing === "west") {
        this.bearing = "north"
      }
    } //end of turnRight

    turnLeft() {
      if(this.bearing === "east")
        this.bearing  = "north"
      else if (this.bearing === "south") {
        this.bearing = "east"
      }
      else if (this.bearing === "west") {
        this.bearing = "south"
      }
      else if (this.bearing === "north") {
        this.bearing = "west"
      }
    }

    advance() {
      if(this.bearing === "north")
        this.coordinates[1] += 1
      else if (this.bearing === "east") {
        this.coordinates[0] += 1
      }
      else if (this.bearing === "west") {
        this.coordinates[0] -= 1
      }
      else if (this.bearing === "south") {
        this.coordinates[1] -= 1
      }
    }

    translateInstructions(instructions) {
      if (instructions === 'L') {
        return this.turnLeft()
      }
      else if (instructions === 'R') {
        return this.turnRight()
      }
      else if (instructions === "A") {
        return this.advance()
      }
      else
        for (var i = 0; i < instructions.length; i++) {
          this.translateInstructions(instructions[i])
        }


    }






} //end of class
