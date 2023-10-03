import React from "react";
import { Disclosure } from "@headlessui/react";
import { disclosures } from "../data";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";

export default function DisclosureComponent() {
  return (
    <div className="flex flex-col space-y-6">
      {disclosures.map((d) => (
        <Disclosure key={d.id}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center space-x-3 cursor-pointer">
                {!open ? (
                  <PlusIcon className="w-6 h-6 text-white" />
                ) : (
                  <MinusIcon className="w-6 h-6 text-white" />
                )}
                <span className="font-bold text-white text-2xl">{d.title}</span>
              </Disclosure.Button>
              <Disclosure.Panel className="transition-max-height ease-in-out duration-300 py-0 flex ">
                <span className="font-medium text-md text-grey_skip pl-13">
                  {d.description}
                </span>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
