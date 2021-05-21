import { useState } from "react";
import axios from "axios";
import useSWR from "swr";

const useRequest = ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async (props = {}) => {
    setErrors(null);
    const fetcher = async (endPoint) =>
      await axios[method](endPoint, {
        ...body,
        ...props,
      });

    const { data, error } = useSWR(url, fetcher);
    if (data && onSuccess) {
      onSuccess(data);
    }
    if (error) {
      const errors = error.response.data;
      setErrors(
        <div className="alert alert-danger">
          <h4>Oooops....</h4>
          <ul className="my-0">
            {errors.map((error, index) => (
              <li key={error.index}>error.message</li>
            ))}
          </ul>
        </div>
      );
    }
    return;
  };

  return { errors, doRequest };
};

export default useRequest;
