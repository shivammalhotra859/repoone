import { useMutation } from "@tanstack/react-query";
import { handleError, request } from "./api";
import { apiURL } from "./config";

export const useSendOTPMutation = (payload: { mobileNumber: number }) => {
  return useMutation({
    mutationFn: async () => {
      try {
        return await request({
          url: apiURL.sendOTP,
          method: "POST",
          data: payload,
        });
      } catch (error) {
        handleError(error, "Error");
      }
    },
  });
};
