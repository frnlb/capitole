declare module "*.svg" {
  import * as React from "react";
  const content: string;
  export default content;
}

declare module "*.svg?react" {
  import * as React from "react";
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;
}
