import { title } from "process";
import { client } from "../../libs/client";

export default async function Home() {
  const data = await client.get({
    endpoint: "hello",
  });

  return (
    <main>
      <div>
        <p>{data.content}</p>
      </div>
      <div></div>
    </main>
  );
}
