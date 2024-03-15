export type DefaultTableDef = {
  type: string;
  label: string;
  field: string;
  sortable: boolean;
  filterable: boolean;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cellRenderer?: (value: any) => JSX.Element | string;
};

export const peopleTableDef = {
  name: {
    type: "string",
    label: "Name",
    field: "name",
    sortable: true,
    filterable: true,
  },
  dateOfBirth: {
    type: "date",
    label: "Date of Birth",
    field: "DateOfBirth",
    sortable: true,
    filterable: true,
    cellRenderer: (value: string) => {
      return new Date(value).toLocaleDateString();
    },
  },
  startDate: {
    type: "date",
    label: "Start Date",
    field: "StartDate",
    sortable: true,
    filterable: true,
    cellRenderer: (value: string) => {
      return new Date(value).toLocaleDateString();
    },
  },
  active: {
    type: "boolean",
    label: "Active",
    field: "active",
    sortable: true,
    filterable: true,
    cellRenderer: (value: boolean) => {
      return value ? (
        <span className={"css.active"}>Active</span>
      ) : (
        <span className={"css.inactive"}>Inactive</span>
      );
    },
  },
};

export type PeopleTableDef = typeof peopleTableDef;
