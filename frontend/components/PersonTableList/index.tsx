import { Person } from "@/types/person";
import PersonTable from "../PersonTable";

interface PersonTableListProps {
  persons: Person[];
}

const PersonTableList = ({ persons }: PersonTableListProps) => {
  return (
    <div>
      {persons.map((person) => (
        <PersonTable
          base={person.baseinfo}
          address={person.addresses}
          phone={person.phones}
        ></PersonTable>
      ))}
    </div>
  );
};

export default PersonTableList;
