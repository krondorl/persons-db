import { Address } from "@/types/address";
import { Base } from "@/types/base";
import { Phone } from "@/types/phone";
import { notEmpty } from "@/utils/not-empty";
import AddressTable from "../AddressTable";
import PhoneDisplay from "../PhoneDisplay";

interface PersonTableProps {
  base: Base;
  address: Address[];
  phone: Phone[];
}

const PersonTable = ({ base, address, phone }: PersonTableProps) => {
  return (
    <div className="mb-16">
      <table>
        <thead>
          <tr>
            <th className="text-left">
              <span className="text-4xl">🪪</span>
            </th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{notEmpty(base.name)}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Place of Birth</td>
            <td>{notEmpty(base.birthPlace)}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Date of Birth</td>
            <td>{notEmpty(base.birthDate)}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Mother&lsquo;s birth name</td>
            <td>{notEmpty(base.motherName)}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Social security number</td>
            <td>{notEmpty(base.socialSecNumber)}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Tax identifier</td>
            <td>{notEmpty(base.taxId)}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{notEmpty(base.email)}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      {address &&
        address.map((address) => (
          <AddressTable address={address}></AddressTable>
        ))}
      {phone &&
        phone.map((phone) => <PhoneDisplay phone={phone}></PhoneDisplay>)}
    </div>
  );
};

export default PersonTable;
