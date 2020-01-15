const data = {
  results: [
    {
      name: {
        first: 'sparky',
      },
    },
  ],
};

const getUser = () => jest.fn().mockResolvedValue(data);

export { getUser };
