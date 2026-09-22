"use server";

import { redirect } from "next/navigation";

export async function handleSubmit(formData) {
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
    }),
  });

  //erreur
  if (!res.ok) {
    return {
      error: "Une erreur est apparue",
    };
  }

  redirect("/create-salon");
  //   const result = await res.json();
}
