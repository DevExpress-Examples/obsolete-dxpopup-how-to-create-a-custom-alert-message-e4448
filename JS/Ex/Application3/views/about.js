CustomAlert.About = function (params) {
    var viewModel = {
        onClick: function (e) {
            app.ShowMyAlert('Popup title for About', 'Popup text for About');
        }
    };

    return viewModel;
};