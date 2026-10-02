const express = require("express");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(
    session({
        secret: "blog-secret",
        resave: false,
        saveUninitialized: false
    })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password"
        },
        (email, password, done) => {

            if (email === "admin@gmail.com" && password === "12345") {
                return done(null, {
                    email: email
                });
            }

            return done(null, false);
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user.email);
});

passport.deserializeUser((email, done) => {
    done(null, {
        email: email
    });
});
app.get("/login", (req, res) => {
    res.render("login", {
        error: null
    });
});
app.post(
    "/login",
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login"
    })
);

app.get("/", (req, res) => {

    if (!req.isAuthenticated()) {
        return res.redirect("/login");
    }

    res.render("index", {
        user: req.user.email
    });
});

app.get("/logout", (req, res, next) => {

    req.logout((err) => {

        if (err) {
            return next(err);
        }

        res.redirect("/login");
    });
});


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});