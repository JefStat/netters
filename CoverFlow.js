var coverFlowList =
    {
        rows: 2,
        columns: 4,
        size: 0,
        getRowAndColumnIndex: function(){
            var row,col;
            row = Math.floor(this.size / (this.columns + 1));
            col = this.size - (row*this.columns)-1;
            return {row: row, column: col};
        },
        selectedIndex: null,
        selectFirst: function(){
            this.selectedIndex = {row: 0, column: 0};
            this.focusSelectedIndex();
            return this.selectedIndex;
        },
        moveSelectionDown: function(){
            if (this.selectedIndex.row < this.rows - 1){
                var preview = this.getRowAndColumnIndex();
                if (this.selectedIndex.row + 1 === this.rows &&
                    preview.column < this.selectedIndex.column){
                    this.selectedIndex.column = preview.column;
                }
                this.selectedIndex.row++;
                this.focusSelectedIndex();
            }
        },
        moveSelectionUp: function(){
            if (this.selectedIndex.row > 0){
                this.selectedIndex.row--;
                this.focusSelectedIndex();
            }
        },
        moveSelectionRight: function(){
            var preview = this.getRowAndColumnIndex();
            if (preview.row === this.selectedIndex.row &&
                preview.column > this.selectedIndex.column ||
               (preview.row !== this.selectedIndex.row &&
                this.selectedIndex.column < this.columns - 1))
            {
                this.selectedIndex.column++;
                this.focusSelectedIndex();
            }
        },
        moveSelectionLeft: function(){
            if (this.canMoveLeft()){
                this.selectedIndex.column--;
                this.focusSelectedIndex();
            }
        },
        canMoveLeft: function(){
            return this.selectedIndex.column > 0;
        },
        hasFocus: false,
        focusSelectedIndex: function(){
            $('#coverFlow ul :eq(' + this.selectedIndex.row  + ')').
                children()[this.selectedIndex.column].focus();
        }
    };

var createRow = function(rows){
    var i;
    for(i=0;i<rows;i++)
    {
        $("#coverFlow").append('<ul class="coverFlowRow"></ul>');
    }
};

var addCover = function(coverUrl,coverFlowList){
    coverFlowList.size++;
    var rowAndColumn = coverFlowList.getRowAndColumnIndex();
    $(".coverFlowRow").each(function(index, value){
            if (rowAndColumn.row === index)
            {
                $(value).append('<li tabindex="0"><a><img src="box art\\408939.jpg" /></a></li>');
            }
        }
    )
};

createRow(coverFlowList.rows);
addCover("",coverFlowList);
addCover("",coverFlowList);
addCover("",coverFlowList);
addCover("",coverFlowList);
addCover("",coverFlowList);
addCover("",coverFlowList);
addCover("",coverFlowList);
addCover("",coverFlowList);