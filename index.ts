import express, { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import dotenv from 'dotenv';
import swaggerOptions from './swaggerOptions';
import pool from './api/database/db';

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

pool.connect().then(() => {
  app.listen(port, host, () => {
    console.log(`Connected successfully on port http://${host}:${port}`);
  });
}).catch((err) => {
  console.error('Failed to connect to the database:\n\n', err, '\n');
});
