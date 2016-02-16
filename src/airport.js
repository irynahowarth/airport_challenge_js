function Airport(){

  this.planes = [];

  this.land = function(plane){
    this.planes.push(plane);
  }

  this.isStormy = function(){
    return (Math.floor(Math.random()*4)+1) === 1;
  }


  this.takeOff = function(plane){
    if( this.isStormy() ){
      throw new Error("Weather is too stormy!");
    } else {
      var arr = this.planes;
      var deletePlane = function(arr,plane){
        return arr.slice(0,arr.indexOf(plane)).concat(arr.slice(arr.indexOf(plane)+1));
      };
      this.planes = deletePlane(arr,plane);
    }
  }
}