const swaggerOptions = {
  swaggerDefinition: {
      swagger: '2.0',
      info: {
          title: 'Example API',
          description: 'Ini adalah deskripsi dari API ini',
          version: '1.0.0'
      },
      basePath: '/',
      tags: [
          {
              name: 'Example',
              description: 'API for Example'
          }
      ],
      definitions: {
        Example: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            name: { type: 'string' },
            price: { type: 'number' }
          }
        }
      }
  },
  // NEED UPDATE IF YOU WANT MAKE ROUTE ON NEXT FOLDER LIKE -->> apis: ['./api/routes/**/*.ts']
  apis: ['./api/routes/*.ts'],
};

export default swaggerOptions;