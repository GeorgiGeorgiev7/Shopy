module.exports = () => (req, res) => {
    res
        .status(404)
        .render('404', {
            isAuthenticated: req.session.user,
            pageTitle: 'Page Not Found',
            message: 'Wrong path'
        });
};
