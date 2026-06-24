import { defineType, defineField } from "sanity";

export default defineType({
  name: "course",
  title: "Course / Batch",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Course Title",
      type: "string",
      description: 'e.g. "SSC Science Batch 2026"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "level",
      title: "Level",
      type: "string",
      options: {
        list: [
          { title: "Class 8", value: "class-8" },
          { title: "SSC (Class 9–10)", value: "ssc" },
          { title: "HSC (Class 11–12)", value: "hsc" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "group",
      title: "Group",
      type: "string",
      options: {
        list: [
          { title: "Science", value: "science" },
          { title: "Commerce / Business Studies", value: "commerce" },
          { title: "Humanities", value: "humanities" },
          { title: "General", value: "general" },
        ],
      },
      description: "Leave empty or choose General for Class 8",
    }),
    defineField({
      name: "subjects",
      title: "Subjects Covered",
      type: "array",
      of: [{ type: "string" }],
      description: "Add each subject as a separate item",
    }),
    defineField({
      name: "schedule",
      title: "Batch Schedule / Days",
      type: "string",
      description: 'e.g. "Sat, Mon, Wed — 4:00 PM to 6:00 PM"',
    }),
    defineField({
      name: "fee",
      title: "Monthly Fee (৳ BDT)",
      type: "number",
    }),
    defineField({
      name: "seats",
      title: "Seats / Batch Size",
      type: "number",
      description: "Maximum students per batch",
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "level" },
  },
});
