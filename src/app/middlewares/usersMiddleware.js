const checkEmail = (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'No email field present!' });
  }

  return next();
};

const checkPassword = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ error: 'No password field present!' });
  }

  return next();
};

const checkNewPassword = (req, res, next) => {
  const { new_password } = req.body;

  if (!new_password) {
    return res.status(400).json({ error: 'No new_password field present!' });
  }

  return next();
};

module.exports = {
  checkEmail,
  checkPassword,
  checkNewPassword,
};
