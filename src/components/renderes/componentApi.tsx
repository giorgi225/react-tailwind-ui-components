import { ComponentApi } from "@/config/components/base.config";
import { Paragraph, Strong } from "../ui/common/typography";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

type Props = {
  api: ComponentApi[];
};

export default function ComponentApiRenderer({ api }: Props) {
  return (
    <Table className="w-full border-collapse">
      <TableHeader className="hidden md:table-header-group">
        <TableRow className="bg-foreground/5">
          <TableHead className="">Prop</TableHead>
          <TableHead className="">Description</TableHead>
          <TableHead className="">Type</TableHead>
          <TableHead className="">Default</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="block md:table-row-group">
        {api.map((compApi) => (
          <TableRow
            key={compApi.prop}
            className="block mb-4 md:table-row border-b md:border-none"
          >
            {/* Row for mobile: Prop + Description */}
            <TableCell className="block md:table-cell font-bold">
              {compApi.prop}
            </TableCell>
            <TableCell className="block max-w-[260px] whitespace-normal md:table-cell ">
              {compApi.description}
            </TableCell>

            {/* Row for mobile: Type + Default */}
            <TableCell className="block md:hidden  font-bold">Type</TableCell>
            <TableCell className="block md:table-cell ">
              <div className="flex gap-3 flex-wrap">
                {compApi.types.map((t) => (
                  <span key={t} className="bg-background p-1.5">{t}</span>
                ))}
              </div>
            </TableCell>

            <TableCell className="block md:hidden font-bold">Default</TableCell>
            <TableCell className="block md:table-cell ">
              {compApi.default}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
