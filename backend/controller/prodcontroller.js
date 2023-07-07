exports.getProduct = (req, res) => {
  console.log(req.url);
  //   res.send({ message: "this is your Home page" });
  res.status(200).send({ message: "this is your Home page" });
};
