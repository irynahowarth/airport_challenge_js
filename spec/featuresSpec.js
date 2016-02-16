// As an air traffic controller
// So I can get passengers to a destination
// I want to instruct a plane to land at an airport and confirm that it has landed
describe('airport',function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = 'plane';
  });

  describe('land at an airport', function(){
    it('land a plane', function(){
      airport.land(plane)
      expect(airport.planes).toEqual([plane]);
    });
  });

});