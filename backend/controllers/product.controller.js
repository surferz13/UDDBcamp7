const Product = require('../models/product');

const findAll = async (req, res) => {
   try {
    const result = await Product.find({});
    res.json({ result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'error obteniendo los pack de Surftrip' });
  }
}

const findOne = async (req, res) => {
    try {
    const result = await Product.findById(req.params.id);
    res.json({ result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'error obteniendo el pack de Surftrip' });
  }
}

const create = async (req, res) => {
  try {
    const { id, name, description, price } = req.body;
    const result = await Product.create({ id, name, description, price });
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'error creando un pack de Surftrip' });
  }
}

const update = async (req, res) => {
  try {
    const { id, name, description, price } = req.body;
    const result = await Product.findByIdAndUpdate(req.params.id, { id, name, description, price }, { new:true });
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'error actualizando el pack de Surftrip' });
  }
}

const remove = async (req, res) => {
  try {
    const result = await Product.findByIdAndDelete(req.params.id);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'error borrando un pack de Surftrip' });
  }
}

module.exports = { create, update, remove, findAll, findOne };