
app = require("../../../server.js");
const database = require("../../utils/myDatabase.js");

const deleteNewLetter = (req, res) => {
  const requestedId = parseInt(req.params.id);
  const updatedDb = database.filter((item) => item.id !== requestedId);
  const itemToDelete = database.filter((item) => item.id === requestedId);

  const indexItem = database.indexOf(itemToDelete);

  if (updatedDb.length < database.length) {
    // database.pop(itemToDelete);
    database.splice(indexItem,1);
     const message = {
      success: true,
      message: "item was deleted",
    };
    res.json({itemToDelete,updatedDb,message });
  
  
  } else {
    res.json({ success: "false", message: "item not deleted" });
  }
};

module.exports = deleteNewLetter;
