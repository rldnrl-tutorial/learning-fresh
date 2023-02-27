import { PageProps } from "$fresh/server.ts";

export default function UserId(props: PageProps) {
  const { id } = props.params;

  return <div>{id}</div>;
}
