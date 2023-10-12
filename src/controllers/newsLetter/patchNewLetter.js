// const app = require("../../../server.js");
// const database = require("../../utils/myDatabase.js");

export const patchNewLetter = (req, res) => {
  let requestedId = parseInt(req.params.id);
  // let bodyPatched = req.body;
  // console.log("patchedBody", bodyPatched);

  // let toBePatched = newsLetter.filter((item) => item.id === requestedId);
  if (requestedId) {
    newsLetter.findByIdAndUpdate(requestedId)
    newsLetter.create(req.body);
    res.json({ message: 'there is some change ' })
  } else {
    res.json({ message: "did not work as expected" });
  }



  // const compareChange = {
  //   bodyPatched,
  //   toBePatched,
  // };

  // res.json({ compareChange });
};

