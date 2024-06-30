export const validateLoginFields = (email: string, password: string) => {
  if (!email || !password) {
    return "All fields are required.";
  }

  if (!validateEmail(email)) {
    return "Please enter a valid email address.";
  }

  const passwordError = validatePassword(password);
  if (passwordError) {
    return passwordError;
  }

  return "";
};

export const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validatePassword = (password: string) => {
  if (password.length < 8) {
    return "Password should be at least 8 characters long.";
  }

  const regex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
  if (!regex.test(password)) {
    return "Password should contain at least one letter and one number.";
  }

  return "";
};
