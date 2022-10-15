function HomeView() {
  return (
    <div
      id="comp-card"
      className="flex flex-col items-center justify-center gap-4 bg-white"
    >
      <header className="flex justify-between mb-4">
        <h2 className="mt-0 mb-4 text-4xl font-medium leading-tight text-blue-600">
          Dashboard
        </h2>
      </header>
      <a
        href="#"
        className="w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50"
      >
        <p className="px-4 py-1 text-sm text-2xl font-bold text-white bg-blue-600 rounded-tl-lg w-fit rounded-br-xl">
          TOTAL PRODUCTS
        </p>

        <div className="grid grid-cols-6 p-5 gap-y-2">
          <div>
            <span className="text-6xl text-gray-600 material-symbols-outlined">
              inventory_2
            </span>
          </div>

          <div className="col-span-5 ml-4 md:col-span-4">
            <p className="text-6xl font-bold text-gray-600">9</p>
          </div>
          <div className="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end"></div>
        </div>
      </a>

      <a
        href="#"
        className="w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50"
      >
        <p className="px-4 py-1 text-2xl font-bold text-white bg-blue-600 rounded-tl-lg w-fit rounded-br-xl">
          TOTAL CATEGORIES
        </p>

        <div className="grid grid-cols-6 p-5 gap-y-2">
          <div>
            <span className="text-6xl text-gray-600 material-symbols-rounded">
              category
            </span>
          </div>

          <div className="col-span-5 ml-4 md:col-span-4">
            <p className="text-6xl font-bold text-gray-600"></p>
          </div>

          <div className="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end"></div>
        </div>
      </a>
    </div>
  );
}

export default HomeView;
