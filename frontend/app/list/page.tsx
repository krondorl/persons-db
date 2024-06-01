"use client";
import { useCallback, useEffect } from "react";

export default function List() {
  const getList = useCallback((): void => {
    fetch(`/api/list`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  useEffect(() => {
    getList();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-bold text-4xl">List person</h1>
    </main>
  );
}
