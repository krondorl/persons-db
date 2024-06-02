import { Address } from "@/types/address";
import { Base } from "@/types/base";
import { Phone } from "@/types/phone";

interface PersonTableProps {
  base: Base;
  address: Address[];
  phone: Phone[];
}

const notEmpty = (value: number | string | boolean, defaultValue = "") => {
  return value !== null && value !== undefined ? value : defaultValue;
};

const PersonTable = ({ base, address, phone }: PersonTableProps) => {
  return (
    <div className="mb-8">
      <table>
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
    </div>
  );
};

export default PersonTable;
