// init
$(document).ready(function () {
    $("#AprilEditor").append(template).trigger("create");
});
var template =
    '<div id="dimmed"></div>' +
    '<div id="list_area"></div>' +
    '<div id="input_content">' +
      '<img src="/AprilEditor/assets/imgs/drawable/ic_editor_menu.svg">' +
    '</div>' +
    '<div id="input_how">' +
        '<img id="editor_txt" src="/AprilEditor/assets/imgs/drawable/ic_editor_text_big.svg">' +
        '<p class="div_line"></p>' +
        '<img id="editor_img" src="/AprilEditor/assets/imgs/drawable/ic_editor_img_big.svg">' +
        '<p class="div_line"></p>' +
        '<img id="editor_link" src="/AprilEditor/assets/imgs/drawable/ic_editor_link_big.svg">' +
    '</div>' +
    '<input id="img_input" type="file" multiple="multiple" accept="image/*">' +
    <!-- 텍스트 입력창 -->
    '<div id="editor_page" style="position: fixed; z-index: 999; top: 0; background: #f6f6f6; width: 100vw; height: 100%; display: none;">' +
        '<div style="background: white; height: 52px;">' +
            '<img id="backImg" src="/AprilEditor/assets/imgs/drawable/ic_back_blue.svg" style="width: 4%; height: 20px; margin-top: 16px; margin-left: 5%;">' +
        '</div>' +
        '<div id="text_area" contenteditable="true"></div>' +
        '<div id="text_style_controll">' +
            '<div class="data_normal">' +
                '<img id="font_color" class="black" src="/AprilEditor/assets/imgs/drawable/ic_editor_color_black.svg" style="padding-right: 20px;">' +
                '<img id="font_size" class="regular" src="/AprilEditor/assets/imgs/drawable/ic_editor_font_regular.svg" style="padding-right: 20px;">' +
                '<img id="font_bold" src="/AprilEditor/assets/imgs/drawable/ic_editor.svg" style="padding-right: 20px;">'+
            '</div>'+
            '<div class="data_color">'+
                '<img class="back" src="/AprilEditor/assets/imgs/drawable/ic_editor_back_copy_2.svg" style="padding-right: 5px;">'+
                '<img id="black" onclick="changeColor(\'black\')" src="/AprilEditor/assets/imgs/drawable/ic_editor_color_black.svg" style="padding-right: 5px;">' +
                '<img id="red" onclick="changeColor(\'red\')" src="/AprilEditor/assets/imgs/drawable/ic_editor_color_red.svg" style="padding-right: 5px;">' +
                '<img id="blue" onclick="changeColor(\'blue\')" src="/AprilEditor/assets/imgs/drawable/ic_editor_color_blue.svg" style="padding-right: 5px;"> ' +
            '</div>' +
            '<div class="data_textSize ds_no">' +
                '<img class="back" src="/AprilEditor/assets/imgs/drawable/ic_editor_back_copy_2.svg" style="padding-right: 5px;">' +
                '<img onclick="changeSize(\'small\')" src="/AprilEditor/assets/imgs/drawable/ic_editor_font_small_copy.svg" style="padding-right: 5px;">' +
                '<img onclick="changeSize(\'regular\')" src="/AprilEditor/assets/imgs/drawable/ic_editor_font_regular_copy.svg" style="padding-right: 5px;">' +
                '<img onclick="changeSize(\'big\')" src="/AprilEditor/assets/imgs/drawable/ic_editor_font_big_copy.svg" style="padding-right: 5px;">' +
            '</div>' +
            '<img src="/AprilEditor/assets/imgs/drawable/ic_editor_done_copy_3.svg" id="editor_success">' +
        '</div>' +
    '</div>' +
    <!-- 팝업 -->
    '<div id="popup_link">' +
        '<div class="popup_header">가져올 동영상이나 사이트의 주소</div>' +
    '   <div class="popup_content">' +
            '<input id="url_input" type="url" placeholder="https://"/>' +
        '</div>' +
        '<div class="controll_btns fs_0_8">' +
            '<span class="cancel mr_30">취소</span>' +
            '<span id="submit" class="mr_30">제출</span>' +
    '</div>';


