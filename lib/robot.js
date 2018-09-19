class Robot {
   constructor(){
     this.coordinates=[0, 0]
     this.bearing="north"
   }

  setCoordinates(x, y){
    this.coordinates=[x,y]
  }

  setBearing(dir){
    const directions = ["north", "south", "east", "west"]
    if (directions.indexOf(dir)>=0){
      this.bearing = dir
    } else {
      throw "Invalid Robot Bearing"
    }
  }

  place(obj){
    this.setBearing(obj.direction)
    this.setCoordinates(obj.x,obj.y)
  }

  turnRight(){
    const directions = ["north", "east","south", "west"]
    const i=directions.indexOf(this.bearing)
    this.bearing=directions[(i+1)%4]
  }

  turnLeft(){
    const directions = ["north", "east","south", "west"]
    const i=directions.indexOf(this.bearing)
    this.bearing=directions[(i-1)%4>=0? (i-1)%4 :(i-1)%4+4]
  }

  advance(){
    if (this.bearing==="north"){
      this.coordinates[1]+=1
    }else if (this.bearing==="east") {
      this.coordinates[0]+=1
    }else if (this.bearing==="south") {
      this.coordinates[1]-=1
    }else{
      this.coordinates[0]-=1
    }
  }

  translateInstructions(ins){
    if (ins=="L"){
      this.turnLeft()
    }
     if (ins=="R") {
      this.turnRight()
    }
    if(ins=="A"){
      this.advance()
    }
    if (ins.length>1){
      const detail=ins.split("")
      detail.forEach(det=>this.translateInstructions(det))
    }
  }

}
