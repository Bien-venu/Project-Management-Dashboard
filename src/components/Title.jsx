import Access from "./Access";
import BreadCrumb from "./BreadCrumb";

const Title = () => {
  return (
    <div>
      <div className="flex flex-col p-5 gap-2">
        <BreadCrumb />
        <h1 className=" text-3xl font-bold">Website Design</h1>
        <Access />
      </div>
    </div>
  );
};

export default Title;
