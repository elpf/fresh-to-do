// import { useSignal } from "@preact/signals";
// import Counter from "../islands/Counter.tsx";

import Todos from "../islands/Todos.tsx";

// export default function Home() {
//   const count = useSignal(3);
//   return (
//     <div class="px-4 py-8 mx-auto bg-[#86efac]">
//       <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
//         <img
//           class="my-6"
//           src="/logo.svg"
//           width="128"
//           height="128"
//           alt="the Fresh logo: a sliced lemon dripping with juice"
//         />
//         <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
//         <p class="my-4">
//           Try updating this message in the
//           <code class="mx-2">./routes/index.tsx</code> file, and refresh.
//         </p>
//         <Counter count={count} />
//       </div>
//     </div>
//   );
// }
export default function Home() {
  return (
      <body class="bg-gray-200">
          <div class="mt-10 px-5 rounded bg-white mx-auto flex max-w-screen-md flex-col justify-center py-12">
              <div class="mx-auto">
                  <h2 class="text-2xl font-bold mb-5 text-center">Fresh Tools!</h2>
                  <img class="mx-auto" src="logo.svg" />
              </div>

              <Todos />
          </div>
      </body>
  )

}