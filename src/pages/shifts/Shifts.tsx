import { useQuery } from "@tanstack/react-query";
import { fetchShifts } from "../../api/shifts";
import Table from "../../components/table/Table";
import { fetchPeople } from "../../api/person";
import { useEffect, useState } from "react";

const Shifts = () => {
  const [dataWithNames, setDataWithNames] = useState([] as any[]);
  const {
    data,
    isLoading: loadingShifts,
    isFetching: fetchingShifts,
  } = useQuery({
    queryKey: ["shifts"],
    queryFn: fetchShifts,
  });

  const {
    data: people,
    isLoading: loadingPeople,
    isFetching: fetchingPeople,
  } = useQuery({
    queryKey: ["people"],
    queryFn: fetchPeople,
  });

  useEffect(() => {
    if (people && data) {
      //in each shift we have a personId, we need to use that to set a name in the shift
      const newData = data.map((shift: any) => {
        const person = people.find(
          (person: any) => person.id === shift.PersonId
        );
        return {
          ...shift,
          Name: person?.name,
        };
      });
      console.log(people);
      setDataWithNames(newData);
    }
  }, [people, data]);
  return (
    <div>
      <Table
        data={dataWithNames}
        isLoading={loadingPeople || fetchingPeople}
        isFetching={loadingShifts || fetchingShifts}
        columns={[
          {
            type: "string",
            label: "Location",
            field: "Location",
            sortable: true,
            filterable: true,
          },
          {
            type: "string",
            label: "Start",
            field: "Start",
            sortable: true,
            filterable: true,
            cellRenderer: (value: string) => {
              return new Date(value).toLocaleDateString();
            },
          },
          {
            type: "string",
            label: "End",
            field: "End",
            sortable: true,
            filterable: true,
            cellRenderer: (value: string) => {
              return new Date(value).toLocaleDateString();
            },
          },
          {
            type: "string",
            label: "Name",
            field: "Name",
            sortable: true,
            filterable: true,
          },
        ]}
      />
    </div>
  );
};
export default Shifts;
