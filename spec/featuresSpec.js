// As an air traffic controller
// So I can get passengers to a destination
// I want to instruct a plane to land at an airport and confirm that it has landed
describe('Airport',function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = 'plane';
  });

  describe('land at an airport', function(){
    it('land a plane', function(){
      airport.land(plane);
      expect(airport.planes).toEqual([plane]);
    });
  });

// As an air traffic controller
// So I can get passengers on the way to their destination
// I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport
  describe('plane takes off from an airport', function(){
    it('takes off a plane', function(){
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.planes).toEqual([]);
    });
  });

});


