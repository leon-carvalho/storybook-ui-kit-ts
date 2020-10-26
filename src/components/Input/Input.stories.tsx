import React from "react";
import Input from "./Input";

export default {
  title: "Form/Input",
  component: Input,
};

export const Small = () => <Input sizeVariant="small" />;
export const Medium = () => <Input />;
export const Large = () => <Input sizeVariant="large" />;
