import { useState, useEffect } from "react";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import Layout from "components/layout";
import { Table } from "components";
import { getCustomerList } from "../../redux/axios";
import { ImagePreviewModal } from "components/modals";

const data = [
  {
    idClient: 21,
    Nom: "fkfmf",
    Prenom: "oooppp",
    CIN: "h7kh8g",
    Adresse: "fergergegegre",
    Tel: "675765775",
    Permis: "hrhrth",
    category: "Trusted",
    photo1: "uploads/imagea96f1ce2e55d3dda.png",
    photo2: null,
    photo3: null,
    isBlacklisted: 0,
    created_at: "2024-07-04 08:14:21",
    last_modified_at: "2024-07-04 08:14:21",
    deleted_at: null,
    user_id: 7,
  },
  {
    idClient: 18,
    Nom: "wefwe",
    Prenom: "wefwef",
    CIN: "8787ee",
    Adresse: "fsdfdsfsds",
    Tel: "sdfsdfs",
    Permis: "sdfsdf",
    category: "Trusted",
    photo1: "uploads/imagea96f1ce2e55d3dda.png",
    photo2: null,
    photo3: null,
    isBlacklisted: 0,
    created_at: "2024-06-27 17:25:42",
    last_modified_at: "2024-06-27 17:25:42",
    deleted_at: null,
    user_id: 7,
  },
  {
    idClient: 17,
    Nom: "ui",
    Prenom: "aw",
    CIN: "lk9765",
    Adresse: "8g676d676d7",
    Tel: "876876876876",
    Permis: "75765765",
    category: "Unreliable",
    photo1: "uploads/imagea96f1ce2e55d3dda.png",
    photo2: null,
    photo3: null,
    isBlacklisted: 0,
    created_at: "2024-06-23 14:24:04",
    last_modified_at: "2024-06-23 14:24:04",
    deleted_at: null,
    user_id: 7,
  },
  {
    idClient: 15,
    Nom: "John",
    Prenom: "Doe",
    CIN: "12345678",
    Adresse: "123 Main St",
    Tel: "123-456-7890",
    Permis: "AB12345",
    category: "VIP",
    photo1: "uploads/imagea96f1ce2e55d3dda.png",
    photo2: "",
    photo3: "",
    isBlacklisted: 0,
    created_at: "2024-06-22 22:39:24",
    last_modified_at: "2024-09-20 09:21:31",
    deleted_at: null,
    user_id: 7,
  },
  {
    idClient: 14,
    Nom: "Tester",
    Prenom: "Testing",
    CIN: "112233",
    Adresse: "test address",
    Tel: "1312312321322",
    Permis: "asdf",
    category: "Unreliable",
    photo1: "uploads/imagea96f1ce2e55d3dda.png",
    photo2: "2.jpg",
    photo3: "1719090578.jpg",
    isBlacklisted: 0,
    created_at: "2024-06-22 21:09:49",
    last_modified_at: "2024-07-14 15:05:00",
    deleted_at: null,
    user_id: 7,
  },
  {
    idClient: 10,
    Nom: "Rwq",
    Prenom: "Iuz",
    CIN: "Jgzztswe",
    Adresse: "Uhhhcdwzibxw",
    Tel: "5568854211",
    Permis: "755765322",
    category: "New Customer",
    photo1: "cd5491e5-c919-4d5c-a250-ff84ccde4a4c.jpeg",
    photo2: null,
    photo3: null,
    isBlacklisted: 0,
    created_at: "2024-06-04 10:40:10",
    last_modified_at: "2024-06-04 10:45:22",
    deleted_at: null,
    user_id: 7,
  },
];

