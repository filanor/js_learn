import { useState, useEffect } from "react";
import httpService from "../services/http.serviсe";
import professions from "../mockData/professions.json";
import qualities from "../mockData/qualities.json";
import users from "../mockData/users.json";

const useMockData = () => {
  const statusConsts = {
    idle: "Not Started",
    pending: "In Progress",
    successed: "Ready",
    error: "Error Occured"
  };

  const [error, setError] = useState(null);
  const [status, setStatus] = useState(statusConsts.idle);
  const [progress, setProgress] = useState(0);
  const [count, setCount] = useState(0);

  const summuryCount = users.length + professions.length + qualities.length;
  const incrementCount = () => {
    setCount((prevStatus) => prevStatus + 1);
  };

  const updateProgress = () => {
    if (count !== 0 && status === statusConsts.idle) {
      setStatus(statusConsts.pending);
    }
    const newProgress = Math.floor((count / summuryCount) * 100);
    if (progress < newProgress) {
      setProgress(() => newProgress);
    }
    if (newProgress === 100) {
      setStatus(statusConsts.successed);
    }
  };

  useEffect(() => {
    updateProgress();
  }, [count]);

  async function initialize() {
    try {
      for (const prof of professions) {
        await httpService.put("professions/" + prof._id, prof);
        incrementCount();
      }
      for (const quality of qualities) {
        await httpService.put("qualities/" + quality._id, quality);
        incrementCount();
      }
      for (const user of users) {
        await httpService.put("user/" + user._id, user);
        incrementCount();
      }
    } catch (error) {
      setStatus(statusConsts.error);
      setError(error);
    }
  }

  return { error, initialize, progress, status };
};

export default useMockData;
