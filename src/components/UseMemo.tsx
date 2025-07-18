import { useMemo, useState } from "react";

const firstNameCheck = (name: string) => {
  // kalkulasi yang lambat dan membutuhkan waktu
  let total = 0;
  for (let i = 0; i < 100000000; i++) {
    total += name.length;
  }
  console.log(total);
  return total < 999999999999999;
};

export const UseMemo = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  //   const firstNameCheckAvailable = firstNameCheck(firstName);

  const firstNameCheckMemo = useMemo(
    () => firstNameCheck(firstName),
    [firstName]
  );

  return (
    <div>
      <h1>useMemo</h1>
      <div>
        <div>
          <label>First Name</label>
          <input type="text" onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" onChange={(e) => setLastName(e.target.value)} />
        </div>
      </div>
      <div>
        <p>{firstNameCheckMemo ? "true" : "false"}</p>
      </div>
    </div>
  );
};
