const app = require("../../../server.js");
const database = require("../../utils/myDatabase.js");

const patchNewLetter = (req, res) => {
  let requestedId = parseInt(req.params.id);
  let bodyPatched = req.body;
  console.log("patchedBody", bodyPatched);

  let toBePatched = database.filter((item) => item.id === requestedId);
  database.push(req.body);

  const compareChange = {
    bodyPatched,
    toBePatched,
  };

  res.json({ compareChange });
};

module.exports = patchNewLetter;
