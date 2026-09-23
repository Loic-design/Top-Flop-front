"use client"

import { useActionState } from "react";
import { handleLogin, handleSubmit } from "@/actions/authAction.js"

export default function Authentification() {

    const [registerState,registerFormAction] = useActionState(handleSubmit, null);
    const [loginState,loginFormAction] = useActionState(handleLogin, null);


    return (
        <main className="min-h-screen bg-zinc-950 px-5 py-10 text-white">
            <h1 className="mb-8 text-center text-3xl font-bold">
                Authentification
            </h1>

            <section className="mx-auto w-full max-w-md">
                <h2 className="mb-5 text-center text-2xl font-bold">
                    Mon compte
                </h2>

                <form action={loginFormAction} className="flex flex-col gap-5 rounded-2xl bg-white p-6 text-zinc-900 shadow-xl">
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="login-email"
                            className="text-sm font-semibold"
                        >
                            Adresse e-mail
                        </label>

                        <input
                            type="email"
                            name="email"
                            id="login-email"
                            className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="login-password"
                            className="text-sm font-semibold"
                        >
                            Mot de passe
                        </label>

                        <input
                            type="password"
                            name="password"
                            id="login-password"
                            className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-2 w-full rounded-xl bg-zinc-950 px-4 py-3 font-bold text-white transition hover:bg-zinc-800 active:scale-[0.98]"
                    >
                        Se connecter
                    </button>
                    
                    {/* message erreur ?. empêche de planter. On vérifie puis on affiche*/}
                    {loginState?.error && (
                        <p className="rounded-lg bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
                        {loginState.error}
                        </p>
                    )}
                    {loginState?.success && (
                        <p className="rounded-lg bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                        {loginState.success}
                    </p>
                    )}                    
                </form>

                <div className="my-8 flex items-center gap-4 text-sm font-semibold text-zinc-500">

                    <span className="h-px flex-1 bg-zinc-700" />
                    <span>OU</span>
                    <span className="h-px flex-1 bg-zinc-700" />

                </div>

                <h2 className="mb-5 text-center text-2xl font-bold">
                    Nouveau compte
                </h2>

                <form action={registerFormAction} className="flex flex-col gap-5 rounded-2xl bg-white p-6 text-zinc-900 shadow-xl">
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="input-name"
                            className="text-sm font-semibold"
                        >
                            Nom
                        </label>

                        <input
                            type="text"
                            name="name"
                            id="input-name"
                            className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="input-email"
                            className="text-sm font-semibold"
                        >
                            Adresse e-mail
                        </label>

                        <input
                            type="email"
                            name="email"
                            id="register-email"
                            className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="register-password"
                            className="text-sm font-semibold"
                        >
                            Mot de passe
                        </label>

                        <input
                            type="password"
                            name="password"
                            id="register-password"
                            className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-2 w-full rounded-xl bg-zinc-950 px-4 py-3 font-bold text-white transition hover:bg-zinc-800 active:scale-[0.98]"
                    > 
                        Créer un compte
                    </button>

                    {/* message erreur ?. empêche de planter. On vérifie puis on affiche*/}
                    {registerState?.error && (
                        <p className="rounded-lg bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
                            {registerState.error}
                        </p>
                    )}

                    {registerState?.success && (
                        <p className="rounded-lg bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                            {registerState.success}
                        </p>
                    )}

                </form>
            </section>
        </main>
    );
}