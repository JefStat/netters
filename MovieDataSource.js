window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
window.requestFileSystem(window.TEMPORARY, 1024*1024, initFS, errorHandler);
function initFS(fs){
    alert("Welcome to Filesystem! It's showtime :)");
    fs.root.getDirectory('box art', {create: false, exclusive: true},
        function(dirEntry) {
        alert('You have just got reference to the ' + dirEntry.name + ' directory.');
            var dirReader = dirEntry.createReader();
            dirReader.readEntries(function(entries) {
                for(var i = 0; i < entries.length; i++) {
                    var entry = entries[i];
                    if (entry.isFile){
                        console.log('File: ' + entry.fullPath);
                        boxArtRepository.concat(entry);
                    }
                }
            }, errorHandler);
    }, errorHandler);
}

var boxArtRepository = [];

function errorHandler(err){
    var msg = 'An error occured: ';
    switch (err.code) {
        case FileError.NOT_FOUND_ERR:
            msg += 'File or directory not found';
            break;
        case FileError.NOT_READABLE_ERR:
            msg += 'File or directory not readable';
            break;
        case FileError.PATH_EXISTS_ERR:
            msg += 'File or directory already exists';
            break;
        case FileError.TYPE_MISMATCH_ERR:
            msg += 'Invalid filetype';
            break;
        default:
            msg += 'Unknown Error';
            break;
    };
    console.log(msg);
};