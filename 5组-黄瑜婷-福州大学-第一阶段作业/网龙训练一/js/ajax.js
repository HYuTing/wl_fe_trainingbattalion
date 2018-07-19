    var xhr = null;
    if(window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }
    else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.open('GET', '../data.json', true);
    xhr.onreadystatechange=function () {
        if (  xhr.status == 200 && xhr.readyState == 4) {
            var res = xhr.responseText;
            res = JSON.parse(res);
            console.log(res);

            var menu = document.getElementById('menu');

            //alert(res.data.length);
            /* 侧边菜单栏的获取和切换样式 */
            for(var i=0; i<res.data.length; i++) {
                menu.innerHTML += '<li class="menu_item"><img class="menu_item_logo" src="../img/menulogo.png"><span>'+ res.data[i].course +'</span></li>';
            }

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


            /* 第一次进入界面时资源获取 */
            var courseNum = new Array();
            var tote = 0, page = 1;

            for(var i=0; i<res.data.length; i++) {
                courseNum[i] = res.data[i].resource.length;
                tote += courseNum[i];
            }

            var container_resource = document.getElementById('container_resource');

            var container_resource_items = document.getElementsByClassName('container_resource_items');

            var resource_img = document.getElementsByClassName('resource_img');
            var members = document.getElementsByClassName('members');
            var time = document.getElementsByClassName('time');
            var img_value = document.getElementsByClassName('img_value');
            var resource_name = document.getElementsByClassName('resource_name');

            //tote = 6;
            function firsload(num, courseid) {
                //初始化
                for(var i=0; i<8; i++) {
                    container_resource_items[i].style.display = 'block';
                }
            
                if(num > 0) {
                    document.getElementById('div_noresource').style.display = 'none';
                    container_resource.style.display = 'flex';
                    document.getElementById('container_catalogue').style.display = 'block';
                }
                else {
                    document.getElementById('div_noresource').style.display = 'block';
                    container_resource.style.display = 'none';
                    document.getElementById('container_catalogue').style.display = 'none';
                }
                //开始交互
                if(num>0 && num<=8) {
                    for(var i=num; i<8; i++) {
                        container_resource_items[i].style.display = 'none';
                    }
                }
                
                //表示显示全部课程
                if(courseid==-1) {
                    for(var i=0, k=0; i<res.data.length; i++) {
                        for(var j=0; j<res.data[i].resource.length; j++, k++){
                            if(k==8) {break;}
                //container_resource.innerHTML += '<div class="container_resource_items"><div class="container_resource_img"><img src="'+ res.data[i].resource[j].img +'" class="resource_img"><div class="container_shade"><img src="../img/friend.png" class="icon_friend"><span class="members">'+ res.data[i].resource[j].authors +'</span><span class="time">'+ res.data[i].resource[j].date +'</span></div><div class="resource_items_icon_container container_edit"><img src="../img/icon_edit.png" class="resource_items_icon"><p>编辑</p></div><div class="resource_items_icon_container container_paly"><img src="../img/icon_play.png" class="resource_items_icon icon_play"><p>播放</p></div><div class="resource_items_icon_container container_delete"><img src="../img/icon_delete.png" class="resource_items_icon"><p>删除</p></div><div class="youcannotseeme"><div class="img_value"><p>'+ res.data[i].resource[j].authors +'</p></div></div></div><p class="resource_name">'+ res.data[i].resource[j].title +'</p></div>';
                            resource_img[k].src = res.data[i].resource[j].img;
                            members[k].innerHTML = res.data[i].resource[j].authors;
                            time[k].innerHTML = res.data[i].resource[j].date;
                            img_value[k].innerHTML = res.data[i].resource[j].authors;
                            resource_name[k].innerHTML = res.data[i].resource[j].title;
                        }
                        if(k==8) {break;}
                    }
                }
                else {
                    console.log(res.data[courseid].course);
                    for(var j=0, k=0; j<res.data[courseid].resource.length; j++, k++){
                        if(k==8) {break;}
                        resource_img[k].src = res.data[courseid].resource[j].img;
                        members[k].innerHTML = res.data[courseid].resource[j].authors;
                        time[k].innerHTML = res.data[courseid].resource[j].date;
                        img_value[k].innerHTML = res.data[courseid].resource[j].authors;
                        resource_name[k].innerHTML = res.data[courseid].resource[j].title;
                    }
                }

            }

            firsload(tote, -1);


            /* 侧边栏菜单切换功能 */

            var menu_item_onclick = document.getElementsByClassName('menu_item_onclick');

            menu_item[0].addEventListener('click', function() {
                firsload(tote, -1);
            })
            for(var i=1; i<menu_item.length; i++) {
                menu_item[i].addEventListener('click', function() {
                    var index;
                    //alert(menu_item_onclick[0].innerHTML);
                    for(var j=1; j<menu_item.length; j++) {
                        if(menu_item[j].className == 'menu_item menu_item_onclick') {
                            index = j-1;
                        }
                    }

                    //alert('这里是'+res.data[index].resource.length+','+index);
                    firsload(res.data[index].resource.length, index);

                })
            }
        }
    }
    xhr.send();

    // $.ajax({
    //     url: '../data.json',
    //     type: 'GET',
    //     data: {},
    //     success: function(res) {
    //         console.log(res);
    //     },
    //     error: function() {
    //         alert('no');
    //     }
    // })
