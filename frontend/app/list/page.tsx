"use client";
import PersonTableList from "@/components/PersonTableList";
import { Address } from "@/types/address";
import { Base } from "@/types/base";
import { Person } from "@/types/person";
import { Phone } from "@/types/phone";
import { useCallback, useEffect, useState } from "react";

interface ListData {
  address: Address[];
  baseinfo: Base[];
  phone: Phone[];
}

function processData(listData: ListData): Person[] {
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

export default function List() {
  const [listData, setListData] = useState<ListData | null>(null);
  const [persons, setPersons] = useState<Person[]>([]);
  const getList = useCallback((): void => {
    fetch(`/api/list`)
      .then((res) => res.json())
      .then((data) => {
        setListData(data);
        const processedData = processData(data);
        setPersons(processedData);
      });
  }, []);

  useEffect(() => {
    getList();
  }, []);

  if (persons && persons.length > 0) {
    return (
      <main className="flex min-h-screen flex-col items-center p-24">
        <h1 className="font-bold text-4xl">List person</h1>
        <PersonTableList persons={persons}></PersonTableList>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="font-bold text-4xl">List person</h1>
      <div>Loading data...</div>
    </main>
  );
}
