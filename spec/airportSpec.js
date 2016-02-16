describe('Airport', function(){
  var airport;
  it('can land a plane', function(){
    airport = new Airport();
    var plane = 'plane';
    airport.land(plane);
    expect(airport.planes).toEqual([plane]);
  });
});