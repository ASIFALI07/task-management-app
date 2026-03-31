export const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "test@test.com" && password === "1234") {
        resolve({ token: "abc123" });
      } else {
        reject("Invalid email or password");
      }
    }, 1000); // simulate API delay
  });
};
