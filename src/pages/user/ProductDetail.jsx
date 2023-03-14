import React, { useEffect, useState } from "react";
import TitleCard from "../../components/Cards/user/TitleCard";
import MainHeader from "../../components/header/MainHeader";
import Footer from "../../sections/user/Footer";
import axios from "axios";
import { Disclosure, RadioGroup, Tab } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import {
  CurrencyDollarIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/outline";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function ProductDetail() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  const id = localStorage.getItem("p_id");
  const [data, setData] = useState([]);

  useEffect(() => {
    let url = `http://localhost:2000/api/product/getProductwithPk/${id}`;
    axios
      .get(url)
      .then((r) => {
        setData(r.data.data);
        console.log(
          "🚀  ~ file: ProductDetail.jsx:77 ~ ProductDetail ~ data:",
          data
        );
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <MainHeader />
      <TitleCard name={"Details"} />

      <div className="bg-white">
        <div className="pt-6">
          {/* <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              {product.breadcrumbs.map((breadcrumb) => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center">
                    <a
                      href={breadcrumb.href}
                      className="mr-2 text-sm font-medium text-gray-900"
                    >
                      {breadcrumb.name}
                    </a>
                    <svg
                      width={16}
                      height={20}
                      viewBox="0 0 16 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-4 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>
              ))}
              <li className="text-sm">
                <a
                  href={product.href}
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600"
                >
                  {product.name}
                </a>
              </li>
            </ol>
          </nav> */}

          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
              {/* src={`http://localhost:2000/uploads/${data.images[0]}`} */}
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                <img
                  src={product.images[1].src}
                  alt={product.images[1].alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                <img
                  src={product.images[2].src}
                  alt={product.images[2].alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
              <img
                src={product.images[3].src}
                alt={product.images[3].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.name}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                {data.title}
              </p>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating
                            ? "text-gray-900"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <a
                    href={reviews.href}
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {reviews.totalCount} reviews
                  </a>
                </div>
              </div>

              <form className="mt-10">
                {/* Colors */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Color</h3>

                  <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      {" "}
                      Choose a color{" "}
                    </RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {product.colors.map((color) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color}
                          className={({ active, checked }) =>
                            classNames(
                              color.selectedClass,
                              active && checked ? "ring ring-offset-1" : "",
                              !active && checked ? "ring-2" : "",
                              "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                            )
                          }
                        >
                          <RadioGroup.Label as="span" className="sr-only">
                            {" "}
                            {color.name}{" "}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.class,
                              "h-8 w-8 rounded-full border border-black border-opacity-10"
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Size guide
                    </a>
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      {" "}
                      Choose a size{" "}
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {product.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ active }) =>
                            classNames(
                              size.inStock
                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                              active ? "ring-2 ring-indigo-500" : "",
                              "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">
                                {size.name}
                              </RadioGroup.Label>
                              {size.inStock ? (
                                <span
                                  className={classNames(
                                    active ? "border" : "border-2",
                                    checked
                                      ? "border-indigo-500"
                                      : "border-transparent",
                                    "pointer-events-none absolute -inset-px rounded-md"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to cart
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

// {/* <div className="bg-white">
// <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
//   <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
//     {/* Image gallery */}
//     <Tab.Group as="div" className="flex flex-col-reverse">
//       {/* Image selector */}
//       <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
//         <Tab.List className="grid grid-cols-4 gap-6">
//           {product.images.map((image) => (
//             <Tab
//               key={image.id}
//               className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
//             >
//               {({ selected }) => (
//                 <>
//                   <span className="sr-only"> {data["title"]} </span>
//                   <span className="absolute inset-0 overflow-hidden rounded-md">
//                     <img
//                       src={image.src}
//                       alt=""
//                       className="h-full w-full object-cover object-center"
//                     />
//                   </span>
//                   <span
//                     className={classNames(
//                       selected ? "ring-indigo-500" : "ring-transparent",
//                       "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
//                     )}
//                     aria-hidden="true"
//                   />
//                 </>
//               )}
//             </Tab>
//           ))}
//         </Tab.List>
//       </div>

//       <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
//         {product.images.map((image) => (
//           <Tab.Panel key={image.id}>
//             <img
//               src={image.src}
//               alt={image.alt}
//               className="h-full w-full object-cover object-center sm:rounded-lg"
//             />
//           </Tab.Panel>
//         ))}
//       </Tab.Panels>
//     </Tab.Group>

//     {/* Product info */}
//     <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
//       <h1 className="text-3xl font-bold tracking-tight text-gray-900">
//         {data["title"]}
//       </h1>

//       <div className="mt-3">
//         <h2 className="sr-only">Product information</h2>
//         <p className="text-3xl tracking-tight text-gray-900">
//           ${data["Price"]}
//         </p>
//       </div>

//       {/* Reviews */}
//       <div className="mt-3">
//         <h3 className="sr-only">Reviews</h3>
//         <div className="flex items-center">
//           <div className="flex items-center">
//             {[0, 1, 2, 3, 4].map((rating) => (
//               <StarIcon
//                 key={rating}
//                 className={classNames(
//                   product.rating > rating
//                     ? "text-indigo-500"
//                     : "text-gray-300",
//                   "h-5 w-5 flex-shrink-0"
//                 )}
//                 aria-hidden="true"
//               />
//             ))}
//           </div>
//           <p className="sr-only">{product.rating} out of 5 stars</p>
//         </div>
//       </div>

//       <div className="mt-6">
//         <h3 className="sr-only">Description</h3>

//         <div
//           className="space-y-6 text-base text-gray-700"
//           dangerouslySetInnerHTML={{ __html: data["description"] }}
//         />
//       </div>

//       <form className="mt-6">
//         {/* Colors */}
//         <div>
//           <h3 className="text-sm text-gray-600">Color</h3>

//           <RadioGroup
//             value={selectedColor}
//             onChange={setSelectedColor}
//             className="mt-2"
//           >
//             <RadioGroup.Label className="sr-only">
//               {" "}
//               Choose a color{" "}
//             </RadioGroup.Label>
//             <span className="flex items-center space-x-3">
//               {product.colors.map((color) => (
//                 <RadioGroup.Option
//                   key={color.name}
//                   value={color}
//                   className={({ active, checked }) =>
//                     classNames(
//                       color.selectedColor,
//                       active && checked ? "ring ring-offset-1" : "",
//                       !active && checked ? "ring-2" : "",
//                       "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
//                     )
//                   }
//                 >
//                   <RadioGroup.Label as="span" className="sr-only">
//                     {" "}
//                     {color.name}{" "}
//                   </RadioGroup.Label>
//                   <span
//                     aria-hidden="true"
//                     className={classNames(
//                       color.bgColor,
//                       "h-8 w-8 rounded-full border border-black border-opacity-10"
//                     )}
//                   />
//                 </RadioGroup.Option>
//               ))}
//             </span>
//           </RadioGroup>
//         </div>

//         <div className="sm:flex-col1 mt-10 flex">
//           <button
//             type="submit"
//             className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
//           >
//             Add to cart
//           </button>

//           <button
//             type="button"
//             className="ml-4 flex items-center justify-center rounded-md py-3 px-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
//           >
//             <HeartIcon
//               className="h-6 w-6 flex-shrink-0"
//               aria-hidden="true"
//             />
//             <span className="sr-only">Add to favorites</span>
//           </button>
//         </div>
//       </form>

//       <section aria-labelledby="details-heading" className="mt-12">
//         <h2 id="details-heading" className="sr-only">
//           Additional details
//         </h2>

//         <div className="divide-y divide-gray-200 border-t">
//           {product.details.map((detail) => (
//             <Disclosure as="div" key={detail.name}>
//               {({ open }) => (
//                 <>
//                   <h3>
//                     <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
//                       <span
//                         className={classNames(
//                           open ? "text-indigo-600" : "text-gray-900",
//                           "text-sm font-medium"
//                         )}
//                       >
//                         {detail.name}
//                       </span>
//                       <span className="ml-6 flex items-center">
//                         {open ? (
//                           <MinusIcon
//                             className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
//                             aria-hidden="true"
//                           />
//                         ) : (
//                           <PlusIcon
//                             className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
//                             aria-hidden="true"
//                           />
//                         )}
//                       </span>
//                     </Disclosure.Button>
//                   </h3>
//                   <Disclosure.Panel
//                     as="div"
//                     className="prose prose-sm pb-6"
//                   >
//                     <ul role="list">
//                       {detail.items.map((item) => (
//                         <li key={item}>{item}</li>
//                       ))}
//                     </ul>
//                   </Disclosure.Panel>
//                 </>
//               )}
//             </Disclosure>
//           ))}
//         </div>
//       </section>
//     </div>
//   </div>
// </div>
// </div> */}
