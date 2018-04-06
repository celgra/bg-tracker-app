import { Router } from 'express';
import _ from 'lodash';
import User from './../models/user';
import { authenticate } from './../middleware/authenticate';

const router = Router();

router.post('/', (req, res) => {
    console.log('posting user')
   let body = _.pick(req.body, ['email', 'password']);
   let user = new User(body);
   
   user.save().then((user) => {
       return user.generateAuthToken();
   }).then((token) => {
       debugger
       res.header('x-auth', token).send(user);
   }).catch((e) => {
       debugger
       res.status(400).send(e);
   })
});

router.get('/me', authenticate, (req, res) => {
    res.send(req.user);
});

router.post('/login', (req, res) => {
    let body = _.pick(req.body, ['email', 'password']);
    
    User.findByCredentials(body.email, body.password).then((user) => {
            user.generateAuthToken().then((token) => {
                res.header('x-auth', token).send(user);
            })
        }).catch((e) => {
            res.status(400).send(e);
        });
});

router.delete('/me/token', authenticate, (req, res) => {
    req.user.removeToken(req.token).then(() => {
        res.status(200).send();
    }, () => {
        res.status(400).send();
    });
});

export default router;