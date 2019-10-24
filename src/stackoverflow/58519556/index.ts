export const searchBox = () => {
  var input, filter, table, row, cell, i;
  input = document.getElementById('enter_search');
  filter = input.value.toUpperCase();
  table = document.getElementById('env_tabulator');
  row = table.getElementsByClassName('tabulator-row');
  for (i = 0; i < row.length; i++) {
    cell = row[i].getElementsByClassName('tabulator-cell');
    var flag = false;
    for (var j = 0; j < cell.length; j++) {
      var td = cell[j];
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        flag = true;
      }
    }
    if (flag) {
      row[i].style.display = '';
    } else {
      row[i].style.display = 'none';
    }
  }
};
