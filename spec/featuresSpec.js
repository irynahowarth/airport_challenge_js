// As an air traffic controller
// So I can get passengers to a destination
// I want to instruct a plane to land at an airport and confirm that it has landed
describe('Airport',function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = 'plane';

    Airport.prototype.isStormy = function(){
        return (Math.floor(Math.random()*4)+1) === 1;
    };

  });

  describe('land at an airport', function(){
    it('land a plane', function(){
      spyOn(airport, 'isStormy').and.returnValue(false);
      airport.land(plane);
      expect(airport.planes).toEqual([plane]);
    });
  });

// As an air traffic controller
// So I can get passengers on the way to their destination
// I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport
  describe('plane takes off from an airport', function(){
    it('takes off a plane', function(){
      spyOn(airport, 'isStormy').and.returnValue(false);
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.planes).toEqual([]);
    });
  });

// As an air traffic controller
// To ensure safety
// I want to prevent takeoff when weather is stormy

  describe('takeoff is prevented when weather is stormy', function(){
    it('prevents takeoff',function(){
      spyOn(airport, 'isStormy').and.returnValue(true);
      airport.land(plane);
      expect(function(){airport.takeOff(plane);}).toThrow(new Error("Weather is too stormy!"));
    });
  });

});


