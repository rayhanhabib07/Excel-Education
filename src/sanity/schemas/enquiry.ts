import { defineType, defineField } from "sanity";

export default defineType({
  name: "enquiry",
  title: "Enquiry",
  type: "document",
  fields: [
    defineField({
      name: "studentName",
      title: "Student Name",
      type: "string",
    }),
    defineField({
      name: "guardianName",
      title: "Parent / Guardian Name",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "level",
      title: "Class / Level",
      type: "string",
    }),
    defineField({
      name: "group",
      title: "Group",
      type: "string",
    }),
    defineField({
      name: "subjects",
      title: "Subjects Interested In",
      type: "string",
    }),
    defineField({
      name: "area",
      title: "Area / Location",
      type: "string",
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
    }),
    defineField({
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
    }),
  ],
  preview: {
    select: { title: "studentName", subtitle: "phone" },
    prepare({ title, subtitle }) {
      return { title: title || "Unknown", subtitle: subtitle || "" };
    },
  },
});
