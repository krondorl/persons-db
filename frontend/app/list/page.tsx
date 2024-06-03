"use client";
import PersonTableList from "@/components/PersonTableList";
import { ListData } from "@/types/list-data";
import { Person } from "@/types/person";
import { useCallback, useEffect, useState } from "react";
import { processData } from "./process-data";

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
