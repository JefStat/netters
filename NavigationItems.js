var navigationList ={
    navigationItems: [
                        {name: 'Suggestions For You'},
                        {name: 'Recently Watched'},
                        {name: 'New Arrivals'},
                        {name: 'Instant Queue'}
                     ],
    selectedIndex: 0,
    hasFocus: true,
    setHasFocus: function(value) {
        if (value !== this.hasFocus){
            this.hasFocus = value;
            if (this.hasFocus){
                this.removeTransparencyCSSClass();
            }else {
                this.addTransparencyCSSClass();
            }
        }
    },
    addTransparencyCSSClass: function() {
        $("#navigationList li :nth(" + this.selectedIndex + ")")
            .addClass('semiTransparent');
    },
    removeTransparencyCSSClass: function() {
        $("#navigationList li.semiTransparent").removeClass('semiTransparent');
    },
    moveNextSelection: function(){
        if (this.selectedIndex !== this.navigationItems.length-1){
            this.selectedIndex++;
            this.focusSelectedIndex();
        }
        return this.selectedIndex;
    },
    movePreviousSelection: function(){
        if (this.selectedIndex !== 0){
            this.selectedIndex--;
            this.focusSelectedIndex();
        }
        return this.selectedIndex;
    },
    focusSelectedIndex: function(){
        $('#navigationList li :nth(' + this.selectedIndex + ')').focus();
    }
}

var onFocusIn = function(eventObject){
    var p = eventObject.target.firstChild.cloneNode(true);
    p.setAttribute('id','navigationTitle');
    $("#navigationTitle").replaceWith(p);
};

var createNavigationListItem = function(index, value){
    $("#navigationList").append('<li tabindex="0"><a>' + value.name + '</a></li>');
};

var init = function(){
    $.each(navigationList.navigationItems,createNavigationListItem);
    $('#navigationList li').focusin(onFocusIn);
    $('#navigationList li').first().focus();
}();