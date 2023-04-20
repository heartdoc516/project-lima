export default async function (req, res) {
  res.clearCookie("token");

  res.status(200).send("successfuly logged out");
}
