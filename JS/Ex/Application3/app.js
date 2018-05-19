window.CustomAlert = window.CustomAlert || {};

$(function() {
    app = new DevExpress.framework.html.HtmlApplication({
        ns: CustomAlert,
        viewPortNode: document.getElementById("viewPort"),
        defaultLayout: CustomAlert.config.defaultLayout,
        navigation: CustomAlert.config.navigation
    });
    app.router.register(":view/:id", { view: "Index", id: undefined });

    app.ShowMyAlert = function (popupTitle, popupText) {
        var popupElement = $('<div id="myPopup"></div>')
            .appendTo('#viewPort')
            .load('PopupContent.html', function (responseText, textStatus, XMLHttpRequest) {
                popupElement.find('#popupTitle').text(popupTitle);
                popupElement.find('#popupText').text(popupText);
                popupElement.dxPopup({
                    width: 300,
                    height: 200
                })
                .data('dxPopup')
                .show();
            });
    }
    app.HideMyAlert = function () {
        var popupElement = $('#myPopup');
        popupElement.data('dxPopup').hide().done(function () {
            popupElement.remove();
        });
    }
});
