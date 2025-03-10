export default function Habilidades(){
    const webSkills = {
        frontend: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS'],
        backend: ['Node.js', 'Python', 'Django', 'PHP', 'SQL']
    };
    
    const gameDevSkills = ['Godot Engine', 'GDScript', 'Game Design', '2D Animation'];

    return(
        <section className="flex flex-col justify-center items-center gap-8 mt-20">
            <h1 className="text-3xl text-amber-300 font-bold">Minhas Habilidades</h1>
            
            <div className="flex flex-col">
                <div className="space-y-4">
                    <h2 className="text-2xl text-amber-200 font-semibold">Desenvolvimento Web</h2>
                    
                    <div className="space-y-4">
                        <h3 className="text-xl text-amber-100">Front-end</h3>
                        <div className="flex flex-wrap gap-3">
                            {webSkills.frontend.map((skill, index) => (
                                <div key={`frontend-${index}`} className="text-white rounded-2xl p-3 cursor-pointer border border-gray-200 shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                    <p>{skill}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl text-amber-100">Back-end</h3>
                        <div className="flex flex-wrap gap-3">
                            {webSkills.backend.map((skill, index) => (
                                <div key={`backend-${index}`} className="text-white rounded-2xl p-3 cursor-pointer border border-gray-200 shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                    <p>{skill}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl text-amber-200 font-semibold">Game Development</h2>
                    <div className="flex flex-wrap gap-3">
                        {gameDevSkills.map((skill, index) => (
                            <div key={`gamedev-${index}`} className="text-white rounded-2xl p-3 cursor-pointer border border-gray-200 shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <p>{skill}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}