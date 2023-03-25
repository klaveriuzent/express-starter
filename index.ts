import express, { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import dotenv from 'dotenv';
import swaggerOptions from './swaggerOptions';

const app: Application = express();
dotenv.config();
const host = process.env.HOST || 'localhost';
const port = parseInt(process.env.PORT || '3000', 10);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//FOR SWAGGER ONLY =========================================================
const specs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
//==========================================================================


//FOR API ONLY =============================================================
import exampleRoutes from './api/routes/exampleRoutes';
app.use('/api/example', exampleRoutes);
//==========================================================================

app.listen(port, host, () => {
  console.log(`Connected successfully on port http://${host}:${port}`);
  console.log(`Swagger already on port http://${host}:${port}/api-docs`);
});
