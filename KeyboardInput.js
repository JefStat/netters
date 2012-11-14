var focusElement;
var direction = {
    leftArrow: 37,
    upArrow: 38,
    rightArrow: 39,
    downArrow: 40
}

var navigationItemsKeyDown = function(key){
    switch (key)
    {
        case direction.upArrow:
            navigationList.movePreviousSelection();
            break;
        case direction.downArrow:
            navigationList.moveNextSelection();
            break;
        case direction.rightArrow:
            switchFocus();
            coverFlowList.selectFirst();
            break;
    }
};

var switchFocus = function(){
    navigationList.hasFocus = !navigationList.hasFocus;
    coverFlowList.hasFocus = !coverFlowList.hasFocus;
}

var contentAreaKeyDown = function(key){
    switch (key)
    {
        case direction.leftArrow:
            if (!coverFlowList.canMoveLeft()){
                switchFocus();
                navigationList.focusSelectedIndex();
            }else{
                coverFlowList.moveSelectionLeft();
            }
            break;
        case direction.upArrow:
            coverFlowList.moveSelectionUp();
            break;
        case direction.downArrow:
            coverFlowList.moveSelectionDown();
            break;
        case direction.rightArrow:
            coverFlowList.moveSelectionRight();
            break;
    }
};
$('#navigationArea').keydown(function(event){
    if (navigationList.hasFocus){
        navigationItemsKeyDown(event.keyCode);
    }
});
$('#contentArea').keydown(function(event){
    if (coverFlowList.hasFocus){
        contentAreaKeyDown(event.keyCode);
    }
});
$(window).keydown(function(event){
    event.preventDefault();
});
$(window).focusin(function(event){
    focusElement = event.target;
});
$(window).click(function(event){
    event.preventDefault();
    $(focusElement).focus();
});
