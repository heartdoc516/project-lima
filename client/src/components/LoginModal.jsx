import { useRef, useState } from "react";
import Modal from "react-modal";
import { useUser } from "./UserContext";

const registerContent = {
  apiRoute: "register",
  linkText: "Already have an account?",
  header: "Create a new account",
  buttonText: "Create Account",
};

const signinContent = {
  apiRoute: "login",
  linkText: "Don't have an account?",
  header: "Sin In",
  buttonText: "Sign In",
};

const LoginModal = () => {
  const [user, setUser] = useUser();
  const [error, setError] = useState(null);
  const [formContent, setFormContent] = useState(signinContent);

  const username = useRef("");
  const password = useRef("");

  const [modalIsOpen, setIsOpen] = useState(false);
  Modal.setAppElement("#login-modal");

  console.log(error);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleFormContentToggle() {
    formContent === registerContent
      ? setFormContent(signinContent)
      : setFormContent(registerContent);
  }

  async function handleLogin(e) {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:8080/${formContent.apiRoute}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.current?.value,
          password: password.current?.value,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      setError(data.data);
    } else {
      setUser(data.data);
      sessionStorage.setItem("username", data.data.username);
      sessionStorage.setItem("id", data.data.id);
      sessionStorage.setItem("password", data.data.password);
    }
  }

  return (
    <>
      <button onClick={openModal} className="text-white bg-green-600 px-6 py-3">
        Log In
      </button>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={closeModal}
        className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 w-1/3 bg-blue-900 mx-auto p-10"
        overlayclassName="flex flex-row  top-0 bottom-0 left-0 right-0 items-center bg-stone-700/50"
      >
        <form onSubmit={handleLogin}>
          <h2 className="text-center text-white text-3xl">
            {formContent.header}
          </h2>
          {error && <p className="text-white bg-red-500">{error}</p>}
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              ref={username}
              type="text"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="username"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              ref={password}
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <button
            type="button"
            onClick={handleFormContentToggle}
            className="text-white"
          >
            {formContent.linkText}
          </button>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-40 mx-auto block text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </Modal>
    </>
  );
};

export default LoginModal;
