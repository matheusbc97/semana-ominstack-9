const User = require('../models/User')

// index, store, show, update, destroy

module.exports = {
    async store(req, res){
        const { email } = req.body;

        let user = await User.findOne({ email })

        if(!user){
            user = User.create({ email })
        }

        return res.json(user)
    }
};