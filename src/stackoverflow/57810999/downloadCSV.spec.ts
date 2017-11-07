import { downloadCSV } from './downloadCSV';

(global as any).Blob = jest.fn();
window.URL.createObjectURL = jest.fn();

describe('downloadCSV', () => {
  const csv = 'csv';
  const filename = 'filename';

  it('should create a file of CSV type', () => {
    (global as any).Blob.mockReturnValueOnce('mocked blob');
    const anchorMocked = { href: '', click: jest.fn(), download: '', style: { display: '' } } as any;
    const createElementSpyOn = jest.spyOn(document, 'createElement').mockReturnValueOnce(anchorMocked);
    document.body.appendChild = jest.fn();
    (window.URL.createObjectURL as jest.MockedFunction<typeof window.URL.createObjectURL>).mockReturnValueOnce(
      'https://github.com/mrdulin'
    );

    downloadCSV(csv, filename);

    expect(createElementSpyOn).toBeCalledWith('a');
    expect(document.body.appendChild).toBeCalledWith(anchorMocked);
    expect(anchorMocked.click).toBeCalledTimes(1);
    expect(anchorMocked.href).toBe('https://github.com/mrdulin');
    expect(anchorMocked.download).toBe('filename');
    expect(anchorMocked.style.display).toBe('none');
  });
});
