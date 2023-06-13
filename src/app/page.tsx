import { Form } from "./Form";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <main>
      {Date.now()}
      <Form />
    </main>
  );
}
