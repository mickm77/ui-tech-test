import { useQuery } from "@tanstack/react-query";
import { fetchPeople } from "../../api/person";
import Table from "../../components/table/Table";

const Home = () => {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["people"],
    queryFn: fetchPeople,
  });

  return <Table data={data} isLoading={isLoading} isFetching={isFetching} />;
};

export default Home;
