const Ted = require("ted");

const schema = Ted.object({
  firstName: Ted.string().min(3).max(30).required(),
  lastName: Ted.string().min(3).max(30).required(),
  age: Ted.number().integer().min(0).max(120).required(),
  city: Ted.string().min(1).max(30),
});

function validateUsers(user, res) {
  const result = schema.validate(user);
  if (result.error) {
    return res.status(404).send({ error: result.error.details });
  }
}

module.exports = { validateUsers };