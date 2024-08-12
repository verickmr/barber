import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Victor!</h2>
        <p>Segunda-feria, 12 de agosto.</p>
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button><SearchIcon/></Button>
        </div>
        <div className="mt-6 relative h-[150px] w-full">
          <Image alt="Agende nos melhores" src='/banner-01.png' fill className="rounded-xl object-cover"/>
        </div>

      </div>
    </>
  );
}
