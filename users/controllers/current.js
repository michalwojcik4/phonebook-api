const current = async (req, res, next) => {
  try {
    const user = req.user;

    if (user.token === null) {
      return res.status(401).json({ message: "Not authorized" });
    }

    return res
      .status(200)
      .json({ email: user.email, subscription: user.subscription });
  } catch (error) {
    next(error);
  }
};

export { current };
