describe('Airport', function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = 'plane';
  });

  it('can land a plane', function(){
    airport.land(plane);
    expect(airport.planes).toEqual([plane]);
  });

  it('can take off a plane', function(){
    airport.land(plane);
    airport.takeOff(plane);
    expect(airport.planes).toEqual([]);
  });



});