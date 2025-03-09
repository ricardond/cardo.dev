import Card from "@/components/Card";

export default function Projetos(){
    return(
        <section className="flex flex-col justify-center items-center flex-wrap gap-5 mt-20">
            <h1 className="text-3xl text-amber-300 font-bold">Meu Portfólio</h1>
            <div className="flex flex-wrap gap-5 w-full justify-center items-center">
                <Card titulo="Onepedia" desc="Site sobre assuntos relacionados a Onepiece." image="https://onepedia.netlify.app/img/background.jpg" abrirProjeto="https://onepedia.netlify.app/"/>
                <Card titulo="Game: Cubic War" desc="Jogo de autoria própria. Foi utilizada a Godot Engine para o desenvolvimento." image="https://img.itch.zone/aW1nLzE4NjYwODUzLnBuZw==/original/BVOvET.png" abrirProjeto="https://ricardond.itch.io/cubic-war"/>
                <Card titulo="Rocket Software" desc="Fui programador da equipe Rocket Software onde foram criados sistemas SAAS." image="https://fsspe.petrolina.ifsertaope.edu.br/rocketsoftware/img/Rocket%20Software.png" abrirProjeto="https://fsspe.petrolina.ifsertaope.edu.br/rocketsoftware/"/>
                <Card titulo="Game: Zoro Run" desc="Jogo com temática do Zoro, criado com canvas + Javascript." image="https://private-user-images.githubusercontent.com/96152954/285897041-56bf2ad8-e56e-4f3e-a9ee-c582f317b9bb.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDE1MzUwOTEsIm5iZiI6MTc0MTUzNDc5MSwicGF0aCI6Ii85NjE1Mjk1NC8yODU4OTcwNDEtNTZiZjJhZDgtZTU2ZS00ZjNlLWE5ZWUtYzU4MmYzMTdiOWJiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzA5VDE1Mzk1MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWJlNjZiOWQ5MDI0YjVmNDA5YTk4OThjNjk5YThjNzdiYmIwZDJlZDdkODIyZjY4ZTNmZjc5MzVmOWFiNjYxNjcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.7Th8FsA6PXNWzEoDvS-LwjwkomAdW8aUKO7c-hKvR24" abrirProjeto="https://ricardond.github.io/zororun/"/>
            </div>
        </section>
    )
}