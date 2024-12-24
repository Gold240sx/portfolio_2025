// source.config.ts
import { defineCollections, frontmatterSchema, metaSchema } from "fumadocs-mdx/config";
var test = defineCollections({
  type: "doc",
  dir: "src/content/docs",
  schema: frontmatterSchema
  // zod schema to validate frontmatter
});
var docs = defineCollections({
  type: "doc",
  dir: "src/content/docs",
  schema: frontmatterSchema
  // zod schema to validate frontmatter
});
var meta = defineCollections({
  type: "meta",
  dir: "src/content/docs",
  schema: metaSchema
  // zod schema to validate JSON data
});
export {
  docs,
  meta,
  test
};
