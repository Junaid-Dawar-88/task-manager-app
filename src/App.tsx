import React from "react";
import { BrowserRouter } from "react-router-dom";
import LayOut from "./component/layout-page/layout-page";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const App = () => {
  const queryClient = new QueryClient()
  return (
    <BrowserRouter>
     <QueryClientProvider client={queryClient}>
      <LayOut />
      <ReactQueryDevtools initialIsOpen={false} />
     </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
