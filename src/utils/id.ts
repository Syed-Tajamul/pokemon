import { ulid } from "ulid";

export const genId = (prefix: string) => prefix + "_" + ulid();
