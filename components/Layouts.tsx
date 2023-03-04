import { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
}

export default function Layouts(props: Props) {
  return (
    <div class="pt-[12px] mx-auto max-w-screen-md">
      <nav class="mb-[12px]">
        <a href="/">Home</a>
        <a class="mx-1" href="/about">
          About
        </a>
        <a href="/users/github">Github</a>
      </nav>
      <main>{props.children}</main>
    </div>
  );
}
