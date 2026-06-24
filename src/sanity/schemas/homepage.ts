import { defineType, defineField } from "sanity";

export default defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "announcementText",
      title: "Announcement / Notice Bar Text",
      type: "string",
      description: 'e.g. "Admission ongoing for HSC 2026 batch — limited seats!"',
    }),
    defineField({
      name: "announcementEnabled",
      title: "Show Announcement Bar",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "heroHeading",
      title: "Hero Heading",
      type: "string",
      description: "Main headline on the homepage",
    }),
    defineField({
      name: "heroSubheading",
      title: "Hero Subheading",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "heroCta",
      title: "Hero CTA Button Text",
      type: "string",
      initialValue: "Book a Free Demo Class",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    prepare() {
      return { title: "Homepage" };
    },
  },
});
