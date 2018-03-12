//Tables
var router = express.Router();
var User = models.tblusers;
//End of Tables


// Get User List
router.get('/GetAllUsers', function (req, res) {
    User.findAll().then(function (response) {
        res.json({ success: true, message: "Record found...", data: response });
    }).catch(function (error) {
        res.json({ success: false, message: "Record not found...", data: response });
    })
});

// Create New User 
router.post('/CreateUser', jsonParser, function (req, res) {
    objUser = req.body;
    if (objUser.id == '') {
        objUser.create_date = moment().format();
        objUser.status = 'A';
        User.findOrCreate({ where: { mobile_number: objUser.mobile_number }, defaults: objUser }).then(function (response) {
            if ((response[1])) {
                res.json({ success: true, message: "User created successfully..." });
            }
            else {
                res.json({ success: false, message: "User is already Exist...", data: response });
            }
        })
    } else {
        User.findOne({ where: { mobile_number: objUser.mobile_number }, defaults: objUser }).then(function (objUserExist) {
            if (objUserExist != null && objUser.id != objUserExist.id) {
                res.json({ success: false, message: "User is already Exist...", data: objUserExist });
            }
            else {
                objUser.update_date = moment().format();
                User.update(objUser, { where: { id: objUser.id } }).then(function (response) {
                    if (response[0]) {
                        res.json({ success: true, message: "User updated successfully..." });
                    }
                })
            }
        })

    }
});


// Delete User by Id
router.get('/DeleteUser', function (req, res) {
    User.destroy({ where: { id: req.query.id } }).then(function (response) {
        if (response) {
            res.json({ success: true, message: "User deleted successfully...", data: response });
        }
        else {
            res.json({ success: false, message: "Requested Record not Exist....", data: response });
        }
    })
});





module.exports = router
