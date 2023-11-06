import {
  useFilterBySearchQuery,
  useFilterByStatusQuery,
  useFilterByStatusSortQuery,
  useGetAllTaskQuery,
  useSortingTaskQuery,
} from "../redux/features/task/taskApi";
import { useAppSelector } from "./hook";

export const useFilterQuery = () => {
  const {
    filters: { sort, status },
    search,
  } = useAppSelector((state) => state.filter);

  const { email } = useAppSelector((state) => state.auth.user);

  console.log(email, status, "use query");
  const { data: searchData } = useFilterBySearchQuery({
    search: search,
    userEmail: email,
  });
  const { data: allData } = useGetAllTaskQuery(email);

  const { data: filterByStatus } = useFilterByStatusQuery({
    status: status,
    userEmail: email,
  });
  const { data: sortingData } = useSortingTaskQuery({
    sortOrder: sort,
    userEmail: email,
  });
  const { data: statusSort } = useFilterByStatusSortQuery({
    sortOrder: sort,
    status: status,
    userEmail: email,
  });

  const getQueryToUse = () => {
    if (search && !sort && !status) {
      console.log("from search");
      return searchData;
    } else if (!search && status && !sort) {
      return filterByStatus;
    } else if (!search && !status && sort) {
      return sortingData;
    } else if (!search && status && sort) {
      return statusSort;
    } else {
      console.log("allfilter");
      return allData;
    }
  };

  const data = getQueryToUse();
  return data || [];
};
