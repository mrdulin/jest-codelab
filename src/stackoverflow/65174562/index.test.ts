describe('65174562', () => {
  it('should pass', () => {
    const insertedData = {
      id: '123',
      lastModifiedDate: new Date('2019-08-28'),
    };
    expect(insertedData).toEqual({
      id: expect.any(String),
      lastModifiedDate: expect.any(Date),
    });
  });
});
