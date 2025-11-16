import { ComponentApi } from "@/config/components/base.config";
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
    <div className="w-full grid overflow-hidden rounded-lg border border-border bg-background">
      <div className="relative w-full overflow-auto">
        <Table className="w-full">
          {/* Desktop Header */}
          <TableHeader className="hidden lg:table-header-group">
            <TableRow className="border-b border-border bg-muted/50 hover:bg-muted/50">
              <TableHead className="px-4 py-3 text-left font-semibold text-foreground">
                Prop
              </TableHead>
              <TableHead className="px-4 py-3 text-left font-semibold text-foreground">
                Description
              </TableHead>
              <TableHead className="px-4 py-3 text-left font-semibold text-foreground">
                Type
              </TableHead>
              <TableHead className="px-4 py-3 text-left font-semibold text-foreground">
                Default
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="lg:table-row-group">
            {api.map((compApi, index) => (
              <TableRow
                key={compApi.prop}
                className={`block lg:table-row border-b border-border transition-colors hover:bg-muted/20 ${
                  index === api.length - 1 ? "lg:border-b-0" : ""
                }`}
              >
                {/* Mobile Layout */}
                <div className="block lg:hidden p-4 space-y-3">
                  {/* Prop & Description Row */}
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-start justify-between">
                      <span className="font-semibold text-sm text-foreground">
                        {compApi.prop}
                      </span>
                      {compApi.default && (
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                          Default: {compApi.default}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {compApi.description}
                    </p>
                  </div>

                  {/* Types Row */}
                  <div className="flex flex-col space-y-2">
                    <span className="text-xs font-medium text-foreground/80">
                      Type{compApi.types.length > 1 ? "s" : ""}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {compApi.types.map((type) => (
                        <code
                          key={type}
                          className="inline-flex items-center px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                        >
                          {type}
                        </code>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                {/* Prop */}
                <TableCell className="hidden lg:table-cell px-4 py-3 font-medium text-foreground align-top">
                  {compApi.prop}
                </TableCell>

                {/* Description */}
                <TableCell className="hidden min-w-[360px] lg:table-cell whitespace-pre-line px-4 py-3 text-muted-foreground align-top">
                  {compApi.description}
                </TableCell>

                {/* Type */}
                <TableCell className="hidden lg:table-cell px-4 py-3 align-top">
                  <div className="flex flex-wrap gap-1.5">
                    {compApi.types.map((type) => (
                      <code
                        key={type}
                        className="inline-block px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium border border-primary/20 whitespace-nowrap"
                      >
                        {type}
                      </code>
                    ))}
                  </div>
                </TableCell>

                {/* Default */}
                <TableCell className="hidden lg:table-cell px-4 py-3 text-muted-foreground align-top">
                  {compApi.default || (
                    <span className="text-muted-foreground/70">-</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}