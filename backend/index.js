const express = require('express');
const cors = require("cors");
const connectDB = require("./config/db");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const paypal = require('./paypal'); // Importamos el módulo de PayPal
const app = express();
const port = 5000;

const swaggerOptions = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Surftrip API",
        version: "1.0.0",
      },
      servers: [
        {
            url: "http://localhost:3000/api",
            description: "Local server"
        }
    ],
      components: {
        securitySchemes: {
          ApiKeyAuth: {
            type: "apiKey",
            in: "header",
            name: "x-auth-token",
          },
        },
      },
    },
    apis: ["./routes/*.js"],
  };

const swaggerDocs = swaggerJsDoc(swaggerOptions);  


require("dotenv").config();

let cart = [];

// Obtener productos del carrito
app.get('/cart', (req, res) => {
    res.status(200).json(cart);
});

// Agregar productos al carrito
app.post('/cart', (req, res) => {
  const { product } = req.body;
  cart.push(product);
  res.status(201).json(cart);
});

// PayPal
app.post ('/create-payment', async (rec,res)=>{
  const request = new paypal.orders.OrderCreateRequest();
  request.prefer("return=representation");
  request.body = {
      intent: 'CAPTURE',
      purchase_units: [
          {
              amount: {
                  currency_code: 'USD',
                  value: '100.00'
              }
          }
      ]
  };

try {
  const order = await paypal.client.execute(request);
  res.status(201).json(order.result);
  } catch (error){
      res.status(500).json({error: error.message});
  }
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

const routes = require("./routes");
app.use(process.env.URL_BASE + "/", routes);

connectDB();

app.listen(process.env.PORT || 3000, () => {
    console.log(`listen in port ${process.env.PORT}`);
});