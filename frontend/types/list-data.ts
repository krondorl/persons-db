import { Address } from "./address";
import { Base } from "./base";
import { Phone } from "./phone";

export interface ListData {
  address: Address[];
  baseinfo: Base[];
  phone: Phone[];
}