export default function Customers() {
  const [openImageModal, setOpenImageModal] = useState(false);
  const [filteredData, setFilteredData] = useState(data || []);
  const [photos, setPhotos] = useState("");
  const [showReset, setShowReset] = useState(false);
  const [filters, setFilters] = useState({
    name: "",
    firstName: "",
    cin: "",
    address: "",
    telephone: "",
    permis: "",
    category: "",
    created_at: "",
    updated_at: "",
  });

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const res = await getCustomerList();
        console.log("res...", res);
        // Optionally: set some state with the data
      } catch (error) {
        console.error("Error fetching customer list:", error);
      }
    };
    fetchCustomers();
  }, []);

  const columns = [
    {
      name: "Name",
      selector: (row) => row.Nom || "N/A",
    },
    {
      name: "First Name",
      selector: (row) => row?.Prenom || "N/A",
    },
    {
      name: "CIN",
      selector: (row) => row?.CIN || "N/A",
    },
    {
      name: "Address",
      selector: (row) => (row.Adresse ? row.Adresse : "-"),
      wrap: true,
    },
    {
      name: "Telephone",
      selector: (row) => (row.Tel ? row.Tel : "-"),
    },
    {
      name: "Permis",
      selector: (row) => (row.Permis ? row.Permis : "-"),
    },
    {
      name: "Category",
      selector: (row) => (row.category ? row.category : "-"),
      minWidth: "130px",
    },
    {
      name: "Photos",
      cell: (row) => (
        <button
          onClick={() => {
            if (row.photo1) {
              setPhotos(row.photo1);
              setOpenImageModal(true);
            } else {
              alert("No photo available");
            }
          }}
          className="bg-primary-700 text-black py-2 px-3 rounded-full text-sm"
        >
          View
        </button>
      ),
    },
    {
      name: "Created At",
      selector: (row) => row.created_at,
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

  const handleFilterInput = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdvanceSearch = () => {
    let _filteredData = data.filter((x) => {
      if (x) {
        return (
          (!filters.name ||
            x.Nom.toLowerCase().includes(filters.name.toLowerCase())) &&
          (!filters.firstName ||
            x.Prenom.toLowerCase().includes(filters.firstName.toLowerCase())) &&
          (!filters.cin ||
            x.CIN.toLowerCase().includes(filters.cin.toLowerCase())) &&
          (!filters.address ||
            x.Adresse.toLowerCase().includes(filters.address.toLowerCase())) &&
          (!filters.telephone ||
            x.Tel.toLowerCase().includes(filters.telephone.toLowerCase())) &&
          (!filters.permis ||
            x.Permis.toLowerCase().includes(filters.permis.toLowerCase())) &&
          (!filters.category ||
            x.category
              .toLowerCase()
              .includes(filters.category.toLowerCase())) &&
          (!filters.created_at ||
            x.created_at
              .toLowerCase()
              .includes(filters.created_at.toLowerCase())) &&
          (!filters.updated_at ||
            x.updated_at
              .toLowerCase()
              .includes(filters.updated_at.toLowerCase()))
        );
      }
      return false;
    });
    setShowReset(true);
    setFilteredData(_filteredData);
  };

  const handleResetFilters = () => {
    setFilters({
      name: "",
      firstName: "",
      cin: "",
      address: "",
      telephone: "",
      permit: "",
      category: "",
      created_at: "",
      updated_at: "",
    });
    setFilteredData(data);
    setShowReset(false);
  };

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
              name="name"
              placeholder="Name"
              value={filters.name}
              onChange={handleFilterInput}
              className="w-full max-w-[200px] h-[36px] border-[1px] border-solid border-gray-300 bg-transparent rounded-lg px-3 text-sm text-white"
            />
            <input
              name="firstName"
              placeholder="First name"
              value={filters.firstName}
              onChange={handleFilterInput}
              className="w-full max-w-[200px] h-[36px] border-[1px] border-solid border-gray-300 bg-transparent rounded-lg px-3 text-sm text-white"
            />
            <input
              name="cin"
              placeholder="CIN"
              value={filters.cin}
              onChange={handleFilterInput}
              className="w-full max-w-[200px] h-[36px] border-[1px] border-solid border-gray-300 bg-transparent rounded-lg px-3 text-sm text-white"
            />
            <input
              name="address"
              placeholder="Address"
              value={filters.address}
              onChange={handleFilterInput}
              className="w-full max-w-[200px] h-[36px] border-[1px] border-solid border-gray-300 bg-transparent rounded-lg px-3 text-sm text-white"
            />
            <input
              name="telephone"
              placeholder="Telephone"
              value={filters.telephone}
              onChange={handleFilterInput}
              className="w-full max-w-[200px] h-[36px] border-[1px] border-solid border-gray-300 bg-transparent rounded-lg px-3 text-sm text-white"
            />
            <input
              name="permis"
              placeholder="Permis"
              value={filters.permis}
              onChange={handleFilterInput}
              className="w-full max-w-[200px] h-[36px] border-[1px] border-solid border-gray-300 bg-transparent rounded-lg px-3 text-sm text-white"
            />
            <input
              name="category"
              placeholder="Category"
              value={filters.category}
              onChange={handleFilterInput}
              className="w-full max-w-[200px] h-[36px] border-[1px] border-solid border-gray-300 bg-transparent rounded-lg px-3 text-sm text-white"
            />
            <input
              name="created_at"
              placeholder="Created At"
              value={filters.created_at}
              onChange={handleFilterInput}
              className="w-full max-w-[200px] h-[36px] border-[1px] border-solid border-gray-300 bg-transparent rounded-lg px-3 text-sm text-white"
            />
            <input
              name="updated_at"
              placeholder="Updated At"
              value={filters.updated_at}
              onChange={handleFilterInput}
              className="w-full max-w-[200px] h-[36px] border-[1px] border-solid border-gray-300 bg-transparent rounded-lg px-3 text-sm text-white"
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleAdvanceSearch}
              className="flex items-center gap-1.5 bg-primary-700 text-black py-2.5 px-5 rounded-[8px] animation hover:opacity-90"
            >
              Advance Search
            </button>
            {showReset && (
              <button
                onClick={handleResetFilters}
                className="flex items-center gap-1.5 bg-secondary-700 text-black py-2.5 px-5 rounded-[8px] animation hover:opacity-90"
              >
                Reset
              </button>
            )}
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
              data={filteredData?.length ? filteredData : []}
              pagination
              conditionalRowStyles={conditionalRowStyles}
            />
          </div>
        </div>
      </div>
      <ImagePreviewModal
        open={openImageModal}
        setOpen={setOpenImageModal}
        image={photos}
      />
    </Layout>
  );
}
