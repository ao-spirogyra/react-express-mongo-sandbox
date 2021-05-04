import { User } from '../models/User'

module.exports.create = (req, res) => {
  const user = new User({
    sub: '000000',
    name: req.body.name
  });
  user.save(function (err, user) {
    if (err) {
      return res.json({ error: err });
    }
    return res.json({ user: user });
  });
}