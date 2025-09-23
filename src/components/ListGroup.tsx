import { Fragment } from "react";

function ListGroup() {
  const items = [
    "London",
    "Southampton",
    "Glasgow",
    "Birmingham",
    "Leeds",
    "Brighton",
  ];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
