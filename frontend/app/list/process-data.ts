import { Address } from "@/types/address";
import { ListData } from "@/types/list-data";
import { Person } from "@/types/person";
import { Phone } from "@/types/phone";

export function processData(listData: ListData): Person[] {
  if (listData && listData?.address && listData?.baseinfo && listData?.phone) {
    let persons: Person[] = [];
    for (const baseInfoItem of listData.baseinfo) {
      const foundAddresses = listData.address.filter(
        (address: Address) => address.userId === baseInfoItem.userId
      );
      const foundPhones = listData.phone.filter(
        (phone: Phone) => phone.userId === baseInfoItem.userId
      );

      persons.push({
        baseinfo: baseInfoItem,
        addresses: foundAddresses,
        phones: foundPhones,
      });
    }
    return persons;
  } else {
    return [];
  }
}
