import { useQuery } from "@tanstack/react-query";
import { fetchPeople } from "../../api/person";
import Table from "../../components/table/Table";
import { DefaultTableDef, peopleTableDef } from "../../resources/tableDef";

const Home = () => {
  const columns: DefaultTableDef[] = [
    peopleTableDef.name,
    peopleTableDef.dateOfBirth,
    peopleTableDef.startDate,
    peopleTableDef.active,
    {
      type: "string",
      label: "Actions",
      field: "actions",
      sortable: false,
      filterable: false,
      cellRenderer: () => {
        return (
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        );
      },
    },
  ];

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["people"],
    queryFn: fetchPeople,
  });

  return (
    <Table
      data={data}
      isLoading={isLoading}
      isFetching={isFetching}
      columns={columns}
    />
  );
};

export default Home;
