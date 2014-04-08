(function () {
imgboxlib = {}
var curIdx = -1;
var imgList = null;
var imgLen = 0;
var imgW = 853;
var imgboxW = 950;
var imgGap = 0;
var intervalHandler = 0;
var time = 0;
var moveStartList = null;
var moveLenList = null;

function selectItem (event) {
    var item = event.currentTarget;
    var idx = imgList.indexOf(item);
    if(idx != -1) {
        imgboxlib.select(idx);
    }
}

imgboxlib.init = function (imgboxElem, _curIdx) {
    var list = imgboxElem.getElementsByTagName("img");
    imgLen = list.length;
    if (0 == imgLen) {
        return;
    }
    imgList = [];
    for (var i = 0; i < imgLen; i++) {
        imgList[i] = list[i];
    };

    imgGap = (imgboxW - imgW) / (imgLen - 1);

    if(_curIdx >= imgLen || _curIdx < 0){
        _curIdx = 0;
    }
    imgboxlib.select(_curIdx);

    for (var i = 0; i < imgLen; i++) {
        imgList[i].onmouseover = selectItem;
    };
};

function moving () {
    time += 1/60;
    if(time >= 1){
        time = 1;
        clearInterval(intervalHandler);
        intervalHandler = 0;
    }
    for (var i = 0; i < imgLen; i++) {
        imgList[i].style.left = moveStartList[i] + time / 1 * moveLenList[i];
    }
}

imgboxlib.select = function (idx) {
    if (idx < 0 || idx >= imgLen){
        return;
    }
    moveStartList = [];
    moveLenList = [];
    for (var i = 0; i <= idx; i++) {
        moveStartList[i] = imgList[i].offsetLeft;
        moveLenList[i] = i* imgGap - moveStartList[i];
    }
    for (var i = idx + 1; i < imgLen; i++) {
        moveStartList[i] = imgList[i].offsetLeft;
        moveLenList[i] = imgboxW - (imgLen - i) * imgGap - moveStartList[i];
    }
    clearInterval(intervalHandler);
    time = 0;
    intervalHandler = setInterval(moving, 1/60.0);
};

}());
