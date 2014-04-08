dialogLib = {showing:false};
dialogLib.showDialog = function (title, content) {
    var dialog = document.getElementById('dialogWindow');
    dialog.style.display = "block";
    var dialogTitle = document.getElementById('dialogTitle');
    dialogTitle.innerText = title;
    var dialogContent = document.getElementById('dialogContent');
    dialogContent.innerText = content;
    dialogLib.resizeDialog();
    dialogLib.showing = true;
};
dialogLib.closeDialog = function (event) {
    var dialog = document.getElementById('dialogWindow');
    dialog.style.display = "none";
    dialogLib.showing = false;
};
dialogLib.resizeDialog = function (clientW, clientH) {
    var dialogMasker = document.getElementById('dialogMasker');
    // dialogMasker.style.width = document.offsetWidth+"px";
    // dialogMasker.style.height = document.offsetHeight+"px";
    // dialogMasker.clientWidth = document.body.offsetWidth;
    // dialogMasker.clientHeight = document.body.offsetHeight;
    dialogMasker.style.width = document.body.scrollWidth;
    dialogMasker.style.height = document.body.scrollHeight;
    var s = "";
    s += " 网页可见区域宽："+ document.body.clientWidth;
    s += " 网页可见区域高："+ document.body.clientHeight;
    s += " 网页可见区域宽："+ document.body.offsetWidth + " (包括边线和滚动条的宽)";
    s += " 网页可见区域高："+ document.body.offsetHeight + " (包括边线的宽)";
    s += " 网页正文全文宽："+ document.body.scrollWidth;
    s += " 网页正文全文高："+ document.body.scrollHeight;
    s += " 网页被卷去的高(ff)："+ document.body.scrollTop;
    s += " 网页被卷去的高(ie)："+ document.documentElement.scrollTop;
    s += " 网页被卷去的左："+ document.body.scrollLeft;
    s += " 网页正文部分上："+ window.screenTop;
    s += " 网页正文部分左："+ window.screenLeft;
    s += " 屏幕分辨率的高："+ window.screen.height;
    s += " 屏幕分辨率的宽："+ window.screen.width;
    s += " 屏幕可用工作区高度："+ window.screen.availHeight;
    s += " 屏幕可用工作区宽度："+ window.screen.availWidth;
    s += " 你的屏幕设置是 "+ window.screen.colorDepth +" 位彩色";
    s += " 你的屏幕设置 "+ window.screen.deviceXDPI +" 像素/英寸";
    // alert (s);
};
dialogLib.onresize = function(xxx) {
    if(dialogLib.showing){
        dialogLib.resizeDialog();
    }
};

(function(){
    if(window.onresize){
        var oldfun = window.onresize;
        window.onresize = function () {
            dialogLib.onresize();
            oldfun();
        }
    }else{
        window.onresize = dialogLib.onresize;
    }
}());
