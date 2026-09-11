import { useState, useEffect } from "react";

const useProductInfo = (id) => {
  const [prodInfo, setProdInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    const data = await fetch(
      "https://bytefork.tools/m/msxch8ah"
    );

    const json = await data.json();

    const product = json.find(
      (jewel) => String(jewel.id) === String(id)
    );

    setProdInfo(product);
  };

  return prodInfo;
};

export default useProductInfo;