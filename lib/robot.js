const directions = ["north", "east","south", "west"];
class Robot {
	//your solution here
  constructor(arr= [0,0]){
    this.coordinates = arr
    this.bearing = 'north'
  }
  setCoordinates(x,y){
    this.coordinates = [x,y]
  }
  setBearing(direction){
    if (directions.includes(direction)) {
      this.bearing = direction
    } else {
      throw "/Invalid Robot Bearing/i"
    }
  }
  place({x,y,direction}){
    this.setBearing(direction)
    this.setCoordinates(x,y)
  }
  turnRight(){
    let index = directions.indexOf(this.bearing)
    if ((index + 1) >= 4) {
      index= -1
    }
   this.bearing = directions[index+1]
  }
  turnLeft(){
    let index = directions.indexOf(this.bearing)
    if ((index - 1) <= -1) {
      index= 4
    }
   this.bearing = directions[index-1]
  }
  advance(){
    let x= this.coordinates[0]
    let y = this.coordinates[1]
    if (this.bearing === 'north'){
      this.setCoordinates(x,y+1)
    } else if (this.bearing === 'east') {
      this.setCoordinates(x+1,y)
    }else if (this.bearing === 'south') {
      this.setCoordinates(x,y-1)
    }
    else if (this.bearing === 'west') {
      this.setCoordinates(x-1,y)
    }
  }
  translateInstructions(str){
    for (let i =0; i< str.length; i++){
      if (str[i]==='L') {
        this.turnLeft()
      } else if (str[i]==='R') {
        this.turnRight()
      } else if (str[i]==='A'){
        this.advance()
      }
    }
  }
}
