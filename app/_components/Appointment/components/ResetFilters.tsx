import { Button, Tooltip } from "@heroui/react";
import { X } from "lucide-react";

export default function ResetFilters() {
  return (
    <Tooltip content="حذف فیلترها">
      <Button
        isIconOnly
        variant="flat"
        size="sm"
        color="danger"
        aria-label="حذف فیلترها"
      >
        <X size="20px" />
      </Button>
    </Tooltip>
  );
}
