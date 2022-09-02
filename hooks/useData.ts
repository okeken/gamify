import axios from "axios";
import { useEffect, useState } from "react";
import dummyData from "../dummyData.json";

const useData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isErrored, setIsErrored] = useState(false);
  const [firstTimeLoading, setFirstTimeLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    try {
      setData(dummyData.contractList);
    } catch (error) {
      setIsErrored(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, isErrored, data, setIsLoading, firstTimeLoading };
};

export default useData;
