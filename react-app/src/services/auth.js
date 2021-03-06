import axios from 'axios'

export const authenticate = async() => {
  const response = await fetch('/api/auth/',{
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
}

export const login = async (email, password) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  return await response.json();
}

export const logout = async () => {
  const response = await fetch("/api/auth/logout", {
    headers: {
      "Content-Type": "application/json",
    }
  });
  return await response.json();
};


export const signUp = async (firstName, lastName, email, password, street,
  town, zip, state, country, imageFile) => {
  
  const formData = new FormData();
  formData.append("first_name", firstName);
  formData.append("last_name", lastName);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("street", street);
  formData.append("town", town);
  formData.append("zip", zip);
  formData.append("state", state);
  formData.append("country", country);
  if (imageFile) formData.append("image_file", imageFile);

  const response = await axios.post("/api/auth/signup", formData, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });

  return await response.data;
}