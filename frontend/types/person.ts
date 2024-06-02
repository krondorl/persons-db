import { Address } from "./address";
import { Base } from "./base";
import { Phone } from "./phone";

export interface Person {
  baseinfo: Base;
  addresses: Address[];
  phones: Phone[];
}
