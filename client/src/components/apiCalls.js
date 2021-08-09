export const loginUser = async (cred) => {
  const data = await fetch("/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cred),
  });
  const response = await data.json();
  if (data.ok) {
    localStorage.setItem("user", JSON.stringify(response));
    window.location = "/";
  } else {
    alert("wrong cred");
  }
};

export const signupUser = async (cred) => {
  const data = await fetch("/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cred),
  });
  await data.json();
  if (data.ok) {
    window.location = "/login";
  } else {
    alert("soemthing went wrong");
  }
};

export const fetchPosts = async () => {
  const data = await fetch("/posts");
  const response = await data.json();
  return response;
};
