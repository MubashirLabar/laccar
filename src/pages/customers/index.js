import { PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import Layout from "components/layout";
import { Table } from "components";

export default function Customers() {
  const data = [
    {
      name: "Rwq",
      first_name: "luz",
      cin: "jgzztwe",
      address: "Uhhcdwzibxw",
      telephone: "5568854211",
      permit: "755765322",
      category: "New Customer",
      photos: "",
      create_at: "2024-06-04 10:40:10",
    },
    {
      name: "testing",
      first_name: "luz",
      cin: "jgzztwe",
      address: "Uhhcdwzibxw",
      telephone: "5568854211",
      permit: "755765322",
      category: "New Customer",
      photos: "",
      create_at: "2024-06-04 10:40:10",
    },
    {
      name: "testing 2",
      first_name: "luz",
      cin: "jgzztwe",
      address: "Uhhcdwzibxw",
      telephone: "5568854211",
      permit: "755765322",
      category: "New Customer",
      photos: "",
      create_at: "2024-06-04 10:40:10",
    },
  ];

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name || "N/A",
    },
    {
      name: "First Name",
      selector: (row) => row?.first_name || "N/A",
    },
    {
      name: "CIN",
      selector: (row) => row?.cin || "N/A",
    },
    {
      name: "Address",
      selector: (row) => (row.address ? row.address : "-"),
      wrap: true,
    },
    {
      name: "Telephone",
      selector: (row) => (row.telephone ? row.telephone : "-"),
    },
    {
      name: "Permit",
      selector: (row) => row.permit,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      minWidth: "130px",
    },
    {
      name: "Photos",
      cell: (row) => (
        <div className="bg-primary-700 text-black py-2 px-3 rounded-full text-sm">
          View
        </div>
      ),
    },
    {
      name: "Created At",
      selector: (row) => row.create_at,
      wrap: true,
    },
  ];

  const conditionalRowStyles = [
    {
      when: (row) => row,
      style: {
        height: "60px",
        borderWidth: "0px",
      },
    },
    {
      when: (row) => row.id % 2 === 0,
      style: {
        borderWidth: "0px",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
      },
    },
  ];

  return (
    <Layout>
      <div className="w-full flex flex-col gap-6 py-10 px-8">
        <div className="w-full bg-[#3b3b3b] py-5 px-6 rounded-xl flex items-center">
          <div className="flex-1 text-2xl bold text-white">Customers</div>
          <button className="flex items-center gap-1.5 bg-primary-700 text-black py-2.5 px-5 rounded-[8px] animation hover:opacity-90">
            <PlusIcon className="h-5 w-5 mb-1" />
            <span>Add Customer</span>
          </button>
        </div>
        <div className="w-full bg-[#3b3b3b] py-5 px-6 rounded-xl flex flex-col gap-5">
          <div className="w-full flex items-center flex-wrap gap-4">
            <input
              placeholder="Name"
              className="w-full max-w-[200px] h-[36px] border-[1px] border-solid border-gray-300 bg-transparent rounded-lg px-3 text-sm text-white"
            />
            <input
              placeholder="First name"
              className="w-full max-w-[200px] h-[36px] border-[1px] border-solid border-gray-300 bg-transparent rounded-lg px-3 text-sm text-white"
            />
            <input
              placeholder="CIN"
              className="w-full max-w-[200px] h-[36px] border-[1px] border-solid border-gray-300 bg-transparent rounded-lg px-3 text-sm text-white"
            />
            <input
              placeholder="Address"
              className="w-full max-w-[200px] h-[36px] border-[1px] border-solid border-gray-300 bg-transparent rounded-lg px-3 text-sm text-white"
            />
            <input
              placeholder="Telephone"
              className="w-full max-w-[200px] h-[36px] border-[1px] border-solid border-gray-300 bg-transparent rounded-lg px-3 text-sm text-white"
            />
            <input
              placeholder="Permit"
              className="w-full max-w-[200px] h-[36px] border-[1px] border-solid border-gray-300 bg-transparent rounded-lg px-3 text-sm text-white"
            />
            <input
              placeholder="Category"
              className="w-full max-w-[200px] h-[36px] border-[1px] border-solid border-gray-300 bg-transparent rounded-lg px-3 text-sm text-white"
            />
            <input
              placeholder="Created At"
              className="w-full max-w-[200px] h-[36px] border-[1px] border-solid border-gray-300 bg-transparent rounded-lg px-3 text-sm text-white"
            />
            <input
              placeholder="Updated At"
              className="w-full max-w-[200px] h-[36px] border-[1px] border-solid border-gray-300 bg-transparent rounded-lg px-3 text-sm text-white"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 bg-primary-700 text-black py-2.5 px-5 rounded-[8px] animation hover:opacity-90">
              Advance Search
            </button>
            <button className="flex items-center gap-1.5 bg-secondary-700 text-black py-2.5 px-5 rounded-[8px] animation hover:opacity-90">
              Reset
            </button>
          </div>
        </div>
        <div className="w-full bg-[#3b3b3b] py-5 px-6 rounded-xl flex flex-col gap-5">
          <div className="w-full flex items-center">
            <div className="flex-1 text-2xl bold text-white">
              Customers List
            </div>
            <button className="flex items-center gap-1.5 bg-primary-700 text-black py-2.5 px-5 rounded-[8px] animation hover:opacity-90">
              <TrashIcon className="h-5 w-5 mb-1" />
              <span>View Trash</span>
            </button>
          </div>
          <div>
            <Table
              columns={columns}
              data={data?.length ? data : []}
              pagination
              conditionalRowStyles={conditionalRowStyles}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
