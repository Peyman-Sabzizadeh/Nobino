import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Button,
  useDisclosure,
} from "@heroui/react";
import { FilterIcon } from "lucide-react";
import Filters from "./Filters";
import type { FilterDataType } from "@/app/_types/filter";
import ResetFilters from "./ResetFilters";

export default function MobileFilter({
  filterData,
}: {
  filterData: FilterDataType;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="w-fit">
        <FilterIcon size="18px" />
        فیلتر
      </Button>
      <Drawer
        placement="bottom"
        hideCloseButton
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="pb-3"
      >
        <DrawerContent>
          <DrawerHeader className="flex items-center justify-between gap-2">
            <div>
              <h2 className="text-lg font-semibold">فیلتر</h2>
              <p className="text-sm text-gray-500">
                انتخاب فیلترهای مورد نظر برای جستجوی بهتر
              </p>
            </div>
            <ResetFilters title="لغو فیلترها" />
          </DrawerHeader>
          <DrawerBody>
            <Filters filterData={filterData} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
