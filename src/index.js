import a from "./a";
import { merge } from "lodash";
import("./c");
export const main = () => {
  import("./b");

  merge({}, {});
};

a();
