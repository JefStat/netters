var navigationList ={
    navigationItems: [
                        {name: 'Suggestions For You'},
                        {name: 'Recently Watched'},
                        {name: 'New Arrivals'},
                        {name: 'Instant Queue'}
                     ],
    selectedIndex: 0,
    hasFocus: true,
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
        $('li.navigationItem :nth(' + this.selectedIndex + ')').focus();
    }
}

var onFocusIn = function(eventObject){
    var p = eventObject.target.firstChild.cloneNode(true);
    p.setAttribute('id','navigationTitle');
    $("#navigationTitle").replaceWith(p);
};

var createNavigationListItem = function(index, value){
    $("#navigationList").append('<li tabindex="0" class="navigationItem"><a>' + value.name + '</a></li>');
};

var init = function(){
    $.each(navigationList.navigationItems,createNavigationListItem);
    $('li.navigationItem').focusin(onFocusIn);
    $('li.navigationItem').first().focus();
}();