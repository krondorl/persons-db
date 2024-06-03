import { expect, test } from "vitest";
import { processData } from "./process-data";
import { Person } from "@/types/person";
import { ListData } from "@/types/list-data";

test("process empty arrays in list data", () => {
  let listData: ListData = {
    baseinfo: [],
    address: [],
    phone: [],
  };
  let result: Person[] = [];
  expect(processData(listData)).toStrictEqual(result);
});
