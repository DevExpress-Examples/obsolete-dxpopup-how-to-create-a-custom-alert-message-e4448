CustomAlert.Index = function (params) {
    var viewModel = {
        onClick: function (e) {
            app.ShowMyAlert('Popup title for Index', 'Popup text for Index');
        }
    };
     
    return viewModel;
};