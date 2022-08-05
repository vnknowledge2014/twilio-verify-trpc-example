import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { trpc } from "./utils";

import "./index.scss";

import { GenerateVerifyCode } from "./pages/staff/GenerateVerifyCode";
import { CheckVerifyCode } from "./pages/staff/CheckVerifyCode";

const client = new QueryClient();

const AppContent = () => {
  return (
    <div className="mt-10 text-3-xl mx-auto max-w-6xl">
      <div className="mt-10">
        <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-indigo-700">Verify Auth with Twilio</h1>
        <ul>
          <li><Link className="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4" to="/generate">Generate OTP Code via SMS</Link>
          </li>
          <li><Link className="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4" to="/verify">Check OTP Code valid</Link></li>
        </ul>
      </div>
    </div>
  )
};

const App = () => {
  const [trpcClient] = useState(() => trpc.createClient({ url: "http://localhost:8080/trpc" }));

  return (
    <trpc.Provider client={trpcClient} queryClient={client}>
      <QueryClientProvider client={client} contextSharing={true}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppContent />}>
            </Route>
            <Route path="/generate" element={<GenerateVerifyCode client={client} trpc={trpc} />} />
            <Route path="/verify" element={<CheckVerifyCode client={client} trpc={trpc} />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </trpc.Provider>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));


