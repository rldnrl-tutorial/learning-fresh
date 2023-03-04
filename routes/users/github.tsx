import { PageProps, Handlers } from "$fresh/server.ts";
import { useState } from "preact/hooks";
import Layouts from "../../components/Layouts.tsx";

// export const handler: Handlers = {
//   async GET(_, ctx) {
//     const { username } = ctx.params;
//     const res = await fetch(`https://api.github.com/users/${username}`);
//     if (res.status === 404) {
//       return ctx.render(null);
//     }
//     const user = await res.json();

//     return await ctx.render(user);
//   },
// };

export const handler: Handlers = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const username = url.searchParams.get("q");
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (res.status === 404) {
      return ctx.render(null);
    }
    const user = await res.json();
    return await ctx.render(user);
  },
};

export default function UserId(props: PageProps) {
  const data = props.data;

  return (
    <Layouts>
      <section>
        <form class="flex gap-[8px]">
          <label class="w-full">
            <input
              class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
              type="text"
              placeholder="Enter Github user by Username"
              name="q"
            />
          </label>
          <button
            class="w-32 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="submit"
          >
            검색하기
          </button>
        </form>
      </section>
      <section>
        {data.name && (
          <a href={data.html_url} target="_blank">
            <p>{data.login}</p>
            <img src={data.avatar_url} alt={data.login} />
          </a>
        )}
      </section>
    </Layouts>
  );
}
