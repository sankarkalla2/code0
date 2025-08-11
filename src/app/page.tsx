import { Client } from "@/components/client";
import { useTRPC } from "@/trpc/client";
import { caller, getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

export default async function Home() {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.hello.queryOptions({ text: "world" }));
  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<div>...loading</div>}>
          <Client />
        </Suspense>
      </HydrationBoundary>
    </div>
  );
}
