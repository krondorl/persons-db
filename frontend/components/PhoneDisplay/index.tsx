import { Phone } from "@/types/phone";
import { notEmpty } from "@/utils/not-empty";

interface PhoneDisplayProps {
  phone: Phone;
}

const PhoneDisplay = ({ phone }: PhoneDisplayProps) => {
  return (
    <div className="mb-8">
      <table>
        <tbody>
          <tr>
            <td>Phone Number</td>
            <td>{notEmpty(phone.phoneNumber)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PhoneDisplay;
