const moves = ['north', 'east', 'south', 'west']

class Robot {
	//your solution here
  constructor (coordinates=[0,0], bearing ="north"){
    this.coordinates = coordinates
    this.bearing = bearing
  }

  setCoordinates(x,y){
    this.coordinates = [x,y]
    // console.log(this.coordinates)
  }

  setBearing(direction){
    if (moves.indexOf(direction)>= 0){
    this.bearing = direction
  } else{
    throw "Invalid Robot Bearing"
  }
}

  place(obj){
  this.setCoordinates(obj.x, obj.y)
  this.setBearing(obj.direction)
  }

  turnRight(){
  const loc = ['north', 'east', 'south', 'west']
  const i = loc.indexOf(this.bearing)
  this.bearing = loc[(i+1)%4]

 }

  turnLeft(){
   const loc = ['north', 'east', 'south', 'west']
   const i = loc.indexOf(this.bearing)
   this.bearing = loc[(i-1)%4>=0 ? (i-1)%4 :(i-1)%4+4]
 }

 advance(){
   if (this.bearing === 'north'){
     this.coordinates[1] ++
   }
   if (this.bearing === 'east'){
     this.coordinates[0] ++
   }
   if (this.bearing === 'south'){
     this.coordinates[1] --
   }
   if (this.bearing === 'west'){
     this.coordinates[0] --
   }
 }

 translateInstructions(ins){
   // dir.split('')
   // dir.ForEach(function (el) => fun)
   if (ins === 'L'){
     this.turnLeft()
   }
   if (ins === 'R'){
     this.turnRight()
   } if (ins === 'A'){
      this.advance()
    }
    if (ins.length > 1){
    const detail = ins.split('')
    detail.forEach(det=> this.translateInstructions(det))
  }
  }
 }
