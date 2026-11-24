import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const entry =
  "They subpoenaed the blockchain, held three hearings on superintelligence, and wrote nine hundred pages to govern the internet, then converted their own bill to PDF by renaming the file BILL_PDF.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, entry, "utf8");
