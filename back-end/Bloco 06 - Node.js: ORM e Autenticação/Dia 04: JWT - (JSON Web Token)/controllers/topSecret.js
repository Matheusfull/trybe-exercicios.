module.exports = (req, res) => {
  const { admin } = req.admin;

  if (admin === true) {
   return res.status(200).json({ secretInfo: 'Peter Parker é o Homem-Arannha' });
  } 
    return res.status(401).json({ message: 'Não é admin' });
};