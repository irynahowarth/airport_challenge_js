describe('Airport', function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = 'plane';

    Airport.prototype.isStormy = function(){
        return (Math.floor(Math.random()*4)+1) === 1;
    };

  });

  it('can land a plane', function(){
    airport.land(plane);
    expect(airport.planes).toEqual([plane]);
  });

  it('can take off a plane', function(){
    spyOn(airport, 'isStormy').and.returnValue(false);
    airport.land(plane);
    airport.takeOff(plane);
    expect(airport.planes).toEqual([]);
  });



});