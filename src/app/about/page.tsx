import prisma from "@/utils/prisma";

const AboutPage = async () => {
  const users = await prisma.user.findMany();

  console.log("users >> ", users);

  return (
    <div>
      <h1>about page</h1>
    </div>
  );
};

export default AboutPage;
