
(function(){
    dialogLib = {};
    var dialog = null;
    var dialogTitle = null;
    var dialogContent = null;

    function closeDialog (event) {
        dialog.style.display = "none";
    };
    dialogLib.showDialog = function (title, content) {
        dialog.style.display = "block";
        dialogTitle.innerText = title;
        dialogContent.innerText = content;
    };
    dialogLib.init = function (dialogElem) {
        dialog = dialogElem;
        var closeBtn = getElementByClassName("closeBtn", dialogElem);
        closeBtn.onclick = closeDialog;
        dialogTitle = getElementByClassName("title", dialogElem);
        dialogContent = getElementByClassName("msgbox", dialogElem);
    }
})();