// 텍스트 색상 변환
function textColorStatus() {
    var color = document.queryCommandValue('foreColor');
    var colorName = 'black';
    if (color == fontRgbRed) {
        colorName = 'red';
    } else if (color == fontRgbBlue) {
        colorName = 'blue';
    } else if (color == fontRgbBlack) {
        colorName = 'black';
    }
    console.log(colorName);
    $("#font_color").attr("src", "/AprilEditor/assets/imgs/drawable/ic_editor_color_" + colorName + ".svg");
}

// 텍스트 크기 변환
function textdSizeStatus() {
    var size = document.queryCommandValue('fontSize');
    var sizeName = 'regular';
    if (size == '5') {
        sizeName = 'big';
    } else if (size == '3') {
        sizeName = 'regular';
    } else if (size == '1') {
        sizeName = 'small';
    }
    $("#font_size").attr("src", "AprilEditor/assets/imgs/drawable/ic_editor_font_" + sizeName + "_copy.svg");
    $("#font_size").attr("class", size);
}

// 텍스트 볼드 변환
function selectedTextBoldStatus(select) {
    if (select.baseNode.parentNode.localName == 'b' || select.baseNode.parentNode.localName =='strong') {
        imgBoldToggle(true);
    } else if (select.baseNode.parentNode.parentNode.localName == 'b' || select.baseNode.parentNode.parentNode.localName =='strong') {
        imgBoldToggle(true);
    } else {
        imgBoldToggle(false);
    }
}
// 텍스트 볼드 이미지 변경
function imgBoldToggle(bold) {
    if (bold) {
        $("#font_bold").attr("src", "/AprilEditor/assets/imgs/drawable/ic_editor_bold.svg");
        $("#font_bold").addClass('bold');
    } else {
        $("#font_bold").attr("src", "/AprilEditor/assets/imgs/drawable/ic_editor.svg");
        $("#font_bold").removeClass('bold');
    }
}

// 칼라 이미지 변경
function changeColor(color) {
    $("#font_color").attr("src", "/AprilEditor/assets/imgs/drawable/ic_editor_color_" + color + ".svg");
    $(".data_normal").fadeIn();
    $(".data_color").fadeOut();

    var colorCode = fontColorBlack;
    if (color == 'red') {
        colorCode = fontColorRed;
    } else if (color == 'blue') {
        colorCode = fontColorBlue;
    } else if (color == 'black') {
        colorCode = fontColorBlack;
    }
    setFontColor(colorCode);
    focusIn();
}

// 사이즈 이미지 변경
function changeSize(size) {
    $("#font_size").attr("src", "/AprilEditor/assets/imgs/drawable/ic_editor_font_" + size + "_copy.svg");
    $("#font_size").attr("class", size);
    $(".data_normal").fadeIn();
    $(".data_textSize").fadeOut();

    var sizeCode = fontSizeRegular;
    if (size == 'big') {
        sizeCode = fontSizeBig;
    } else if (size == 'regular') {
        sizeCode = fontSizeRegular;
    } else if (size == 'small') {
        sizeCode = fontSizeSmall;
    }
    setFontSize(sizeCode);
    focusIn();
}

// 기본 이미지로 변경
function defaultMenuSetting() {
    $("#font_color").attr("src", "/AprilEditor/assets/imgs/drawable/ic_editor_color_black.svg");
    $("#font_size").attr("src", "/AprilEditor/assets/imgs/drawable/ic_editor_font_regular_copy.svg");
    $("#font_bold").attr("src", "/AprilEditor/assets/imgs/drawable/ic_editor.svg");
    $("#text_area").focus();
    setFontColor(fontColorBlack);
}

// 볼드체로 세팅
function setBold () {
    document.execCommand('bold');
}

// 입력받은 사이즈로 세팅
function setFontSize (size) {
    document.execCommand('fontSize', false, size);
}

// 입력받은 색으로 세팅
function setFontColor(color) {
    document.execCommand('foreColor', false, color);
}

// 입력창으로 포커스 인
function focusIn() {
    $("#text_area").focus();
}

// Main Menu Bar Controll Area Start!
$(document).on('click', '#input_content', function () {
    $("#input_how").fadeIn("fast");
});

$(document).on('click', '#editor_img', function() {
    $("#img_input").click();
});

