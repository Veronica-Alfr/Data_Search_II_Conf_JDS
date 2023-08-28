import React from "react";
import { MDXProvider } from "@mdx-js/react";
import CustomComponent from "../CustomComponent";
import ExampleMDX from "../mdx/Example.mdx";

const components = {
  CustomComponent,
};

const MDXRenderer: React.FC = () => {
  return (
    <MDXProvider components={components}>
      <ExampleMDX />
    </MDXProvider>
  );
};

export default MDXRenderer;
