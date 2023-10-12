
// aconst database = require("../../utils/myDatabase.js");

export const deleteNewLetter = (req, res) => {
  let requestedId = parseInt(req.params.id);
  let updatedDb = database.filter((item) => item.id !== requestedId);
  let itemToDelete = database.filter((item) => item.id === requestedId);

  let indexItem = database.indexOf(itemToDelete);

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

