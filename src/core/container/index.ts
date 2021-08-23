import { Container } from "typescript-ioc";
import { config } from '../../modules/common/container/ioc.config';



export function init() {
  Container.configure(...config);
}

