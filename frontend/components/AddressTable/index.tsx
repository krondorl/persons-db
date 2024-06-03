import { Address } from "@/types/address";
import { notEmpty } from "@/utils/not-empty";

interface AddressProps {
  address: Address;
}

const AddressTable = ({ address }: AddressProps) => {
  return (
    <div className="mb-8">
      <table>
        <tbody>
          <tr>
            <td>Postal Code</td>
            <td>{notEmpty(address.postalCode)}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{notEmpty(address.city)}</td>
          </tr>
          <tr>
            <td>Street</td>
            <td>{notEmpty(address.street)}</td>
          </tr>
          <tr>
            <td>House number</td>
            <td>{notEmpty(address.houseNumber)}</td>
          </tr>
          <tr>
            <td>Floor</td>
            <td>{notEmpty(address.floor)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AddressTable;
