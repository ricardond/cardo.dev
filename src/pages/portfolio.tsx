import Card from "@/components/Card";

export default function Projetos(){
    return(
        <section className="flex flex-col justify-center items-center flex-wrap gap-5 mt-20">
            <h1 className="text-3xl text-amber-300 font-bold">Meu Portfólio</h1>
            <div className="flex flex-wrap gap-5 w-full justify-center items-center">
                <Card titulo="Onepedia" desc="Site sobre assuntos relacionados a Onepiece." image="https://onepedia.netlify.app/img/background.jpg" abrirProjeto="https://onepedia.netlify.app/"/>
                <Card titulo="Game: Cubic War" desc="Jogo de autoria própria. Foi utilizada a Godot Engine para o desenvolvimento." image="https://img.itch.zone/aW1nLzE4NjYwODUzLnBuZw==/original/BVOvET.png" abrirProjeto="https://ricardond.itch.io/cubic-war"/>
                <Card titulo="Rocket Software" desc="Fui programador da equipe Rocket Software onde foram criados sistemas SAAS." image="https://fsspe.petrolina.ifsertaope.edu.br/rocketsoftware/img/Rocket%20Software.png" abrirProjeto="https://fsspe.petrolina.ifsertaope.edu.br/rocketsoftware/"/>
                <Card titulo="Game: Zoro Run" desc="Jogo com temática do Zoro, criado com canvas + Javascript." image="https://github.com/ricardond/zororun/assets/96152954/56bf2ad8-e56e-4f3e-a9ee-c582f317b9bb" abrirProjeto="https://ricardond.github.io/zororun/"/>
            </div>
        </section>
    )
}