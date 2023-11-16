"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import handleClick from "./actions";

interface Props{
    children: React.ReactNode,
    username:string
}

const ClientButton: React.FC<Props> = ({ children,username }) => {
  return <Button onClick={() => handleClick()}>{children}</Button>;
};

export default ClientButton;
