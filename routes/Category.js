const express= require ("express")
const router = express.Router();
const {createCategory,getAllCategory,deleteCategory,updateCategory,getCategorybysearch} = require("../controllers/Category");

router.post('/add-category',createCategory);
router.get('/get-category',getAllCategory);
router.delete('/delete-category/:id',deleteCategory);
router.put('/update-category/:id',updateCategory);
router.post('/get-categorysearch',getCategorybysearch);

module.exports = router;