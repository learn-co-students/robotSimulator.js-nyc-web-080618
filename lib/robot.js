class Robot {
	constructor(){
    this.coordinates = [0,0]
    this.bearing = 'north'
  }

  setCoordinates(num1,num2){
    return this.coordinates = [num1,num2]
  }

  setBearing(direction){
    const directionArray = ['north', 'east', 'south','west'];
    if (!directionArray.includes(direction)){
      throw "/Invalid Robot Bearing/i"
    }
    return this.bearing = direction
  }

  place(orientation_object){
    const xCoordinate = orientation_object.x;
    const yCoordinate = orientation_object.y;
    const cardinal = orientation_object.direction;
    this.setCoordinates(xCoordinate,yCoordinate);
    this.setBearing(cardinal);
  }

  turnRight(){
    const changingDirectionObject = {'north': 'east', 'east': 'south', 'south': 'west', 'west': 'north'}
    this.bearing = changingDirectionObject[this.bearing]
  }

  turnLeft(){
    const changingDirectionObject = {'north': 'west', 'east': 'north', 'south': 'east', 'west': 'south'}
    this.bearing = changingDirectionObject[this.bearing]
  }

  advance(){
    const changingDirectionsObject = {'north': 1, 'south': -1, 'east': 1, 'west': -1};
    if (this.bearing === 'north' || this.bearing === 'south'){
      this.coordinates[1] += changingDirectionsObject[this.bearing]
    } else {
      this.coordinates[0] += changingDirectionsObject[this.bearing]
    }
  }

  translateInstructions(instruction){
      const array = instruction.split('')
      for(const element of array){
        if (element === "L"){
          this.turnLeft();
        } else if (element === 'R'){
          this.turnRight();
        } else if (element === 'A'){
          this.advance();
      } 
    }
  }
}
