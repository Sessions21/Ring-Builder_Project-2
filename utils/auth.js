const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    console.log("withAuth Ran")
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;