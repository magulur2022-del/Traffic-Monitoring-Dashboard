import { useState, useEffect } from "react";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaSave,
  FaTimes,
  FaSearch,
} from "react-icons/fa";

const defaultData = [
  {
    id: 1,
    name: "Brodipet Junction",
    traffic: "Heavy",
    signal: "Red",
  },
  {
    id: 2,
    name: "Lodge Center",
    traffic: "Moderate",
    signal: "Yellow",
  },
  {
    id: 3,
    name: "NTR Bus Stand",
    traffic: "Heavy",
    signal: "Red",
  },
  {
    id: 4,
    name: "Lakshmipuram",
    traffic: "Low",
    signal: "Green",
  },
];

const TrafficJunctionManager = () => {
  const [junctions, setJunctions] = useState([]);
  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    id: null,
    name: "",
    traffic: "Normal",
    signal: "Green",
  });

  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("junctions");

    if (saved) {
      setJunctions(JSON.parse(saved));
    } else {
      setJunctions(defaultData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("junctions", JSON.stringify(junctions));
  }, [junctions]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (form.name.trim() === "") {
      alert("Enter Junction Name");
      return;
    }

    if (editing) {
      setJunctions(
        junctions.map((item) =>
          item.id === form.id ? form : item
        )
      );
      setEditing(false);
    } else {
      setJunctions([
        ...junctions,
        {
          ...form,
          id: Date.now(),
        },
      ]);
    }

    setForm({
      id: null,
      name: "",
      traffic: "Normal",
      signal: "Green",
    });
  };

  const handleEdit = (item) => {
    setEditing(true);
    setForm(item);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this junction?")) {
      setJunctions(junctions.filter((item) => item.id !== id));
    }
  };

  const filtered = junctions.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-3xl font-bold text-blue-700 mb-6">
        🚦 Traffic Junction Management
      </h2>

      <div className="grid md:grid-cols-4 gap-4 mb-8">

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Junction Name"
          className="border rounded-xl p-3"
        />

        <select
          name="traffic"
          value={form.traffic}
          onChange={handleChange}
          className="border rounded-xl p-3"
        >
          <option>Low</option>
          <option>Normal</option>
          <option>Moderate</option>
          <option>Heavy</option>
        </select>

        <select
          name="signal"
          value={form.signal}
          onChange={handleChange}
          className="border rounded-xl p-3"
        >
          <option>Green</option>
          <option>Yellow</option>
          <option>Red</option>
        </select>

        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-3 flex justify-center items-center gap-2"
        >
          {editing ? <FaSave /> : <FaPlus />}
          {editing ? "Update" : "Add"}
        </button>

      </div>

      <div className="flex items-center border rounded-xl px-4 mb-6">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search Junction..."
          className="w-full p-3 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <table className="w-full border rounded-xl overflow-hidden">

        <thead className="bg-blue-600 text-white">

          <tr>
            <th className="p-3">Junction</th>
            <th className="p-3">Traffic</th>
            <th className="p-3">Signal</th>
            <th className="p-3">Actions</th>
          </tr>

        </thead>

        <tbody>

          {filtered.map((item) => (
            <tr key={item.id} className="border-b text-center">

              <td className="p-3">{item.name}</td>
              <td className="p-3">{item.traffic}</td>
              <td className="p-3">{item.signal}</td>

              <td className="p-3 flex justify-center gap-3">

                <button
                  onClick={() => handleEdit(item)}
                  className="bg-yellow-500 text-white p-2 rounded-lg"
                >
                  <FaEdit />
                </button>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-600 text-white p-2 rounded-lg"
                >
                  <FaTrash />
                </button>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default TrafficJunctionManager;