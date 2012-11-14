var focusElement;
var direction = {
    leftArrow: 37,
    upArrow: 38,
    rightArrow: 39,
    downArrow: 40,
    enterKey: 13
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

var contentAreaKeyDown = function(key, target){
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
        case direction.enterKey:
            alert($(target).children('img').first().attr('src'));
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
        contentAreaKeyDown(event.keyCode, event.target);
    }
});
$(window).keydown(function(event){
    //if not ctrl+shift+c (chrome debugger) disable other keys
    if (!(event.ctrlKey && event.shiftKey && event.keyCode === 67 )){
        event.preventDefault();
    }
});
$(window).focusin(function(event){
    focusElement = event.target;
});
$(window).click(function(event){
    event.preventDefault();
    $(focusElement).focus();
});
