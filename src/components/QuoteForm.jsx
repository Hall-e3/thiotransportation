import React from "react";
import Input from "./Input";
import SelectField from "./SelectField";
import CheckBox from "./CheckBox";
import Button from "./Button";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function QuoteForm() {
  return (
    <div className="border border-stroke rounded-lg px-7 lg:px-10 py-10 space-y-4 md:space-y-8 bg-white">
      <div className="flex flex-col space-y-2">
        <h3 className="text-xl md:text-2xl font-bold ">Know the price</h3>
        <h3 className="text-3xl lg:text-4xl font-bold text-primary_color">
          Get A Free Quote
        </h3>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-5">
        <Input placeholder="Your Name" styles="border rounded-md flex-1" />
        <Input
          placeholder="Your Email address"
          styles="border rounded-md flex-1"
        />
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-5">
        <Input placeholder="Your Phone number" styles="border rounded-md" />
        <Input placeholder="Subject" styles="border rounded-md" />
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-5">
        <Input placeholder="Pickup City" styles="border rounded-md" />
        <Input placeholder="Delivery City" styles="border rounded-md" />
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-5">
        <SelectField styles="border border-stroke bg-white rounded-md focus:border-blue-500 py-4 px-3">
          <option value="">Choose....</option>
          {["Freight type", "One", "Two", "Three"].map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </SelectField>
        <SelectField styles="border border-stroke bg-white rounded-md focus:border-blue-500 py-4 px-3">
          <option value="">Choose....</option>
          {["Incoterms", "One", "Two", "Three"].map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </SelectField>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-5">
        <div className="flex flex-col lg:flex-row lg:space-x-5">
          <Input placeholder="Width" styles="border rounded-md" />
          <Input type="number" styles="border rounded-md" />
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-5">
          <Input placeholder="Length" styles="border rounded-md" />
          <Input type="number" styles="border rounded-md" />
        </div>
      </div>
      <div className="flex flex-wrap gap-6 md:justify-center md:items-center md:space-x-5">
        <CheckBox
          label="First checkbox"
          type="checkbox"
          onChange={() => {}}
          right={true}
        />
        <CheckBox
          label="Express Delivery"
          type="checkbox"
          onChange={() => {}}
          right={true}
        />
        <CheckBox
          label="Insurence"
          type="checkbox"
          onChange={() => {}}
          right={true}
        />
        <CheckBox
          label="Packaging"
          type="checkbox"
          onChange={() => {}}
          right={true}
        />
      </div>
      <Button
        text="Get A Quote"
        buttonStyle="lg:w-[40%] bg-gradient-to-r text-white from-red-500  to-primary_orange py-2 text-lg font-bold rounded-md"
        icon={
          <div className="bg-primary_color p-3 rounded-md">
            <ChevronRightIcon className="w-5 h-5 text-white" />
          </div>
        }
      />
    </div>
  );
}
