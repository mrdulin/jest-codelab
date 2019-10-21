import download from './';

describe('download', () => {
  test('should download correctly', () => {
    const mLink = { href: '', click: jest.fn(), download: '', style: { display: '' }, setAttribute: jest.fn() } as any;
    const createElementSpy = jest.spyOn(document, 'createElement').mockReturnValueOnce(mLink);
    document.body.appendChild = jest.fn();
    document.body.removeChild = jest.fn();
    download('blobUrl', 'go');
    expect(createElementSpy).toBeCalledWith('a');
    expect(mLink.setAttribute.mock.calls.length).toBe(2);
    expect(mLink.setAttribute.mock.calls[0]).toEqual(['href', 'blobUrl']);
    expect(mLink.setAttribute.mock.calls[1]).toEqual(['download', 'go.pdf']);
    expect(mLink.style.display).toBe('none');
    expect(document.body.appendChild).toBeCalledWith(mLink);
    expect(mLink.click).toBeCalled();
    expect(document.body.removeChild).toBeCalledWith(mLink);
  });
});
