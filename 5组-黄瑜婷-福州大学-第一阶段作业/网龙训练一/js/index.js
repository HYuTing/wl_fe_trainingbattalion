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
var secondary_shade = document.getElementById('secondary_shade');
var addmember = document.getElementById('addmember');

addauthor_btn.addEventListener('click', function() {
    secondary_shade.style.display = 'block';
})
icon_close2.addEventListener('click', function() {
    secondary_shade.style.display = 'none';
})

function dragFunc(id) {
    var Drag = document.getElementById(id);
    Drag.onmousedown = function(event) {
        var ev = event || window.event;
        event.stopPropagation();
        var disX = ev.clientX - Drag.offsetLeft;
        var disY = ev.clientY - Drag.offsetTop;
        document.onmousemove = function(event) {
            var ev = event || window.event;
            Drag.style.left = ev.clientX - disX + 'px';
            Drag.style.top = ev.clientY - disY + 'px';
            Drag.style.cursor = 'move';
        };
    };
    Drag.onmouseup = function() {
        document.onmousemove = null;
        this.style.cursor = 'default';
    };
}

dragFunc("addmember");

var li_member_canchose = document.getElementsByClassName('li_member_canchose');

for(var i=0; i<li_member_canchose.length; i++) {
    li_member_canchose[i].addEventListener('click', function() {
        if(this.className == 'li_member_canchose') {
            this.className = 'li_member_canchose_onclick';
        }
        else {
            this.className = 'li_member_canchose';
            //alert(this.className);
        }
    })
}

var member_add_btn = document.getElementById('member_add_btn');
var member_delete_btn = document.getElementById('member_delete_btn');
var li_member_canchose_onclick = document.getElementsByClassName('li_member_canchose_onclick');
var ul_member_chosed = document.getElementById('ul_member_chosed');

member_add_btn.addEventListener('click', function() {
    //alert(li_member_canchose_onclick.length);
    ul_member_chosed.innerHTML = null;
    for(var i=0; i<li_member_canchose_onclick.length; i++) {
        if(li_member_canchose_onclick[i].className != 'li_member_canchose_onclick bechosed'){
        li_member_canchose_onclick[i].style.display = 'none';
        ul_member_chosed.innerHTML += '<li class="li_member_chosed">'+ li_member_canchose_onclick[i].innerHTML +'</li>';
        }
    }
    var li_member_chosed = document.getElementsByClassName('li_member_chosed');
    for(var i=0; i<li_member_chosed.length; i++) {
        li_member_chosed[i].addEventListener('click', function() {
            if(this.className != 'li_member_chosed todelete') {
                this.style.background = '#c3e5fa';
                this.classList.add('todelete');
            }
            else {
                this.style.background = '#fff';
                this.classList.remove('todelete');
            }

            // for(var j=0; j<li_member_chosed.length; j++) {
            //     console.log(li_member_chosed[j].className);
            // }
            // console.log('---');
        })
    }
})

member_delete_btn.addEventListener('click', function() {
    var li_member_chosed = document.getElementsByClassName('li_member_chosed');
    //alert(li_member_chosed.length);
    for(var i=0; i<li_member_chosed.length; i++) {
        if(li_member_chosed[i].className == 'li_member_chosed todelete') {
            li_member_canchose_onclick[i].classList.add('li_member_canchose');
        }
    }

    for(var j=0; j<li_member_chosed.length; j++) {
        //console.log(li_member_chosed[j].className);
        if(li_member_chosed[j].className == 'li_member_chosed todelete') {
            ul_member_chosed.removeChild(li_member_chosed[j]);
            j--;
        }
    }
    // console.log('还有');
    // console.log(li_member_chosed.length);
    // for(var j=0; j<li_member_chosed.length; j++) {
    //     console.log(li_member_chosed[j].innerHTML);
    // }
    // console.log('---');
    // alert(li_member_canchose.length);
    for(var j=0; j<li_member_canchose.length; j++) {
        //console.log(li_member_canchose[j].className);
        if(li_member_canchose[j].className == 'li_member_canchose_onclick li_member_canchose') {
            li_member_canchose[j].style.display = 'block';
            li_member_canchose[j].classList.remove('li_member_canchose_onclick');
        }
        //console.log(li_member_canchose[j].className);
    }
})

var member_icon_search = document.getElementById('member_icon_search');
var cannotfind = document.getElementsByClassName('cannotfind');
var member_search_input = document.getElementById('member_search_input');

