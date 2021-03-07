import { Container } from "typescript-ioc";
import  config  from "./ioc.config";


export function init() {
  Container.configure(...config);
}

