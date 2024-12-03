const Error404 = () => {
  return (
    <div>
      <main class="h-screen w-full flex flex-col justify-center items-center bg-[#433878]">
        <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
        <div class="bg-[#E4B1F0] px-2 text-sm rounded rotate-12 absolute text-white">
          Page Not Found
        </div>
        <button class="mt-5">
          <a class="relative inline-block text-sm font-medium text-[#7E60BF] group active:text-orange-500 focus:outline-none focus:ring">
            <span class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#7E60BF] group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span class="relative block px-8 py-3 bg-[#1A2238] border border-current">
              <router-link to="/">Go Home</router-link>
            </span>
          </a>
        </button>
      </main>
    </div>
  );
};

export default Error404;