// Text Controll Area Start!
// 작성 완료를 클릭했을 때
$(document).on("click", "#editor_success", function() {
    $("#text_area").contents().filter(function (e) {
        return $("#text_area").contents().eq(e).prop('tagName') != 'DIV';
    }).wrapAll("<div />");

    var text = $("#text_area").html();
    if (text.length == 0) {
        alert(textError);
        return;
    }
    $("#text_area").html('');
    $("#editor_page").fadeOut();

    if (post_index != '') {
        $(post_index).html(text);
        post_index = '';
        return;
    }
    insertText(text);
});

function insertText(text){
    var str =
        '<div class="list_item text_content" style="min-height: 40px;">' +
            '<div class="item">' +
                '<div class="post" style="width: calc(80% + 15px); display: inline-block; padding-bottom: 10px;">' + text + '</div>' +
                '<div class="selectBar" style="min-height: 40px;">'+
                    '<div style="text-align: center;position:relative; top: 50%;transform: translate(0%, -50%);">'+
                        '<img class="selectImg" src="/AprilEditor/assets/imgs/drawable/ic_drag.svg" style="position: relative;">'+
                    '</div>'+
                '</div>'+
                '<div class="both" style="clear: both;"></div>' +
            '</div>'+
            '<div class="item_delete" style="min-height: 40px; height: 100%;"><p style="position:relative; top: 50%;transform: translate(0%, -50%);">삭제</p></div>'+
            '<div class="delete_msg warm_grey_two">'+
                '<span>삭제됐습니다</span>'+
                '<img src="/AprilEditor/assets/imgs/drawable/ic_editor_redo.svg" class="delete_img">'+
            '</div>'+
        '</div>';
    $("#list_area").append(str).trigger('create');
    $('#list_area').sortable('refresh');
}
// 메뉴에 컬러를 클릭했을 때
$(document).on('click', "#font_color", function(e) {
    $(".data_normal").fadeOut();
    $(".data_color").fadeIn();
});

// 메뉴에 뒤로가기를 클릭했을 때
$(document).on('click', ".back", function() {
    $(".data_normal").fadeIn();
    $(".data_color").fadeOut();
    $(".data_textSize").fadeOut();
});

// 메뉴에 볼드를 클릭했을 때
$(document).on('click', "#font_bold", function() {
    if ($("#font_bold").hasClass("bold")) {
        imgBoldToggle(false);
    } else {
        imgBoldToggle(true);
    }
});

// 메뉴에 사이즈를 클릭했을 때
$(document).on("click", "#font_size", function() {
    $(".data_normal").fadeOut();
    $(".data_textSize").fadeIn();
});

// 에디터 노출
$(document).on('click', "#editor_txt", function() {
    $("#editor_page").fadeIn();
    defaultMenuSetting();
});

// 에디터 숨기고, 값 초기화
$(document).on("click", "#backImg", function() {
    $("#text_area").html('');
    $("#editor_page").fadeOut();
});

$(document).on('click', "#font_bold", function() {
    setBold();
    focusIn();
});

// 입력 창에서 나갔을 경우 메뉴바 하단으로 이동
$(document).on("blur", "#text_area", function() {
    $("#text_style_controll").stop().animate({bottom : "0px"});
});

// 메뉴바에서 스타일 변경 후 입력 창으로 포커스 인
$(document).on("click", "#text_style_controll", function() {
    focusIn();
});

// 입력 창에 포커스되면 메뉴바 떠오름
$(document).on("focus", "#text_area", function() {
    $("#text_style_controll").stop().animate({bottom : window.innerHeight * 0.3 + "px"});
});

// 선택한 텍스트 설정 변경
$(document).on('click keyDown', "#text_area", function(e) {
    //if (e.keyCode == 13) return;
    // 선택한 영역 가져오기
    var select = document.getSelection();
    selectedTextBoldStatus(select);
    textdSizeStatus();
    textColorStatus();
});

// 작성한 텍스트 수정
$(document).on("click", ".post", function(e) {
    post_index = e.target;
    $("#text_area").html(e.target.innerHTML);
    $("#editor_page").fadeIn();
});

$(document).ready(function () {
    var ele = document.querySelector("#text_area");
    if (ele) {
        ele.addEventListener("paste", function (e) {
            var pastedData = e.clipboardData || window.clipboardData;
            var textData = pastedData.getData("Text");
            var beforeData = $("#text_area").html();

            setTimeout(function () {
                e.stopPropagation();
                e.preventDefault();
                for (var i=0; i<e.srcElement.childElementCount; i++) {
                    if (e.srcElement.childNodes[i].className != null || e.srcElement.childNodes[i].className != "") {
                        $("#text_area").html('');
                        window.document.execCommand("insertHTML", false, beforeData + textData);
                        return;
                    }
                }
            },10);
        });
    }
});

