import jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';
import UserModel from '../models/user.model.js'

const client = new OAuth2Client("988836340451-pqpi4evnl7qut2h2b647p5rttkjrqbg0.apps.googleusercontent.com")

export const signin = (req, res) => {
    const { tokenId } = req.body;
    console.log('fe data --', tokenId)

    client.verifyIdToken({ idToken: tokenId, audience: "988836340451-pqpi4evnl7qut2h2b647p5rttkjrqbg0.apps.googleusercontent.com" }).then(response => {
        const { email_verified, name, email, picture } = response.payload;
        console.log('response.payload --', response.payload);

        if (email_verified) {
            UserModel.findOne({ email }).exec((err, user) => {
                if (err) {
                    return res.status(400).json({
                        error: "Something went wrong ..."
                    })
                } else {
                    if (user) {
                        const token = jwt.sign({ _id: user._id }, 'test', { expiresIn: "7d" });
                        const { _id, name, email, picture, isAdmin } = user;

                        res.json({
                            token,
                            user: { _id, name, email, picture, isAdmin }
                        })
                    } else {
                        let password = email;
                        let newUser


                        newUser = new UserModel({ name, email, password, picture });


                        newUser.save((err, data) => {
                            if (err) {
                                return res.status(400).json({
                                    error: "Something went wrong... in creating user"
                                })
                            }
                            const token = jwt.sign({ _id: data._id }, 'test', { expiresIn: "7d" });
                            const { _id, name, email, picture } = newUser;

                            // findUserById(refUserId)
                            // const user = User.findById(`61a710bd42a76cb6b0f82f15`);
                            console.log('gg',{ _id, name, email, picture })

                            res.json({
                                token,
                                user: { _id, name, email, picture }
                            })
                        })



                    }
                }
            })
        }
    })
}