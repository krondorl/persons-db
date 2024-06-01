import { NextResponse } from "next/server";

const apiUrl = process.env.API_URL;
const baseInfoUrl = `${apiUrl}/base-info`;
const addressUrl = `${apiUrl}/address`;
const phoneUrl = `${apiUrl}/phone`;

async function fetchAll() {
  try {
    const [response1, response2, response3] = await Promise.all([
      fetch(baseInfoUrl),
      fetch(addressUrl),
      fetch(phoneUrl),
    ]);

    if (!response1.ok || !response2.ok || !response3.ok) {
      throw new Error("One or more requests failed");
    }

    // Parse the JSON from each response
    const baseData = await response1.json();
    const addressData = await response2.json();
    const phoneData = await response3.json();

    const aggregatedResult = {
      baseinfo: baseData,
      address: addressData,
      phone: phoneData,
    };

    return aggregatedResult;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function GET() {
  try {
    const allData = await fetchAll();
    return NextResponse.json(allData);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return NextResponse.json({ error: "Failed to fetch list data" });
  }
}
