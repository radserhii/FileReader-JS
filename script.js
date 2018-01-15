
function handleFilesSelect (e) {
    var files = e.target.files;
    for(var i = 0, file; file = files[i]; i++) {
        var li = document.createElement('li');
        li.innerHTML = file.name + ' ' + file.size;
        if(file.type.match('image.*')) {
            document.querySelector('.left-list').appendChild(li);
        } else {
            console.log(file);
            document.querySelector('.right-list').appendChild(li);
        }

    }
}

document.querySelector('input[type="file"]').addEventListener('change', handleFilesSelect);