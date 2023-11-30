"use client";
import { useDispatch, useSelector } from "react-redux";
import { Product, StateProps, StoreProduct } from "../../../types";
import CartProduct from "@/components/CartProduct";
import ResetCart from "@/components/ResetCart";
import Link from "next/link";
import CartPayment from "@/components/CartPayment";

export default function Cart() {
  const { productData } = useSelector((state: StateProps) => state.next);
  const dispatch = useDispatch();

  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      {productData.length > 0 ? (
        <div className="bg-white p-4 rounded-lg">
          <div className="flex flex-col sm:flex-row items-center justify-between border-b-[1px] border-b-gray-400 pb-1">
            <p className="text-2xl font-semibold text-amazon_blue mb-2 sm:mb-0">
              Shopping Cart
            </p>
          </div>
          <div className="pt-2 flex flex-col gap-2">
            {productData.map((item: StoreProduct) => (
              <div key={item._id}>
                <CartProduct item={item} />
              </div>
            ))}
            <ResetCart />
          </div>
          <div className="bg-white mt-4 p-4 rounded-lg sm:mt-0 sm:ml-4 flex items-center justify-center">
            <CartPayment />
          </div>
        </div>
      ) : (
        <div className="bg-white mt-4 flex flex-col items-center justify-center py-5 rounded-lg shadow-lg">
          <h1 className="text-lg font-medium">Your cart is empty!</h1>
          <Link href={"/"}>
            <button className="w-52 h-10 bg-amazon_blue text-white rounded-lg text-sm font-semibold mt-4 hover:bg-amazon_yellow hover:text-black">
              Go to shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
