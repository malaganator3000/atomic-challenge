import { createLogicMiddleware } from 'redux-logic';
import { fgetNamesLogic } from './getNames';
import { sendFormLogic } from './sendform';

const logicMiddleware = (deps) =>
  createLogicMiddleware([fgetNamesLogic, sendFormLogic], deps);

export default logicMiddleware;
