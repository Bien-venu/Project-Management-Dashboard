const BreadCrumb = () => {
  return (
    <nav className="flex text-xs font-semibold" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <a
            href="#"
            className=" inline-flex items-center text-grey dark:text-grey "
          >
            Workspace
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <svg
              className="mx-1 h-2 w-2 text-grey rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <a
              href="#"
              className=" ms-1 text-grey md:ms-2 dark:text-grey "
            >
              Creative
            </a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <svg
              className="mx-1 h-2 w-2 text-grey rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="ms-1 md:ms-2">Creative Website</span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumb;
