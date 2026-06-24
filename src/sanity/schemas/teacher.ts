import { defineType, defineField } from "sanity";

export default defineType({
  name: "teacher",
  title: "Teacher",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "subjects",
      title: "Subjects",
      type: "array",
      of: [{ type: "string" }],
      description: "Subjects they teach (e.g. Physics, Chemistry)",
    }),
    defineField({
      name: "qualification",
      title: "Qualification / Institution",
      type: "string",
      description: 'e.g. "MSc Physics, Dhaka University"',
    }),
    defineField({
      name: "experience",
      title: "Years of Experience",
      type: "number",
    }),
    defineField({
      name: "bio",
      title: "Short Bio",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "qualification", media: "photo" },
  },
});
