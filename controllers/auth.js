const User = require('../models/User');

const bcrypt = require('bcryptjs');


exports.getLoginPage = () => (req, res) => {
    res.render('auth/login', {
        activeLogin: true,
        isAuthenticated: req.session.user,
        formsCSS: true,
        authCSS: true
    });
};

exports.login = () => async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findOne({ email });

    if (!user) {
        return res.redirect('/login');  // todo validation
    }

    const areMatching = await bcrypt.compare(password, user.password);

    if (!areMatching) {
        return res.redirect('/login');  // todo validation
    }

    req.session.isLoggedIn = true;
    req.session.user = user;
    req.session.save();

    return res.redirect('/');  // todo validation
};


exports.getSignupPage = () => (req, res) => {
    res.render('auth/signup', {
        activeSignup: true,
        isAuthenticated: false,
        formsCSS: true,
        authCSS: true
    });
};

exports.signup = () => async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    const user = await User.findOne({ email });
    if (user) {
        return res.redirect('/signup');  // todo better validation
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
        email,
        password: hashedPassword,
        cart: {
            items: []
        }
    });

    await newUser.save();
    res.redirect('/login');

};


exports.logout = () => (req, res) => {
    req.session.destroy((err) => {
        err && console.log(err);
        res.redirect('/');
    });
};
