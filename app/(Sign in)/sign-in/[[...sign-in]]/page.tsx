import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="signIn overflow-hidden min-h-screen flex justify-center items-center">
      <SignIn />
    </section>
  );
}
