import { createLogicMiddleware } from 'redux-logic';
import { fgetNamesLogic } from './getNames';

const logicMiddleware = (deps) => createLogicMiddleware([fgetNamesLogic], deps);

export default logicMiddleware;
