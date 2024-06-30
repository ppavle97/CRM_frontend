export const validateRegisterFields = (
  email: string,
  password: string,
  fullName: string
) => {
  if (!email || !password || !fullName) {
    return "All fields are required.";
  }

  if (!validateEmail(email)) {
    return "Please enter a valid email address.";
  }

  const passwordError = validatePassword(password);
  if (passwordError) {
    return passwordError;
  }

  const fullNameError = validateFullName(fullName);
  if (fullNameError) {
    return fullNameError;
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

export const validateFullName = (fullName: string) => {
  if (!fullName) {
    return "Full name field is required.";
  }

  if (fullName.length < 5) {
    return "Full name should be at least 5 characters long.";
  }

  return "";
};
