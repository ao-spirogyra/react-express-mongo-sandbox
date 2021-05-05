import { User } from '../models/User'

export const createUser = (req, res) => {
  const user = new User({
    sub: req.body.sub,
    name: req.body.name
  });
  user.save(function (err, user) {
    if (err) {
      return res.json({ error: err });
    }
    return res.json({ user: user });
  });
};

export const showAllUser = async (_req, res) => {
  const users = await User.find()
  return res.json({users: users})
};

export const deleteUser = async (req, res) => {
  const user = await User.findOne({_id: req.params.id})
  user?.deleteOne();
  return res.json({message: 'deleted sucessfully'})
};
