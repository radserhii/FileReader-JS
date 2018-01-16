
function handleFilesSelect (e) {

    var files = e.target.files;
    var leftTable = document.querySelector('.left-table');
    var rightTable = document.querySelector('.right-table');

    for(var i = 0, file; file = files[i]; i++) {

        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = td1.cloneNode(false);

        td1.innerHTML = file.name;
        tr.appendChild(td1);
        td2.innerHTML = file.size;
        tr.appendChild(td2);

        if(file.type.match('image.*')) {
            var row = leftTable.appendChild(tr);
            row.appendChild(td1);
            row.appendChild(td2);
        } else {
            var row = rightTable.appendChild(tr);
            row.appendChild(td1);
            row.appendChild(td2);
        }

    }
}

document.querySelector('input[type="file"]').addEventListener('change', handleFilesSelect);