"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";


export const Client = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.hello.queryOptions({ text: "world" }));
  return (
    <div>
      <h1>{data.greeting}</h1>
    </div>
  );
};
