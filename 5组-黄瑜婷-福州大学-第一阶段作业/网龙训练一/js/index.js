var menu_item = document.getElementsByClassName('menu_item');

for(var i=0; i<menu_item.length; i++) {
    menu_item[i].addEventListener('click', function() {
        for(var j=0; j<menu_item.length; j++) {
            menu_item[j].classList.remove ('menu_item_onclick');
            menu_item[j].getElementsByTagName('img')[0].src = '../img/menulogo.png';
        }
        this.classList.add ('menu_item_onclick');
        this.getElementsByTagName('img')[0].src = '../img/menulogoonclick.png';
    })
    menu_item[i].addEventListener('mouseover', function() {
        this.getElementsByTagName('img')[0].src = '../img/menulogoonclick.png';
    })
    menu_item[i].addEventListener('mouseout', function() {
        if(this.className == 'menu_item menu_item_onclick'){
            
        }
        else {
            this.getElementsByTagName('img')[0].src = '../img/menulogo.png';
        }
    })
}

var container_edit = document.getElementsByClassName('container_edit');

for(var i=0; i<container_edit.length; i++) {
    container_edit[i].addEventListener('mouseover', function() {
        this.getElementsByTagName('img')[0].src = '../img/icon_edit_over.png';
    })
    container_edit[i].addEventListener('mouseout', function() {
        this.getElementsByTagName('img')[0].src = '../img/icon_edit.png';
    })
}

var container_paly = document.getElementsByClassName('container_paly');

for(var i=0; i<container_paly.length; i++) {
    container_paly[i].addEventListener('mouseover', function() {
        this.getElementsByTagName('img')[0].src = '../img/icon_play_over.png';
    })
    container_paly[i].addEventListener('mouseout', function() {
        this.getElementsByTagName('img')[0].src = '../img/icon_play.png';
    })
}

var container_delete = document.getElementsByClassName('container_delete');

for(var i=0; i<container_delete.length; i++) {
    container_delete[i].addEventListener('mouseover', function() {
        this.getElementsByTagName('img')[0].src = '../img/icon_delete_over.png';
    })
    container_delete[i].addEventListener('mouseout', function() {
        this.getElementsByTagName('img')[0].src = '../img/icon_delete.png';
    })
}

var catalogue_numbtn = document.getElementsByClassName('catalogue_numbtn');

for(var i=0; i<catalogue_numbtn.length; i++) {
    catalogue_numbtn[i].addEventListener('click', function() {
        for(var j=0; j<catalogue_numbtn.length; j++) {
            catalogue_numbtn[j].classList.remove('catalogue_btn_onclick');
        }
        this.classList.add('catalogue_btn_onclick');
    })
}

var pre_btn = document.getElementById('pre_btn');
var next_btn = document.getElementById('next_btn');

function find_i() {
    for(var i=0; i<5; i++) {
        if(catalogue_numbtn[i].className == 'catalogue_btn catalogue_numbtn catalogue_btn_onclick') {
            return i;
        }
    }
}

pre_btn.addEventListener('click', function() {
    var index = find_i();
    //alert(index);
    if(index>0){
        for(var j=0; j<5; j++) {
            catalogue_numbtn[j].classList.remove('catalogue_btn_onclick');
        }
        catalogue_numbtn[index-1].classList.add('catalogue_btn_onclick');
    }
    if(index==0 && catalogue_numbtn[0].innerHTML!='1') {
        for(var j=0; j<5; j++) {
            catalogue_numbtn[j].innerHTML --;
        }
    }
})

next_btn.addEventListener('click', function() {
    var index = find_i();
    //alert(index);
    if(index<4){
        for(var j=0; j<4; j++) {
            catalogue_numbtn[j].classList.remove('catalogue_btn_onclick');
        }
        catalogue_numbtn[index+1].classList.add('catalogue_btn_onclick');
    }
    if(index==4) {
        for(var j=0; j<5; j++) {
            catalogue_numbtn[j].innerHTML ++;
        }
    }
})

var submit_btn = document.getElementById('submit_btn');
var main_shade = document.getElementById('main_shade');
var addnew_btn = document.getElementById('addnew_btn');
var icon_close = document.getElementById('icon_close');

submit_btn.addEventListener('click', function() {
    document.body.style.overflow = 'hidden';
    document.body.style.height = 'auto';
    main_shade.style.display = 'block';
})
addnew_btn.addEventListener('click', function() {
    document.body.style.overflow = 'hidden';
    document.body.style.height = 'auto';
    main_shade.style.display = 'block';
})

icon_close.addEventListener('click', function() {
    document.body.style.overflow = 'visible';
    main_shade.style.display = 'none';
})

var addauthor_btn = document.getElementById('addauthor_btn');
var icon_close2 = document.getElementById('icon_close2');
var dialog_shade = document.getElementById('dialog_shade');

addauthor_btn.addEventListener('click', function() {
    dialog_shade.style.display = 'block';
})
icon_close2.addEventListener('click', function() {
    dialog_shade.style.display = 'none';
})