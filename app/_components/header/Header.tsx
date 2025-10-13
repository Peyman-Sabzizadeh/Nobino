import { Link, Button } from "@heroui/react";
import Logo from "../Logo";
import Menu from "./components/Menu";
import { Speech } from "lucide-react";
import Search from "./components/Search";
import { ThemeSwitcher } from "../ThemeSwitcher";

export default function Header() {
  return (
    <header className="mt-2 flex items-center justify-between rounded-lg bg-gray-200 p-1 dark:bg-gray-600">
      <Logo />
      <div className="flex items-center justify-between space-x-2">
        <Menu trigger="تخصص ها" items={["قلب", "مغز و اعصاب"]} />
        <Menu trigger="مراکز" items={["بیمارستان", "مطب", "کلینیک"]} />
        <Button as={Link} color="primary" href="/" variant="shadow">
          <Speech size="18px" />
          مشاوره آنلاین
        </Button>
      </div>
      <div className="flex items-center justify-between space-x-2">
        <Search />
        <ThemeSwitcher />
      </div>
    </header>
  );
}
