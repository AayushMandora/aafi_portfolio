import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
// import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
// import { Products } from "@/components/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Aafi Malek",
  description:
    "Aafi Malek is a Machine Learning Engineer and loves working remotely.",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2">Contact Me</Heading>
      <Heading>Email :- aafimalek2023@gmail.com</Heading>
      <Paragraph className="mb-10 max-w-xl">
        Reach out to me over email or fill up this contact form. I will get back to you ASAP - I promise.{" "}
      </Paragraph>
      <Contact />
    </Container>
  );
}
