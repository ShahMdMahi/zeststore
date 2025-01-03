import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {[...Array(4)].map((_, i) => (
        <Link
          key={i}
          href="/product/test"
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative w-full h-80">
            <Image
              src="https://images.pexels.com/photos/22468584/pexels-photo-22468584/free-photo-of-woman-sitting-on-bed-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />

            <Image
              src="https://images.pexels.com/photos/28437243/pexels-photo-28437243/free-photo-of-elegant-fashion-model-in-glamorous-outfit.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$69</span>
          </div>
          <div className="text-sm text-gray-500">My Product Description</div>
          <button className="rounded-2xl ring-1 ring-zestColor text-zestColor w-max py-2 px-4 text-xs hover:bg-zestColor hover:text-white">
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
