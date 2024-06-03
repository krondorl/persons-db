import { Phone } from "@/types/phone";
import { notEmpty } from "@/utils/not-empty";

interface PhoneDisplayProps {
  phone: Phone;
}

const PhoneDisplay = ({ phone }: PhoneDisplayProps) => {
  return (
    <div className="mb-2">
      <table>
        <tbody>
          <thead>
            <tr>
              <th className="text-left">
                <span className="text-4xl">📱</span>
              </th>
              <th></th>
            </tr>
          </thead>
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
