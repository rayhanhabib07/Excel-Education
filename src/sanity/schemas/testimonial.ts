import { defineType, defineField } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 4,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "authorName",
      title: "Author Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "authorType",
      title: "Author Type",
      type: "string",
      options: {
        list: [
          { title: "Parent", value: "parent" },
          { title: "Student", value: "student" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "level",
      title: "Class / Level",
      type: "string",
      description: 'e.g. "HSC 2025", "SSC Science"',
    }),
    defineField({
      name: "resultAchieved",
      title: "Result Achieved",
      type: "string",
      description: 'e.g. "GPA 5.00 in SSC"',
    }),
    defineField({
      name: "rating",
      title: "Rating (1–5)",
      type: "number",
      validation: (r) => r.min(1).max(5),
      initialValue: 5,
    }),
  ],
  preview: {
    select: { title: "authorName", subtitle: "authorType" },
  },
});
