import { useQuery } from "@tanstack/react-query";
import { handleError, request } from "./api";
import { IUser } from "../utils/types";
import { apiURL } from "./config";

export const useFetchUserQuery = (queryKey: string) => {
  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      try {
        const response = await request({
          url: apiURL.getUserDetails,
          method: "GET",
        });
        return (response as { data: IUser })?.data;
      } catch (error) {
        handleError(error, "Error");
      }
    },
  });
};
