export type ContactItem = {
  label: string;
  value: string;
  href?: string;
};

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: "nathanclaret.pro@gmail.com",
    href: "mailto:nathanclaret.pro@gmail.com",
  },
  {
    label: "Phone",
    value: "+1 (514) 715-6142",
    href: "tel:+15147156142",
  },
  {
    label: "Address",
    value: "Montreal, QC H2K 4B6, Canada",
  },
  {
    label: "GitHub",
    value: "github.com/nath73000",
    href: "https://github.com/nath73000",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nathan-claret-ba78ab283",
    href: "https://www.linkedin.com/in/nathan-claret-ba78ab283",
  },
];
