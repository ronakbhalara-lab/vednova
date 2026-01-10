import { useEffect } from "react";
import { loadTawkTo } from "../utils/tawk";

const TawkChat = () => {
  useEffect(() => {
    loadTawkTo();
  }, []);

  return null;
};

export default TawkChat;
