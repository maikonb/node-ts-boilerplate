import { Container } from "typescript-ioc";
import { config } from '../../common/container/ioc.config';



export function init() {
  Container.configure(...config);
}

