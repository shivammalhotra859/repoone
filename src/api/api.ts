import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export const client = axios.create({
  baseURL: "https://api.example.com",
});

export const request = async ({ ...options }: AxiosRequestConfig) => {
  client.defaults.headers.common.Authorization = `Bearer token`;
  const onSuccess = (response: AxiosResponse) => response;
  const onError = (error: AxiosError) => {
    if (axios.isAxiosError(error)) {
      return error;
    }
    return new Error("An unknown error occurred");
  };
  try {
    const response = await client(options);
    return onSuccess(response);
  } catch (error) {
    return onError(error as AxiosError);
  }
};

export const handleError = (error: unknown, customErrorMessage: string) => {
  if (axios.isAxiosError(error)) {
    const serverError = error as AxiosError<{ message: string }>;
    if (serverError && serverError.response) {
      throw new Error(serverError.response.data.message || customErrorMessage);
    }
  }
  throw new Error(customErrorMessage);
};
