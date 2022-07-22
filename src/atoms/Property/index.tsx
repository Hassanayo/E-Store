import React from "react";

export default function Property({ name, value }: any) {
  return (
    <div>
      <span style={{color: "#BEBFC4"}}>{name}</span ><span>{value}</span>
    </div>
  );
}
