import fs from 'fs';

export const jsonReader = async (path): Promise<any> => {
  return { v1: { a: { connections: [{ someLayer: { someField: 'real value' } }] } } };
};

export function jsonEditor(path, version, prot, index, layer, field, value) {
  // Read json
  return jsonReader(path).then(response => {
    const fileData = response;
    fileData[version][prot].connections[index][layer][field] = value;
    // call the WriteFile function
    fs.writeFile(path, JSON.stringify(fileData, null, 2), err => {
      if (err) throw err;
      console.log('write file successfully');
    });
  });
}