member_icon_search.addEventListener('click', function() {
    var flag = 1;
    for(var i=0; i<li_member_canchose.length; i++) {
        //alert(member_search_input.value);
        //alert(i,li_member_canchose[i].innerHTML);
        if(li_member_canchose[i].innerHTML == member_search_input.value) {flag = 0;}
        else {li_member_canchose[i].style.display = 'none';}
    }
    if(flag) {cannotfind[0].style.display = 'block';}
})

document.onkeydown = function(e) {
    var keyNum = window.event ? e.keyCode : e.which;
    //alert(keyNum);
    if(keyNum == 8) {
        for(var i=0; i<li_member_canchose.length; i++) {
            li_member_canchose[i].style.display = 'block';
        }
        cannotfind[0].style.display = 'none';
    }
}

var classmember_check = document.getElementById('classmember_check');
var membercontainer = document.getElementById('membercontainer');

classmember_check.addEventListener('click', function() {
    var li_member_chosed = document.getElementsByClassName('li_member_chosed');
    // alert(li_member_chosed.length);
    // for(var j=0; j<li_member_chosed.length; j++) {
    //     console.log(li_member_chosed[j].innerHTML);
    // }
    //alert(li_member_chosed.length);
    for(var i=0; i<li_member_chosed.length; i++) {
        for(var j=0; j<li_member_canchose_onclick.length; j++) {
            if(li_member_canchose_onclick[j].className != 'li_member_canchose_onclick bechosed' && li_member_canchose_onclick[j].innerHTML == li_member_chosed[i].innerHTML) {
                //alert(li_member_canchose_onclick[i].className);
                membercontainer.innerHTML += '<li class="div_membercontainer"><span>'+ li_member_chosed[i].innerHTML +'</span><img src="../img/close.png" class="deletemember" name="'+ li_member_chosed[i].innerHTML +'"></li>';
                li_member_canchose_onclick[j].classList.add('bechosed');
            }
        }
    }
    secondary_shade.style.display = 'none';
    ul_member_chosed.innerHTML = null;

    // for(var j=0; j<li_member_chosed.length; j++) {
    //     console.log(li_member_chosed[j].innerHTML);
    // }
    // console.log('-------------');
    // for(var j=0; j<li_member_canchose_onclick.length; j++) {
    //     console.log(li_member_canchose_onclick[j].innerHTML);
    //     console.log(li_member_canchose_onclick[j].className);
    // }

    
    var deletemember = document.getElementsByClassName('deletemember');
    var div_membercontainer = document.getElementsByClassName('div_membercontainer');

    for(var j=0; j<div_membercontainer.length; j++) {
        console.log(div_membercontainer[j].innerHTML);
    }

    for(var i=0; i<deletemember.length; i++) {
        deletemember[i].addEventListener('click', function() {
            var index = this.name;
            var li_member_canchose_onclick = document.getElementsByClassName('li_member_canchose_onclick');

            for(var j=0; j<li_member_canchose_onclick.length; j++) {
                if(li_member_canchose_onclick[j].innerHTML == index) {
                    li_member_canchose_onclick[j].classList.remove('bechosed');
                    li_member_canchose_onclick[j].classList.add('li_member_canchose');
                    li_member_canchose_onclick[j].style.display = 'block';
                }
            }
            for(var j=0; j<li_member_canchose.length; j++) {
                if(li_member_canchose[j].className == 'li_member_canchose_onclick li_member_canchose') {
                    li_member_canchose[j].classList.remove('li_member_canchose_onclick');
                }
            }


            for(var j=0; j<div_membercontainer.length; j++) {
                //alert(div_membercontainer[j].getElementsByTagName('span')[0].innerHTML);
                if(div_membercontainer[j].getElementsByTagName('span')[0].innerHTML == index) {
                    membercontainer.removeChild(div_membercontainer[j]);
                }
            }

        })
    }
})

var div_imgupload = document.getElementById('div_imgupload');

div_imgupload.addEventListener('click', function() {
    var imgupload = document.getElementById('imgupload');
    var imgupload_link = document.getElementById('imgupload_link');

    imgupload_link.innerHTML = imgupload.value;

})

var worksubmit_btn = document.getElementById('worksubmit_btn');

worksubmit_btn.addEventListener('click', function() {
    document.body.style.overflow = 'visible';
    main_shade.style.display = 'none';
})

var header_tab = document.getElementById('header_tab');
var header_tab_item = header_tab.getElementsByTagName('li');

for(var i=0; i<header_tab_item.length; i++) {
    header_tab_item[i].addEventListener('click', function() {
        for(var j=0; j<header_tab_item.length; j++) {
            header_tab_item[j].classList.remove('header_tab_item_onclick');
        }
        this.classList.add('header_tab_item_onclick');
    })
}