import React from "react";
import { BreadcrumbsContainer } from "./breadcrumbs.style";

interface BCprops {
  children: React.ReactNode;
}

export default function Breadcrumbs({ children }: BCprops) {
  return <BreadcrumbsContainer>{children}</BreadcrumbsContainer>;
}
