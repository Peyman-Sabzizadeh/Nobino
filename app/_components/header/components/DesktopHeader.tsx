import { Button, Link } from "@heroui/react";
import Logo from "../../Logo";
import Menu from "./Menu";
import { Speech } from "lucide-react";
import Search from "./Search";
import { ThemeSwitcher } from "../../ThemeSwitcher";
import ProfileMenu from "./ProfileMenu";

export default function DesktopHeader() {
  return (
    <header className="mt-2 flex items-center justify-between gap-1 rounded-lg bg-gray-200 p-1 px-3 dark:bg-gray-600">
      <Logo type="logo-name" />
      <div className="flex items-center justify-between space-x-2">
        <Menu trigger="تخصص ها" items={["قلب", "مغز و اعصاب"]} />
        <Menu trigger="مراکز" items={["بیمارستان", "مطب", "کلینیک"]} />
        <Button as={Link} color="primary" href="/" variant="shadow">
          <Speech size="18px" />
          مشاوره آنلاین
        </Button>
      </div>
      <div className="flex items-center justify-between space-x-1.5">
        <Search />
        <ThemeSwitcher />
        <ProfileMenu />
      </div>
    </header>
  );
}
