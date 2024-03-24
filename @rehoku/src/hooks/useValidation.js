import { useState } from "react";

const useValidation = () => {
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }
    return true;
  };

  const validate = (email, password) => {
    if (!validateEmail(email) || !validatePassword(password)) {
      return false;
    }
    return true;
  };

  return { error, validate };
};

export default useValidation;
