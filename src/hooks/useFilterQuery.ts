import {
  useFilterBySearchQuery,
  useGetAllTaskQuery,
} from "../redux/features/task/taskApi";
import { useAppSelector } from "./hook";

export const useFilterQuery = () => {
  const {
    filters: { sort, status },
    search,
  } = useAppSelector((state) => state.filter);

  const { email } = useAppSelector((state) => state.auth.user);

  console.log(search, email, "use query");
  const { data: searchData } = useFilterBySearchQuery({
    search: search,
    userEmail: email,
  });
  const { data: allData } = useGetAllTaskQuery(email);

  const getQueryToUse = () => {
    if (search && !sort && !status) {
      console.log("from search");
      return searchData;
    } else {
      console.log("allfilter");
      return allData;
    }
  };

  const data = getQueryToUse();
  return data || [];
};
