import { defineType, defineField } from "sanity";

export default defineType({
  name: "achievement",
  title: "Achievement / Topper",
  type: "document",
  fields: [
    defineField({
      name: "studentName",
      title: "Student Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "exam",
      title: "Exam",
      type: "string",
      options: {
        list: [
          { title: "SSC", value: "ssc" },
          { title: "HSC", value: "hsc" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "result",
      title: "Result",
      type: "string",
      description: 'e.g. "GPA 5.00", "A+", "Golden A+"',
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
      description: "e.g. 2025",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "institution",
      title: "College / School",
      type: "string",
      description: "Where the student went on to study (optional)",
    }),
    defineField({
      name: "photo",
      title: "Student Photo",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: "studentName", subtitle: "result", media: "photo" },
    prepare({ title, subtitle, media }) {
      return { title, subtitle: subtitle || "", media };
    },
  },
});