// Text Controll Area End!


// Img Controll Area Start!
$(document).on('change', "#img_input", function() {
    var imgJosnArray = new Array();
    var files = this.files ? this.files : [];

    if (!files.length || !window.FileReader) return;

    for (var i = 0; i < files.length; i++) {
        if (/^image/.test(files[i].type)) {
            var imgJson = {
                "type": "image",
                "width": window.innerWidth * 0.245,
                "height": 90,
                "data": files[i]
            }
            imgJosnArray.push(imgJson);
        } else {
            alert(imgTypeError);
        }
    }
    $("#img_input").val('');

    var event = new CustomEvent("insertEditing", {detail: imgJosnArray});

    event.callback = {
        success: function (files) {
            for (var i = 0; i < files.length; i++) {
                insertImg(files[i]);
            }
        },
        failed: function () {
            throw new Error(serverLinkError);
        }
    };
    document.dispatchEvent(event);
});

function insertImg(file) {
    var str =
        '<div class="list_item img_content">' +
            '<div class="item">' +
                '<img class="user_img" src="' + file.data + '" data-width="' + file.width + '" data-height="' + file.height + '"/>' +
                '<div class="item_album">' +
                    '<p class="warm_grey_two">사진</p>' +
                '</div>' + htmlDelete;
    $("#list_area").append(str).trigger('create');
    $('#list_area').sortable('refresh');
}
// Img Controll Area End!


// link Controll Area Start!

$(document).on('click', '#editor_link', function () {
    $("#dimmed").fadeIn('fast');
    $("#popup_link").fadeIn('fast');
});

$(document).on('click', '.cancel', function () {
    $("#dimmed").fadeOut('fast');
    $("#popup_link").fadeOut('fast');
});

$(document).on('click', '#submit', function () {
    let url = $("#url_input").val();
    $("#url_input").val('');

    if (url.length == 0) {
        alert(urlInputError);
        return;
    }
    if (urlReg.test(url)) {
        $("#dimmed").fadeOut('fast');
        $("#popup_link").fadeOut('fast');

        let linkJson = {
            "type": "link",
            "data": url,
            "metadata": null
        };
        var event = new CustomEvent("insertEditing", {detail: linkJson});

        event.callback = {
            success: function (link) {
                insertLink(link);
            },
            failed: function () {
                throw new Error(serverImgError);
            }
        };
        document.dispatchEvent(event);
    } else {
        alert(urlErrorMsg);
    }
});

function insertLink(link) {
    var str = '';
    if (link.metadata.thumbnail != null) {
        str =
            '<div class="list_item link_content_yes">' +
                '<div class="item link">' +
                    '<input type="hidden" class="item_url" value="' + link.metadata.url + '">' +
                    '<img class="thumnail" src="' + link.metadata.thumbnail +'">' +
                    '<div class="item_img_video">'+
                        '<p class="video_title ">' + link.metadata.title + '</p>'+
                        '<p class="video_descript">' + link.metadata.description + '</p>'+
                        '<p class="video_link fs_0_8">' + link.metadata.site_name + '</p>'+
                    '</div>'+ htmlDelete;
    } else {
        str =
            '<div class="list_item link_content_no">'+
                '<div class="item link">'+
                    '<input type="hidden" class="item_url" value="' + link.metadata.url + '">' +
                    '<div class="item_text_area">'+
                        '<p class="video_title ">link.metadata.title</p>'+
                        '<p class="video_descript">link.metadata.description</p>'+
                        '<p class="video_link fs_0_8">link.metadata.site_name</p>'+
                    '</div>'+ htmlDelete;
    }
    $("#list_area").append(str).trigger('create');
    $('#list_area').sortable('refresh');
}
// link Controll Area End!

