export default function CreateSalon() {
    return (
        <main className="min-h-screen bg-zinc-950 px-5 py-10 text-white">
            <section className="mx-auto w-full max-w-md">

                <h1 className="mb-8 text-center text-3xl font-bold">
                    Créer un salon
                </h1>

                <form className="flex flex-col gap-5 rounded-2xl bg-white p-6 text-zinc-900 shadow-xl">

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="player-name"
                            className="text-sm font-semibold"
                        >
                            Nom du joueur
                        </label>

                        <input
                            type="text"
                            name="playerName"
                            id="player-name"
                            className="rounded-xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="team-name"
                            className="text-sm font-semibold"
                        >
                            Nom de l'équipe
                        </label>

                        <input
                            type="text"
                            name="teamName"
                            id="team-name"
                            className="rounded-xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="salon-name"
                            className="text-sm font-semibold"
                        >
                            Nom du salon
                        </label>

                        <input
                            type="text"
                            name="salonName"
                            id="salon-name"
                            className="rounded-xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-2 w-full rounded-xl bg-zinc-950 px-4 py-3 font-bold text-white transition hover:bg-zinc-800 active:scale-[0.98]"
                    >
                        Créer le salon
                    </button>

                </form>
            </section>
        </main>
    );
}