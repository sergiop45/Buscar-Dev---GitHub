import { useEffect, useState } from "react";

const url = "https://api.github.com/users/";

export default function Image() {
  const [items, setItems] = useState([]);
  let src = '';
  // Change this to any username whose repositories you want to get
  const [user] = useState("ubirataantunes");

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(`${url}${user}`);
      const data = await res.json();
      setItems(data);
	  console.log(data)
    };

    fetchRepos();
  }, [user]);

  return (
    <>
      {!items ? (
	<div>Loading...</div>
      ) : (
        <img width="150px" height="150px" src={items.avatar_url} alt="" />
      )}
    </>
  );
}
