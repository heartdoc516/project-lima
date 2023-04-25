import { useState } from "react";
import iconAttributes from "../utils/iconAttributes";
import iconBackgroundColors from "../utils/iconBackgroundColors";
import { gear } from "../assets";
import { motion } from "framer-motion";

function NewIconCard({ className }) {
  const [formData, setFormData] = useState({
    subject: "",
    attribute: "",
    backgroundColor: "",
  });
  const [icon, setIcon] = useState("");
  const [error, setError] = useState(null);
  const [generating, setGenerating] = useState(false);

  function handleSubjectInput(e) {
    setFormData({ ...formData, subject: e.target.value });
  }

  function handleAttributeInput(e) {
    e.preventDefault();

    setFormData({ ...formData, attribute: e.target.value });
  }

  function handleColorInput(e, value) {
    e.preventDefault();

    setFormData({ ...formData, backgroundColor: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setGenerating(true);
    if (!formData.subject) {
      setError("Enter the subject of your icon");
      return;
    }
    if (!formData.attribute) {
      setError("Select the attribute of your icon");
      return;
    }
    if (!formData.backgroundColor) {
      setError("Enter the background color of your icon");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/v1/dalle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      setIcon(`data:image/jpeg;base64,${data.photo}`);
    } catch (err) {
      alert(err);
    } finally {
      setGenerating(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-row bg-stone-800 rounded-lg  ${className}`}
    >
      <div className="flex flex-row items-center rounded-l-lg bg-gray-200 w-1/3 ">
        {!generating && icon ? (
          <img src={icon} alt="icon" className="w-20 mx-auto rounded-md" />
        ) : (
          <motion.img
            initial={{ rotate: 0 }}
            animate={generating ? { rotate: 1000 } : { rotate: 0 }}
            transition={generating ? { duration: 15 } : { duration: 0 }}
            src={gear}
            alt="gear"
            className="w-20 mx-auto"
          />
        )}
      </div>
      <div className=" rounded-lg w-2/3 py-8 px-4 ">
        <div className="flex flex-col items-center">
          <label htmlFor="Subject" className="text-white text-center">
            Subject
          </label>
          <input
            onChange={(e) => handleSubjectInput(e)}
            type="text"
            id="Subject"
            name="Subject"
            placeholder="e.g. Panda, car, watermelon, anything"
            className="text-gray-300 bg-stone-600 rounded-lg w-1/2 px-4 py-2 text-sm focus:outline-0 mt-4"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-white text-center mt-6">Attribute</h2>
          <div className="flex flex-row flex-wrap gap-3 mt-4">
            {iconAttributes.map((attribute) => (
              <button
                onClick={(e) => handleAttributeInput(e)}
                value={attribute}
                key={attribute}
                className={
                  formData.attribute === attribute
                    ? `bg-stone-300 rounded-full py-2 px-4 max-w-fit text-gray-900`
                    : `bg-stone-500 rounded-full py-2 px-4 max-w-fit text-gray-300`
                }
              >
                {attribute}
              </button>
            ))}
          </div>

          <h2 className="text-white text-center mt-6">Background</h2>
          <div className="flex flex-row flex-wrap gap-3 mt-4">
            {iconBackgroundColors.map((item) => (
              <button
                type="button"
                onClick={(e) => handleColorInput(e, item.title)}
                value={item.title}
                key={item.title}
                className={
                  formData.backgroundColor === item.title
                    ? `rounded-full bg-stone-300 px-3 py-1 max-w-fit text-gray-900`
                    : `rounded-full bg-stone-600 px-3 py-1 max-w-fit text-gray-300`
                }
              >
                <div className="flex flex-row items-center justify-arround gap-2">
                  <div className={`${item.color} h-4 w-4 rounded-full`}></div>
                  {item.title}
                </div>
              </button>
            ))}
          </div>
        </div>
        {error && (
          <p className="bg-red-500/50 text-white text-center px-4 py-2 rounded-lg mt-6">
            {error}
          </p>
        )}
        <button
          type="submit"
          className="bg-emerald-500 w-full rounded-full mt-10 py-1 text-white text-lg font-semibold"
        >
          {generating ? "GENERATING YOUR ICON..." : "GENERATE ICON"}
        </button>
      </div>
    </form>
  );
}

export default NewIconCard;
