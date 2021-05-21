import axios, { AxiosInstance } from "axios";

const buildClient = ({ req }: any): AxiosInstance => {
  if (typeof window === "undefined") {
    //! We on server
    //! http://SERVICENAME.NAMESPACE.svc.cluster.local

    return axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}`,
      headers: {
        ...req?.headers,
      },
    });
  } else {
    //!We on client side
    return axios.create({ baseURL: "/", withCredentials: true });
  }
};

export default buildClient;
