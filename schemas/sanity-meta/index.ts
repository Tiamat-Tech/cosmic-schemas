import metaSchemaTypes from "./schemas";
import Documents from "./schemas/documents";
import Objects from "./schemas/objects";
import Queries from "./queries";

export default metaSchemaTypes;
export const { siteMeta } = Documents;
export const { openGraph, manifest, locale } = Objects;
export const { getSiteMeta } = Queries;
