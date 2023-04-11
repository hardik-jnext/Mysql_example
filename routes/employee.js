const express = require("express");
const router = express.Router();
const {getEmployee,postEmployee,updateEmployee,deleteEmployee} = require("../Controller/employeeController.js");

router.get("/get", getEmployee);
router.post("/post",postEmployee)
router.put("/put", updateEmployee);
router.delete("/delete",deleteEmployee)

module.exports = router;
