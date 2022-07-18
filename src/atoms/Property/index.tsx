import React from "react";

export default function Property({ name, value }: any) {
  return (
    <div>
      <span>{name}</span><p>{value}</p>
    </div>
  );
}
