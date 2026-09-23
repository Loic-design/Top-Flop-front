"use server";

import { redirect } from "next/navigation";
// conserve les données (mais ne se mange pas)
import { cookies } from "next/headers";

// Inscription

export async function handleSubmit(previousState,formData) {
  // contient les données saisies par le formulaire
  const data = Object.fromEntries(formData);
  // si les champs sont vides
  if (!data.name || !data.email || !data.password) {
    return {
      error: "Formulaire incomplet",
    };
  }

  const res = await fetch(`${process.env.URL_WEB_API}/auth/register`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      password: data.password,
    })
  });

  //si pas ok
  if (!res.ok) {
    const errorData = await res.json()
    return {
      error: errorData.error
    };
  }

  return {
    success: "Compte créé avec succès"
  }
}

// Connexion

export async function handleLogin(previousState, formData) {
  const data = Object.fromEntries(formData);
  const res = await fetch(`${process.env.URL_WEB_API}/auth/login`, {
    method: "POST",
    headers: {
        "Content-type": "application/json",
    },
    body: JSON.stringify({
        email: data.email,
        password: data.password,
    }),
});

  if (!res.ok) {
    const errorData = await res.json()
    return {
      error: errorData.error
    };
  }
  
  // Json => objet
  const result = await res.json();
  const cookieStore = await cookies();
  // token => cookie
  cookieStore.set("token", result.token);
  
  redirect('/create-lobby')

}

export async function checkAuthentication() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return token?.value;
}
