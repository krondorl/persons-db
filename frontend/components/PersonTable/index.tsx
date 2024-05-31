import { Address } from "@/types/address";
import { Base } from "@/types/base";
import { Phone } from "@/types/phone";

interface PersonTableProps {
  base: Base;
  address: Address[];
  phone: Phone[];
}

const PersonTable = ({ base, address, phone }: PersonTableProps) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Place of Birth</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Date of Birth</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Mother&lsquo;s birth name</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Social security number</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Tax identifier</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Email</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PersonTable;
