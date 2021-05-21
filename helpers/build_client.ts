import axios, { AxiosInstance } from "axios";

const buildClient = ({ req }: any): AxiosInstance => {
  if (typeof window === "undefined") {
    //! We on server
    //! http://SERVICENAME.NAMESPACE.svc.cluster.local

    return axios.create({
      baseURL: "http://localhost:1337",
      // headers: {
      ...req?.headers,
      // },
    });
  } else {
    //!We on client side
    return axios.create({ baseURL: "/", withCredentials: true });
  }
};

export default buildClient;