// consturct
AprilEditor = function(){

    var linkJsonObj = {
        "type": "link",
        "data": "",
        "metadata": {
            "title": "",
            "site_name": "",
            "description": "",
            "thumbnail": "",
            "url": ""
        }
    };
    var imgJsonObj = {
        "type": "image",
        "width": 0,
        "height": 0,
        "data": ""
    };
    var temObj = {};

    this.setItems = function (jsonArr) {
        for (var i=0; i<jsonArr.length; i++) {
            switch (jsonArr[i].type) {
                case "link":
                    insertLink(jsonArr[i]);
                    break;
                case "image":
                    insertImg(jsonArr[i]);
                    break;
                case "text":
                    var str = "<div>";
                    for (var j=0; j<jsonArr[i].data.length; j++) {
                        //console.log(jsonArr[i].data[j]);
                        if (jsonArr[i].data[j].text == "\n") {
                            str += "</div><div>";
                        } else {
                            var beforeSize = jsonArr[i].data[j].attr.size;
                            var size = -1;
                            if (beforeSize == 0) {
                                size = 1;
                            } else if (beforeSize == 1) {
                                size = 3;
                            } else {
                                size = 5;
                            }
                            var fontStart = "<font size='" + size + "' color='" + jsonArr[i].data[j].attr.color + "'>"
                            var fontEnd = "</font>";
                            var text = jsonArr[i].data[j].text;

                            if (jsonArr[i].data[j].attr.bold) {
                                str += "<b>" + fontStart + text + fontEnd + "</b>";
                            } else {
                                str += fontStart + text + fontEnd;
                            }
                        }
                    }
                    insertText(str + "</div>");
                    break;
            }
        }
    },

    this.getItems = function () {
        let length = $(".list_item").length;
        let jsonArr = new Array();

        for (var i=1; i<=length; i++) {
            var ref = $(".list_item:nth-child(" + i + ")");
            if (ref.find(".item").css('display') == 'none') continue;
            var className = ref.attr('class');

            switch (className) {
                case "list_item link_content_yes" :
                    linkJsonObj.data = ref.find(".item_url").val();
                    linkJsonObj.metadata.title = ref.find(".video_title").text();
                    linkJsonObj.metadata.site_name = ref.find(".video_link").text();
                    linkJsonObj.metadata.description = ref.find(".video_descript").text();
                    linkJsonObj.metadata.thumbnail = ref.find(".thumnail").attr("src");
                    linkJsonObj.metadata.url = ref.find(".item_url").val();
                    temObj = linkJsonObj;
                    break;
                case "list_item link_content_no" :
                    linkJsonObj.data = ref.find(".item_url").val();
                    linkJsonObj.metadata.title = ref.find(".video_title").text();
                    linkJsonObj.metadata.site_name = ref.find(".video_link").text();
                    linkJsonObj.metadata.description = ref.find(".video_descript").text();
                    linkJsonObj.metadata.thumbnail = "";
                    linkJsonObj.metadata.url = ref.find(".item_url").val();
                    temObj = linkJsonObj;
                    break;
                case "list_item text_content" :
                    var textJsonObj = {
                                        "type": "text",
                                        "data": []
                                        };
                    var post = ref.find(".post").children();
                    for (var j=0; j<post.length; j++) {
                        insertNode(post[j], textJsonObj, fontColorBlack, 1, false);

                        if (post.length != j-1) {
                            textJsonObj.data.push({ "text" : "\n" });
                        }
                    }
                    temObj = textJsonObj;
                    //console.log(textJsonObj);
                    break;
                case "list_item img_content" :
                    imgJsonObj.width = ref.find('.user_img').data('width');
                    imgJsonObj.height = ref.find('.user_img').data('height');
                    imgJsonObj.data = ref.find(".user_img").attr("src");
                    temObj = imgJsonObj;
                    break;
            }
            jsonArr.push(temObj);
        }
        return jsonArr;
    }
}

