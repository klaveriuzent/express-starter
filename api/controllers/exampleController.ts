import { Request, Response } from 'express';

export const getAllExamples = (req: Request, res: Response): void => {
  res.send('Get all examples');
};

export const getExampleById = (req: Request, res: Response): void => {
  const { id } = req.params;
  res.send(`Get example by ID ${id}`);
};

export const createExample = (req: Request, res: Response): void => {
  const { name } = req.body;
  res.send(`Create example with name ${name}`);
};

export const updateExample = (req: Request, res: Response): void => {
  const { id } = req.params;
  const { name } = req.body;
  res.send(`Update example with ID ${id} and name ${name}`);
};

export const deleteExample = (req: Request, res: Response): void => {
  const { id } = req.params;
  res.send(`Delete example with ID ${id}`);
};