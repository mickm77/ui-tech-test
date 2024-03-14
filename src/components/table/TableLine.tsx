import { Person } from "../../types/People";

interface TableLineProps {
  person: Person;
}

const TableLine = ({ person }: TableLineProps) => {
  return (
    <tr>
      <td>{person.name}</td>
      <td>{person.dateOfBirth}</td>
      <td>{person.startDate}</td>
      <td>{person.active ? "Yes" : "No"}</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default TableLine;