function insertNode(el, arr, color, size, boldState) {
    for (var g=0; g<=el.childNodes.length; g++) {
        var color = color;
        var size = size;
        var bold = boldState;
        var self = el.childNodes[g];

        if (self == undefined) return;

        //console.log(self.nodeName);
        switch (self.nodeName) {
            case "#text" :
                var text = { "text" : self.nodeValue };
                text.attr = {};
                text.attr.color = color;
                text.attr.size = size;
                text.attr.bold = bold;
                arr.data.push(text);
                break;
            case "FONT" :
                color = self.color;
                if (color == "" || color == undefined || color == null) {
                    color = fontColorBlack;
                }
                //console.log(self.size);
                if (self.size == 5) {
                    size = 2;
                } else if (self.size == 1) {
                    size = 0;
                } else {
                    size = 1;
                }
                if (self.childElementCount != 0) {
                    insertNode(self, arr, color, size, bold);
                } else {
                    if (self.firstChild.nodeType == Node.TEXT_NODE) {
                        var text = { "text" : self.firstChild.nodeValue };
                        text.attr = {};
                        text.attr.color = color;
                        text.attr.size = size;
                        text.attr.bold = bold;
                       arr.data.push(text);
                    } else if (self.lastChild.nodeType == Node.TEXT_NODE) {
                        var text = { "text" : self.lastChild.nodeValue };
                        text.attr = {};
                        text.attr.color = color;
                        text.attr.size = size;
                        text.attr.bold = bold;
                        arr.data.push(text);
                    }
                }
                break;
            case "B" :
                if (self.childElementCount != 0) {
                    insertNode(self, arr , color, size, true);
                } else if (self.firstChild.nodeType == Node.TEXT_NODE) {
                    var text = { "text" : self.firstChild.nodeValue };
                    text.attr = {};
                    text.attr.color = color;
                    text.attr.size = size;
                    text.attr.bold = true;
                    arr.data.push(text);
                }
                break;
            default :
                break;
        }
    }
}

const htmlDelete =
            '<div class="selectBar">'+
                '<div style="text-align: center; line-height: 6">'+
                    '<img class="selectImg" src="/AprilEditor/assets/imgs/drawable/ic_drag.svg" style="position: relative;">'+
                '</div>'+
            '</div>'+
    '<div class="both" style="clear: both;"></div>' +
        '</div>'+
        '<div class="item_delete"><p style="line-height: 6;">삭제</p></div>'+
        '<div class="delete_msg warm_grey_two">'+
            '<span>삭제됐습니다</span>'+
            '<img src="/AprilEditor/assets/imgs/drawable/ic_editor_redo.svg" class="delete_img">'+
        '</div>'+
    '</div>';

$(document).on('click', '.item_delete', function () {
    $(this).parent().children(':eq(0),:eq(1),:eq(2)').fadeToggle('fast');
});

$(document).on('click', '.delete_img', function (e) {
    $(this).parent().parent().children(':eq(0),:eq(1),:eq(2)').fadeToggle('fast');
    $(this).parent().parent().children(':eq(0)').animate({ right:0 });
});

$(function() {
    $('#list_area').sortable({
        //placeholder:"itemBox",
        scroll: false,
        handle: ".selectImg"
    });
    $('#list_area').disableSelection();

    // 터치 제스처 이벤트
    var myElement = document.getElementById('list_area');
    var mc = new Hammer(myElement);

    // 왼쪽으로 잡아 당기었을 때
    mc.on("panleft", function (ev) {
        // 최대로 이동할 수 있는 거리
        var maxRigth = window.innerWidth * 2 / 10 - 15;
        panControll(ev, maxRigth, 'left');
    });

// 오른쪽으로 잡아 당기었을 때
    mc.on("panright", function (ev) {
        panControll(ev, 0, 'right');
    });

// 손을 놓았을 때
    mc.on("panend", function() {
        var right = one.css('right').replace("px","");
        var limit = window.innerWidth * 2 / 10 - 15;
        if (right < limit/2) {
            one.animate({ right : "0px" });
        } else {
            one.animate({ right : limit + "px" });
        }
    });
});

function panControll (ev, limit, direction) {

    if ($(ev.target).parent().attr('class') == 'selectBar') return;
    var target = $(ev.target).parent().parent().attr('class');
    var item =  $(ev.target).parent().parent();

    if (target !== 'item' && target !== 'item link') {
        item = item.children(":eq(0)");
        target = item.attr('class');
    }
    one = item;
    if (target === 'item' || target === 'item link') {
        var right = item.css('right').replace("px","");

        // 제한에 도달할 경우 리턴
        if (right == limit) return;
        // 방향 판별
        if (direction == 'left') {
            var moveX = ev.distance;

            // 아래에서 위로 스크롤할 때 넘치는 오류 수정
            if (ev.srcEvent.y == 0) return;

            // 최대 이동 거리 제한
            if (limit > right) {
                item.css('right', moveX);
            } else {
                item.css('right', limit);
            }
        } else if (direction == 'right') {
            if (limit <= (right - ev.velocityX * 10)){
                item.css('right', right - ev.velocityX * 10);
            } else {
                item.css('right', limit);
            }
        }
    }
}
