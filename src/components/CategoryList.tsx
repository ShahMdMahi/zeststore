import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        {[...Array(10)].map((_, i) => (
          <Link
            key={i}
            href="/products?cat=test"
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
          >
            <div className="relative bg-slate-100 w-full h-96">
              <Image
                src="https://images.pexels.com/photos/28437243/pexels-photo-28437243/free-photo-of-elegant-fashion-model-in-glamorous-outfit.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                fill
                sizes="20vw"
              />
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide">
              Category Name
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
