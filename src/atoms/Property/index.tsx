import React from "react";

export default function Property({ name, value }: any) {
  return (
    <div>
      <span>{name}</span>:<span>{value}</span>
    </div>
  );
}
