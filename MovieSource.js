var dataSource = function(){
var url = "boxArtResponse.txt";
var myData = null;
var index =0;

var getReponse = function(callback, maxCovers, responseAction){
    $.get(url,function(txt){
        myData = JSON.parse(txt);
        callback(maxCovers,responseAction);
    })
};

    var getNextCovers = function(maxCovers,responseAction) {
        for (var i = 0; i < maxCovers; i++){
            index = (index + 1) % myData.titles.length;
            var data = 'box art\\' + myData.titles[index];
            responseAction(data);
        }
    };

var dataSource = {
    getCovers: function(maxCovers,responseAction){
        if (myData === null){
            getReponse(getNextCovers, maxCovers,responseAction);
        }else{
            getNextCovers(maxCovers,responseAction);
        }
    }
};
    return dataSource;
}();