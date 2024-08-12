import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Menu, MenuIcon } from "lucide-react";

function Header() {
  return (
    <Card>
      <CardContent className="flex flex-row items-center p-5 justify-between">
        <Image alt="Logo" src="/logo.png" height={18} width={120} />
        <Button size='icon' variant='outline'><MenuIcon/></Button>
      </CardContent>
    </Card>
  );
}
export default Header;
